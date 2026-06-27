import { POPPINS, MONO, CARD } from '../lib/styles.js'
import Steps from './Steps.jsx'

const BLUE_BOX = { background: '#eef7fb', border: '1px solid #c4e4ef', borderLeft: '4px solid #2aa7cd', borderRadius: 10, padding: '18px 20px' }
const BOX_LABEL = { fontSize: 12.5, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase', color: '#2188a8', marginBottom: 8 }
const BIG_RESULT = { fontFamily: MONO, fontWeight: 700, fontSize: 26, lineHeight: 1.3, color: '#0e1b3d', wordBreak: 'break-word' }

export default function ResultCard({ result, showSteps, onToggleSteps }) {
  const r = result
  const isError = !!r && r.type === 'error'
  const isPoly = !!r && r.type === 'poly'
  const isNumber = !!r && r.type === 'number'
  const isEmpty = !r
  const steps = r && r.steps ? r.steps : []

  let kind = 'Waiting', badgeColor = '#9aa3b8', badgeBg = '#f1f5fb'
  if (isNumber) { kind = 'Number'; badgeColor = '#2188a8'; badgeBg = '#eaf6fb' }
  else if (isPoly) { kind = 'Polynomial'; badgeColor = '#cf3a30'; badgeBg = '#fdeeec' }
  else if (isError) { kind = 'Check input'; badgeColor = '#cf3a30'; badgeBg = '#fdeeec' }

  return (
    <section style={{ ...CARD, minHeight: 300 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 9, padding: '20px 22px', borderBottom: '1px solid #eef1f7' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
          <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#2aa7cd' }} />
          <h2 style={{ fontFamily: POPPINS, fontWeight: 700, fontSize: 18, margin: 0, color: '#0e1b3d' }}>Result</h2>
        </div>
        <span style={{ fontSize: 12, fontWeight: 700, color: badgeColor, background: badgeBg, padding: '4px 11px', borderRadius: 20 }}>{kind}</span>
      </div>

      <div style={{ padding: 22 }}>
        {isEmpty && (
          <div style={{ textAlign: 'center', padding: '40px 10px', color: '#9aa3b8' }}>
            <div style={{ fontSize: 40, fontFamily: MONO, color: '#dde3ee', marginBottom: 10 }}>( × )</div>
            <p style={{ margin: 0, fontSize: 15 }}>Your factored answer and step-by-step working will appear here.</p>
          </div>
        )}

        {isError && (
          <div style={{ background: '#fdeeec', border: '1px solid #f6c9c4', color: '#b23a30', borderRadius: 10, padding: '16px 18px', fontSize: 15, fontWeight: 600, animation: 'a4uPop .25s ease' }}>
            {r.message}
          </div>
        )}

        {isPoly && (
          <div style={{ animation: 'a4uPop .25s ease' }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#9aa3b8', marginBottom: 6 }}>EXPRESSION</div>
            <div style={{ fontFamily: MONO, fontSize: 18, color: '#56607a', marginBottom: 18 }}>{r.inputPretty}</div>
            <div style={BLUE_BOX}>
              <div style={BOX_LABEL}>{r.isPrime ? 'Already prime (irreducible)' : 'Factored form'}</div>
              <div style={BIG_RESULT}>{r.factored}</div>
            </div>
          </div>
        )}

        {isNumber && (
          <div style={{ animation: 'a4uPop .25s ease' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 18, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: '#9aa3b8' }}>FACTORING</span>
              <span style={{ fontFamily: MONO, fontSize: 20, fontWeight: 700, color: '#0e1b3d' }}>{r.display}</span>
              {r.isPrime && <span style={{ fontSize: 12, fontWeight: 700, color: '#f6a823', background: '#fff6e6', border: '1px solid #f6dca0', padding: '3px 9px', borderRadius: 20 }}>prime number</span>}
            </div>

            <div style={{ ...BLUE_BOX, marginBottom: 18 }}>
              <div style={BOX_LABEL}>Prime factorization</div>
              <div style={BIG_RESULT}>{r.primePretty}</div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#6a7390' }}>All factors</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#2aa7cd', background: '#eaf6fb', padding: '2px 9px', borderRadius: 20 }}>{r.count} total</div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
              {r.divisors.map((d, i) => (
                <span key={i} style={{ fontFamily: MONO, fontSize: 14, fontWeight: 600, color: '#3c4661', background: '#f4f7fc', border: '1px solid #e4e9f2', borderRadius: 7, padding: '5px 10px' }}>{d}</span>
              ))}
            </div>

            <div style={{ fontSize: 13, fontWeight: 700, color: '#6a7390', marginBottom: 10 }}>Factor pairs</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(120px,1fr))', gap: 8 }}>
              {r.pairs.map((p, i) => (
                <div key={i} style={{ fontFamily: MONO, fontSize: 14, color: '#0e1b3d', background: '#fbfcfe', border: '1px solid #e4e9f2', borderRadius: 8, padding: '8px 11px', textAlign: 'center' }}>{p.a} × {p.b}</div>
              ))}
            </div>
          </div>
        )}

        {!isError && steps.length > 0 && (
          <Steps steps={steps} showSteps={showSteps} onToggle={onToggleSteps} />
        )}
      </div>
    </section>
  )
}
