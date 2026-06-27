import { useState, useEffect, useCallback } from 'react'
import { factor } from './lib/factoring.js'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import InputCard from './components/InputCard.jsx'
import ResultCard from './components/ResultCard.jsx'
import HowToUse from './components/HowToUse.jsx'
import WhatIsFactoring from './components/WhatIsFactoring.jsx'
import Faq from './components/Faq.jsx'
import Footer from './components/Footer.jsx'

const DEFAULT_INPUT = 'x^2 + 5x + 6'

export default function App() {
  const [input, setInput] = useState(DEFAULT_INPUT)
  const [mode, setMode] = useState('auto')
  const [result, setResult] = useState(null)
  const [showSteps, setShowSteps] = useState(true)

  // Factor the default expression once on first load.
  useEffect(() => {
    setResult(factor(DEFAULT_INPUT, 'auto'))
  }, [])

  const calculate = useCallback(() => setResult(factor(input, mode)), [input, mode])

  const handleSetMode = (m) => {
    setMode(m)
    // Re-factor with the new mode only if there is already a result on screen.
    setResult((prev) => (prev ? factor(input, m) : prev))
  }

  const handleInsert = (text) => setInput((s) => s + text)

  const handleExample = (value, m) => {
    setInput(value)
    setMode(m || 'auto')
    setResult(factor(value, m || 'auto'))
  }

  const handleClear = () => {
    setInput('')
    setResult(null)
  }

  const handleKey = (e) => {
    if (e.key === 'Enter') setResult(factor(input, mode))
  }

  return (
    <div style={{ minHeight: '100%', background: '#f4f7fc' }}>
      <Header />
      <Hero />

      <main style={{ maxWidth: 1140, margin: '0 auto', padding: '30px 24px 10px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(330px,1fr))', gap: 22, alignItems: 'start' }}>
          <InputCard
            input={input}
            mode={mode}
            onInput={(e) => setInput(e.target.value)}
            onKey={handleKey}
            onCalculate={calculate}
            onClear={handleClear}
            onSetMode={handleSetMode}
            onInsert={handleInsert}
            onExample={handleExample}
          />
          <ResultCard
            result={result}
            showSteps={showSteps}
            onToggleSteps={() => setShowSteps((s) => !s)}
          />
        </div>
      </main>

      <HowToUse />
      <WhatIsFactoring />
      <Faq />
      <Footer />
    </div>
  )
}
