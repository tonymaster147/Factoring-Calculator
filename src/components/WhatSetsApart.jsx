import { POPPINS } from '../lib/styles.js'

const CARDS = [
  {
    t: 'Plot Effective Polynomials',
    body: 'Our factor grouping calculator can easily plot polynomials and automatically identify the equations’ final behavior.',
    icon: (
      <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#f6a823" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 16 }}>
        <path d="M3 3v18h18"></path><path d="m5 15 4-6 4 4 6-8"></path>
      </svg>
    ),
  },
  {
    t: 'Provide Immediate Outcomes',
    body: 'Hour-long wait times for answers are no longer necessary. Results from our factoring steps calculator are produced in a matter of seconds.',
    icon: (
      <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#2f6fd6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 16 }}>
        <circle cx="12" cy="13" r="8"></circle><path d="M12 9v4l2.5 2.5"></path><path d="M9 2h6"></path>
      </svg>
    ),
  },
  {
    t: 'Easy-to-use Interface',
    body: 'It’s simple to utilize our factor expressions calculator. It may be used by any learner with a basic understanding of technology.',
    icon: (
      <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#2aa7cd" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 16 }}>
        <circle cx="12" cy="8" r="4"></circle><path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5"></path>
      </svg>
    ),
  },
]

export default function WhatSetsApart() {
  return (
    <section style={{ background: '#ffffff' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: 'clamp(40px,5.5vw,64px) clamp(16px,3vw,24px) 10px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: POPPINS, fontWeight: 800, fontSize: 'clamp(24px,3.4vw,34px)', lineHeight: 1.25, margin: '0 0 clamp(26px,4vw,40px)', color: '#1e2a63', textWrap: 'balance' }}>
          What Sets Our Factorization Calculator Tool Apart From Others?
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 22, textAlign: 'left' }}>
          {CARDS.map((c) => (
            <div key={c.t} style={{ background: '#fff', border: '1px solid #eef1f7', borderRadius: 10, padding: '28px 24px', boxShadow: '0 10px 26px rgba(20,34,74,.08)' }}>
              {c.icon}
              <h3 style={{ fontFamily: POPPINS, fontWeight: 700, fontSize: 18, color: '#0e1b3d', margin: '0 0 10px' }}>{c.t}</h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: '#56607a' }}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
