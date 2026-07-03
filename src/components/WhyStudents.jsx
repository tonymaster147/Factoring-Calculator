import { POPPINS } from '../lib/styles.js'

const CARDS = [
  { t: 'Accuracy', body: 'Factoring polynomials can involve complex arithmetic and can be prone to human error. Factoring calculators ensure accuracy in the process, reducing the chances of mistakes.' },
  { t: 'Efficiency', body: 'Factoring calculators can quickly factor in polynomials, saving students time and allowing them to focus on understanding the concepts behind factoring rather than spending excessive time on tedious calculations.' },
  { t: 'Verification', body: 'Students can use factoring calculators to check their work and verify whether they have factored a polynomial correctly. This helps reinforce learning and build confidence in their problem-solving skills.' },
]

export default function WhyStudents() {
  return (
    <section style={{ background: '#ffffff' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: 'clamp(40px,5.5vw,60px) clamp(16px,3vw,24px) 10px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: POPPINS, fontWeight: 800, fontSize: 'clamp(24px,3.4vw,34px)', lineHeight: 1.25, margin: '0 0 12px', color: '#1e2a63', textWrap: 'balance' }}>
          Why Do Students Need An Online Factoring Calculator?
        </h2>
        <p style={{ margin: '0 0 34px', fontSize: 16, color: '#56607a' }}>Students need a factoring calculator with steps for the following reasons:</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 22, textAlign: 'left' }}>
          {CARDS.map((c) => (
            <div key={c.t} style={{ background: '#fff', border: '1px solid #eef1f7', borderRadius: 10, padding: '26px 24px', boxShadow: '0 10px 26px rgba(20,34,74,.08)' }}>
              <h3 style={{ fontFamily: POPPINS, fontWeight: 700, fontSize: 19, color: '#0e1b3d', margin: '0 0 10px' }}>{c.t}</h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: '#56607a' }}>{c.body}</p>
            </div>
          ))}
        </div>
        <a href="https://www.assignments4u.com/sign-up/" style={{ display: 'inline-block', marginTop: 36, background: '#f6941e', color: '#fff', fontFamily: POPPINS, fontWeight: 600, fontSize: 16, textDecoration: 'none', padding: '14px 34px', borderRadius: 6, boxShadow: '0 6px 16px rgba(246,148,30,.35)' }}>
          Click To Connect
        </a>
      </div>
    </section>
  )
}
