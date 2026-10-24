import { useState, useCallback } from 'react'
import { factor } from './lib/factoring.js'
import { POPPINS } from './lib/styles.js'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import InputCard from './components/InputCard.jsx'
import ResultCard from './components/ResultCard.jsx'
import WhyStudents from './components/WhyStudents.jsx'
import WhatSetsApart from './components/WhatSetsApart.jsx'
import OtherTools from './components/OtherTools.jsx'
import Footer from './components/Footer.jsx'

const DEFAULT_INPUT = 'x^2 + 5x + 6'

export default function App() {
  const [input, setInput] = useState(DEFAULT_INPUT)
  const [mode, setMode] = useState('auto')
  // Factor the default expression up front so the worked example is in the
  // prerendered HTML, not only added after JavaScript runs.
  const [result, setResult] = useState(() => factor(DEFAULT_INPUT, 'auto'))
  const [showSteps, setShowSteps] = useState(true)

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
    <div style={{ minHeight: '100%', background: '#ffffff' }}>
      <Header />
      <Hero />

      <section id="calculator" style={{ background: '#ffffff' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: 'clamp(36px,5vw,56px) clamp(16px,3vw,24px) 30px' }}>
          <h2 style={{ fontFamily: POPPINS, fontWeight: 800, fontSize: 'clamp(27px,3.6vw,36px)', lineHeight: 1.15, margin: '0 0 12px', color: '#0e1b3d' }}>
            Factoring Calculator
          </h2>
          <p style={{ margin: '0 0 18px', maxWidth: 680, fontSize: 17, lineHeight: 1.6, color: '#56607a' }}>
            Factor whole numbers into primes or break algebraic expressions into their factors — instantly, with clear step-by-step working you can learn from.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 28 }}>
            {['100% Free', 'No sign-up', 'Step-by-step solutions'].map((t) => (
              <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 13.5, fontWeight: 600, color: '#3c4661', background: '#f1f5fb', border: '1px solid #e4e9f2', padding: '7px 13px', borderRadius: 30 }}>{t}</span>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(330px,100%),1fr))', gap: 22, alignItems: 'start' }}>
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
        </div>
      </section>

      <WhyStudents />
      <WhatSetsApart />
      <OtherTools />
      <Footer />
    </div>
  )
}
