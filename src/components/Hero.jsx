import { POPPINS } from '../lib/styles.js'

export default function Hero() {
  const scrollToCalculator = (e) => {
    e.preventDefault()
    const el = document.getElementById('calculator')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section style={{ background: 'linear-gradient(110deg,#1b46c9 0%,#1a72a3 50%,#16a06a 100%)', color: '#fff' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: 'clamp(44px,7vw,72px) 20px clamp(48px,7vw,76px)', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.25)', color: '#fff', fontFamily: POPPINS, fontWeight: 600, fontSize: 'clamp(12.5px,1.6vw,15px)', padding: '8px 18px', borderRadius: 30, marginBottom: 'clamp(18px,3vw,26px)' }}>
          🎉 Expert Help Available | Guaranteed Grade Support
        </div>
        <h1 style={{ fontFamily: POPPINS, fontWeight: 800, fontSize: 'clamp(28px,5vw,52px)', lineHeight: 1.18, margin: '0 0 clamp(14px,2.5vw,22px)', letterSpacing: '-.01em', textWrap: 'balance' }}>
          Free Factoring Calculator: Solve Complex Equations Instantly
        </h1>
        <p style={{ margin: '0 auto clamp(24px,4vw,34px)', maxWidth: 820, fontSize: 'clamp(16px,2.2vw,20px)', lineHeight: 1.6, color: '#ffffff', opacity: 0.95 }}>
          Factorise polynomials, quadratics, and expressions with full step-by-step workings. Stuck on a complex math assignment? Get expert help to secure your target marks.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px 16px' }}>
          <a href="https://www.assignments4u.com/sign-up/" style={{ display: 'inline-block', background: '#f6941e', color: '#fff', fontFamily: POPPINS, fontWeight: 600, fontSize: 'clamp(15px,1.8vw,17px)', textDecoration: 'none', padding: '14px clamp(20px,3vw,30px)', borderRadius: 6, boxShadow: '0 6px 16px rgba(0,0,0,.18)', textAlign: 'center' }}>
            Get Help from Experts
          </a>
          <a href="#calculator" onClick={scrollToCalculator} style={{ display: 'inline-block', background: 'rgba(255,255,255,.08)', color: '#fff', fontFamily: POPPINS, fontWeight: 600, fontSize: 'clamp(15px,1.8vw,17px)', textDecoration: 'none', padding: '14px clamp(20px,3vw,30px)', borderRadius: 6, border: '1.5px solid rgba(255,255,255,.55)', textAlign: 'center' }}>
            Use Free Calculator
          </a>
        </div>
      </div>
    </section>
  )
}
