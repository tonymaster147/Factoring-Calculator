import { LOGO } from '../lib/styles.js'

export default function Header() {
  return (
    <header style={{ background: '#4193F7', color: '#fff' }}>
      <div id="a4u-head" style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px 24px', padding: '15px clamp(16px,3vw,24px)' }}>
        <img src={LOGO} alt="Assignments4U" style={{ height: 32, width: 'auto', display: 'block' }} />
        <nav id="a4u-nav" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px 22px', fontSize: 'clamp(13px,1.5vw,16px)', fontWeight: 700, color: '#fff' }}>
          <a href="mailto:info@assignments4u.com" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#fff', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m2 7 10 6 10-6"></path></svg>
            info@assignments4u.com
          </a>
          <a href="tel:+15597420021" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: '#2f6fd6', textDecoration: 'none', padding: '9px clamp(14px,2vw,22px)', borderRadius: 30, fontWeight: 700, boxShadow: '0 4px 12px rgba(0,0,0,.08)', whiteSpace: 'nowrap' }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.53 15.53 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.24 1.02l-2.21 2.2Z"></path></svg>
            +1-559-742-0021
          </a>
        </nav>
      </div>
    </header>
  )
}
