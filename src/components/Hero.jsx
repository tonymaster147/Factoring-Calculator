import { POPPINS } from '../lib/styles.js'

export default function Hero() {
  return (
    <section style={{ background: '#ffffff', borderBottom: '1px solid #e4e9f2' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '34px 24px 30px' }}>
        <h1 style={{ fontFamily: POPPINS, fontWeight: 800, fontSize: 40, lineHeight: 1.1, margin: '0 0 12px', color: '#0e1b3d', letterSpacing: '-.01em' }}>
          Factoring Calculator
        </h1>
        <div style={{ width: 64, height: 4, borderRadius: 3, background: 'linear-gradient(90deg,#e5463c 0 33%,#2aa7cd 33% 66%,#f6a823 66% 100%)', marginBottom: 16 }} />
        <p style={{ margin: 0, maxWidth: 680, fontSize: 17, lineHeight: 1.6, color: '#56607a' }}>
          Factor whole numbers into primes or break algebraic expressions into their factors — instantly, with clear step-by-step working you can learn from.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 20 }}>
          {['100% Free', 'No sign-up', 'Step-by-step solutions'].map((t) => (
            <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 13.5, fontWeight: 600, color: '#3c4661', background: '#f1f5fb', border: '1px solid #e4e9f2', padding: '7px 13px', borderRadius: 30 }}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
