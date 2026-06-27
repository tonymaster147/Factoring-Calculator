// Shared inline-style constants (kept in JS to mirror the original design 1:1).

export const LOGO = './uploads/Assignment4U.webp'

export const MONO = "ui-monospace,'SFMono-Regular',Menlo,monospace"
export const POPPINS = "'Poppins',sans-serif"

export const tabStyle = (active) => {
  const base = { fontWeight: 700, fontSize: 14, padding: '8px 16px', borderRadius: 7, transition: 'all .15s' }
  return active
    ? { ...base, background: '#0e1b3d', color: '#fff' }
    : { ...base, background: 'transparent', color: '#6a7390' }
}

export const CHIP = {
  fontFamily: MONO, fontSize: 14, fontWeight: 700, color: '#0e1b3d',
  background: '#f1f5fb', border: '1px solid #e0e6f0', borderRadius: 8,
  padding: '7px 13px', minWidth: 38,
}

export const EX_CHIP = {
  fontFamily: MONO, fontSize: 13.5, fontWeight: 600, color: '#2188a8',
  background: '#eaf6fb', border: '1px solid #c4e4ef', borderRadius: 8,
  padding: '7px 12px',
}

export const CARD = {
  background: '#fff', border: '1px solid #e4e9f2', borderRadius: 14,
  boxShadow: '0 6px 22px rgba(20,34,74,.05)', overflow: 'hidden',
}
