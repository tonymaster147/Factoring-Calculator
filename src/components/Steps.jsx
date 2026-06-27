import { POPPINS, MONO } from '../lib/styles.js'

export default function Steps({ steps, showSteps, onToggle }) {
  if (!steps.length) return null
  return (
    <div style={{ marginTop: 22, borderTop: '1px solid #eef1f7', paddingTop: 16 }}>
      <button onClick={onToggle} style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: POPPINS, fontWeight: 700, fontSize: 14.5, color: '#0e1b3d' }}>
        <span style={{ color: '#e5463c' }}>{showSteps ? '▾' : '▸'}</span>
        {showSteps ? 'Hide step-by-step solution' : 'Show step-by-step solution'}
      </button>
      {showSteps && (
        <ol style={{ listStyle: 'none', margin: '14px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {steps.map((t, i) => (
            <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span style={{ flex: 'none', width: 26, height: 26, borderRadius: '50%', background: '#0e1b3d', color: '#fff', fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</span>
              <span style={{ fontFamily: MONO, fontSize: 14.5, lineHeight: 1.55, color: '#3c4661', paddingTop: 2 }}>{t}</span>
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}
