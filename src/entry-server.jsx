import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

// Used only at build time by scripts/prerender.mjs so crawlers receive the
// full page content in the initial HTML; the browser then hydrates it.
export function render() {
  return renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
