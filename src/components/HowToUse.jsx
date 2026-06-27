import { POPPINS } from '../lib/styles.js'

const CARDS = [
  { n: 1, bg: '#2aa7cd', t: 'Type your problem', body: <>Enter a whole number like <b>360</b>, or an algebraic expression like <b>x^2 + 5x + 6</b>. Use <b>^</b> for exponents.</> },
  { n: 2, bg: '#e5463c', t: 'Choose a mode', body: <>Leave it on <b>Auto</b> and we detect the type for you, or lock it to <b>Number</b> or <b>Polynomial</b> mode.</> },
  { n: 3, bg: '#f6a823', t: 'Read the steps', body: <>Get the factored answer plus a clear, step-by-step breakdown so you understand exactly how it was solved.</> },
]

export default function HowToUse() {
  return (
    <section style={{ maxWidth: 1140, margin: '0 auto', padding: '34px 24px 10px' }}>
      <h2 style={{ fontFamily: POPPINS, fontWeight: 700, fontSize: 24, color: '#0e1b3d', margin: '0 0 6px' }}>How to use the factoring calculator</h2>
      <div style={{ width: 48, height: 3, borderRadius: 3, background: '#e5463c', marginBottom: 22 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 18 }}>
        {CARDS.map((c) => (
          <div key={c.n} style={{ background: '#fff', border: '1px solid #e4e9f2', borderRadius: 12, padding: 22 }}>
            <div style={{ fontFamily: POPPINS, fontWeight: 800, fontSize: 18, color: '#fff', background: c.bg, width: 38, height: 38, borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>{c.n}</div>
            <h3 style={{ fontFamily: POPPINS, fontWeight: 700, fontSize: 16.5, color: '#0e1b3d', margin: '0 0 7px' }}>{c.t}</h3>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: '#56607a' }}>{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
