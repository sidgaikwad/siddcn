'use client'

import { useState, useEffect } from 'react'

export function TerminalDemo() {
  const [step, setStep] = useState(0)
  const [output, setOutput] = useState<string[]>([])

  const sequence = [
    { delay: 500, text: '$ siddcn', type: 'input' },
    { delay: 1000, text: '🚀 Initializing...', type: 'output' },
    { delay: 800, text: '[████████████████████] 100%', type: 'output' },
    { delay: 500, text: '', type: 'output' },
    { delay: 300, text: '✨ Component Categories', type: 'title' },
    { delay: 300, text: '━━━━━━━━━━━━━━━━━━━━━━━━━━', type: 'separator' },
    { delay: 200, text: '🔘  Buttons', type: 'menu' },
    { delay: 200, text: '📊  Progress Bars', type: 'menu' },
    { delay: 200, text: '🏷️   Badges', type: 'menu' },
    { delay: 200, text: '📈  Charts', type: 'menu' },
    { delay: 200, text: '🌳  Trees', type: 'menu' },
  ]

  useEffect(() => {
    if (step < sequence.length) {
      const timer = setTimeout(() => {
        setOutput(prev => [...prev, sequence[step].text])
        setStep(step + 1)
      }, sequence[step].delay)

      return () => clearTimeout(timer)
    } else {
      // Reset after completion
      const resetTimer = setTimeout(() => {
        setStep(0)
        setOutput([])
      }, 3000)
      return () => clearTimeout(resetTimer)
    }
  }, [step])

  const getLineClass = (index: number) => {
    const item = sequence[index]
    if (!item) return 'text-terminal-text'
    
    switch (item.type) {
      case 'input':
        return 'text-terminal-green'
      case 'title':
        return 'text-terminal-cyan font-bold'
      case 'separator':
        return 'text-terminal-blue/50'
      case 'menu':
        return 'text-terminal-text hover:text-terminal-cyan cursor-pointer'
      default:
        return 'text-terminal-text'
    }
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="bg-terminal-bg border border-terminal-cyan/30 rounded-lg shadow-2xl overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-terminal-bg/80 border-b border-terminal-cyan/20">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-terminal-red"></div>
            <div className="w-3 h-3 rounded-full bg-terminal-yellow"></div>
            <div className="w-3 h-3 rounded-full bg-terminal-green"></div>
          </div>
          <span className="ml-4 text-terminal-text/60 text-sm font-mono">
            siddcn@terminal ~ %
          </span>
        </div>

        {/* Terminal Content */}
        <div className="p-6 font-mono text-sm min-h-[400px]">
          {output.map((line, idx) => (
            <div key={idx} className={`${getLineClass(idx)} mb-1`}>
              {line}
              {idx === output.length - 1 && step < sequence.length && (
                <span className="inline-block w-2 h-4 bg-terminal-cyan ml-1 animate-pulse"></span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Floating hint */}
      <div className="absolute -bottom-8 right-4 text-sm text-terminal-text/50">
        <span className="animate-pulse">◉</span> Live demo • Auto-restarts
      </div>
    </div>
  )
}
