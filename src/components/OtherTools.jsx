import { POPPINS } from '../lib/styles.js'

const TOOLS = [
  { name: 'Spell Checker', href: 'https://www.assignments4u.com/spell-checker/' },
  { name: 'Grammar Checker', href: 'https://www.assignments4u.com/grammar-checker/' },
  { name: 'GPA Calculator', href: 'https://www.assignments4u.com/gpa-calculator/' },
  { name: 'Plagiarism Checker', href: 'https://www.assignments4u.com/plagiarism-checker/' },
]

export default function OtherTools() {
  return (
    <section style={{ background: '#ffffff' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: 'clamp(40px,5.5vw,64px) clamp(16px,3vw,24px) clamp(46px,6vw,70px)', textAlign: 'center' }}>
        <h2 style={{ fontFamily: POPPINS, fontWeight: 800, fontSize: 'clamp(24px,3.4vw,34px)', margin: '0 0 clamp(26px,4vw,38px)', color: '#1e2a63' }}>
          Other Free Tools We Provide
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,max-content))', justifyContent: 'center', gap: '30px clamp(60px,10vw,140px)', textAlign: 'left' }}>
          {TOOLS.map((t) => (
            <a key={t.name} href={t.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="#1e2a63">
                <circle cx="12" cy="12" r="11"></circle>
                <path d="m7.6 12.3 2.8 2.8 5.8-6.2" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              <span style={{ fontFamily: POPPINS, fontWeight: 600, fontSize: 16.5, color: '#1e2a63' }}>{t.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
