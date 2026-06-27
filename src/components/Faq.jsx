import { useState } from 'react'
import { POPPINS } from '../lib/styles.js'

const FAQS = [
  { q: 'What does this factoring calculator do?', a: 'It factors two kinds of input. Give it a whole number and it returns the prime factorization, every divisor and all factor pairs. Give it an algebraic expression and it factors it into the product of its simplest factors over the rational numbers.' },
  { q: 'How do I type powers and expressions?', a: 'Use the caret symbol ^ for exponents — for example x^2 for x squared or x^3 for x cubed. Write coefficients next to the variable (3x, 2x^2) and separate terms with + and -. You can use one variable, such as x, y or n.' },
  { q: 'What types of polynomials can it factor?', a: 'It handles common school and college problems: greatest common factors, quadratics (the AC method), difference of squares, perfect squares, and higher-degree polynomials that have rational factors. If an expression cannot be factored further it is reported as prime.' },
  { q: 'Is the factoring calculator free?', a: 'Yes. It is completely free to use with no sign-up or limits. If you need full worked solutions or help with the rest of your coursework, our PhD subject experts are available 24/7.' },
]

export default function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section style={{ maxWidth: 1140, margin: '0 auto', padding: '34px 24px 50px' }}>
      <h2 style={{ fontFamily: POPPINS, fontWeight: 700, fontSize: 24, color: '#0e1b3d', margin: '0 0 6px' }}>Frequently asked questions</h2>
      <div style={{ width: 48, height: 3, borderRadius: 3, background: '#e5463c', marginBottom: 22 }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 820 }}>
        {FAQS.map((f, i) => (
          <div key={i} style={{ background: '#fff', border: '1px solid #e4e9f2', borderRadius: 11, overflow: 'hidden' }}>
            <button onClick={() => setOpen(open === i ? -1 : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, padding: '17px 20px', textAlign: 'left' }}>
              <span style={{ fontFamily: POPPINS, fontWeight: 700, fontSize: 16, color: '#0e1b3d' }}>{f.q}</span>
              <span style={{ flex: 'none', fontSize: 22, fontWeight: 700, color: '#e5463c', lineHeight: 1 }}>{open === i ? '−' : '+'}</span>
            </button>
            {open === i && <div style={{ padding: '0 20px 18px', fontSize: 15, lineHeight: 1.65, color: '#56607a' }}>{f.a}</div>}
          </div>
        ))}
      </div>
    </section>
  )
}
