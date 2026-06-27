import { LOGO } from '../lib/styles.js'

export default function Footer() {
  return (
    <footer style={{ background: '#0a1430', color: '#aeb8d0' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '22px 24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 14, fontSize: 14 }}>
        <img src={LOGO} alt="Assignments4U" style={{ height: 26, width: 'auto', opacity: 0.95 }} />
        <span>© Assignments4U — Free Factoring Calculator</span>
      </div>
    </footer>
  )
}
