import { POPPINS, MONO, CARD, CHIP, EX_CHIP, tabStyle } from '../lib/styles.js'

const EXAMPLES = [
  { label: 'x² + 5x + 6', value: 'x^2 + 5x + 6', mode: 'polynomial' },
  { label: '2x² − 8', value: '2x^2 - 8', mode: 'polynomial' },
  { label: 'x³ − 27', value: 'x^3 - 27', mode: 'polynomial' },
  { label: '360', value: '360', mode: 'number' },
]

export default function InputCard({ input, mode, onInput, onKey, onCalculate, onClear, onSetMode, onInsert, onExample }) {
  return (
    <section style={CARD}>
      <div style={{ padding: '20px 22px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 16 }}>
          <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#e5463c' }} />
          <h2 style={{ fontFamily: POPPINS, fontWeight: 700, fontSize: 18, margin: 0, color: '#0e1b3d' }}>Enter your problem</h2>
        </div>

        <div style={{ display: 'inline-flex', background: '#eef2f8', border: '1px solid #e4e9f2', borderRadius: 10, padding: 4, gap: 3, marginBottom: 16 }}>
          <button onClick={() => onSetMode('auto')} style={tabStyle(mode === 'auto')}>Auto</button>
          <button onClick={() => onSetMode('number')} style={tabStyle(mode === 'number')}>Number</button>
          <button onClick={() => onSetMode('polynomial')} style={tabStyle(mode === 'polynomial')}>Polynomial</button>
        </div>
      </div>

      <div style={{ padding: '0 22px 22px' }}>
        <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#6a7390', marginBottom: 8 }}>Number or expression</label>
        <input
          value={input}
          onChange={onInput}
          onKeyDown={onKey}
          placeholder="e.g.  x^2 + 5x + 6   or   360"
          style={{ width: '100%', fontFamily: MONO, fontSize: 19, color: '#0e1b3d', background: '#fbfcfe', border: '1.5px solid #d7deea', borderRadius: 10, padding: '14px 15px', outline: 'none' }}
        />

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 12 }}>
          <button onClick={() => onInsert('x')} style={CHIP}>x</button>
          <button onClick={() => onInsert('x^2')} style={CHIP}>x²</button>
          <button onClick={() => onInsert('^')} style={CHIP}>x^n</button>
          <button onClick={() => onInsert(' + ')} style={CHIP}>+</button>
          <button onClick={() => onInsert(' - ')} style={CHIP}>−</button>
          <button onClick={() => onInsert('(')} style={CHIP}>(</button>
          <button onClick={() => onInsert(')')} style={CHIP}>)</button>
        </div>

        <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
          <button onClick={onCalculate} style={{ flex: 1, background: '#e5463c', color: '#fff', fontWeight: 700, fontSize: 16, padding: 14, borderRadius: 10, boxShadow: '0 6px 14px rgba(229,70,60,.28)' }}>Factor it</button>
          <button onClick={onClear} style={{ background: '#fff', color: '#56607a', fontWeight: 700, fontSize: 15, padding: '14px 20px', borderRadius: 10, border: '1.5px solid #d7deea' }}>Clear</button>
        </div>

        <div style={{ marginTop: 20, borderTop: '1px solid #eef1f7', paddingTop: 16 }}>
          <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase', color: '#9aa3b8', marginBottom: 10 }}>Try an example</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {EXAMPLES.map((ex) => (
              <button key={ex.value} onClick={() => onExample(ex.value, ex.mode)} style={EX_CHIP}>{ex.label}</button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
