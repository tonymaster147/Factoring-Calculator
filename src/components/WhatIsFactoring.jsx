import { POPPINS, MONO } from '../lib/styles.js'

export default function WhatIsFactoring() {
  return (
    <section style={{ maxWidth: 1140, margin: '0 auto', padding: '34px 24px 10px' }}>
      <div style={{ background: '#0e1b3d', borderRadius: 14, padding: '32px 30px', color: '#dbe2f1' }}>
        <h2 style={{ fontFamily: POPPINS, fontWeight: 700, fontSize: 22, color: '#fff', margin: '0 0 12px' }}>What is factoring?</h2>
        <p style={{ margin: '0 0 14px', fontSize: 15.5, lineHeight: 1.7, maxWidth: 820 }}>
          Factoring means rewriting a number or expression as a product of simpler parts. A number like <b style={{ color: '#fff' }}>360</b> becomes a product of primes — <span style={{ fontFamily: MONO, color: '#7fd0e6' }}>2³ × 3² × 5</span> — while a quadratic like <span style={{ fontFamily: MONO, color: '#7fd0e6' }}>x² + 5x + 6</span> breaks into binomial factors <span style={{ fontFamily: MONO, color: '#7fd0e6' }}>(x + 2)(x + 3)</span>.
        </p>
        <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.7, maxWidth: 820 }}>
          It is one of the most important skills in algebra — used to simplify fractions, solve equations and find roots. Stuck on the rest of your math course? Our PhD experts offer full math homework help.
        </p>
      </div>
    </section>
  )
}
