'use client'

import Link from 'next/link'

export function ComponentGrid() {
  const categories = [
    {
      id: 'buttons',
      name: 'Buttons',
      icon: '🔘',
      count: 3,
      description: 'Interactive button components',
      preview: '[ Button ]'
    },
    {
      id: 'progress',
      name: 'Progress Bars',
      icon: '📊',
      count: 3,
      description: 'Progress indicators',
      preview: '[████████░░] 75%'
    },
    {
      id: 'badges',
      name: 'Badges',
      icon: '🏷️',
      count: 3,
      description: 'Status indicators',
      preview: '⟨ Active ⟩'
    },
    {
      id: 'charts',
      name: 'Charts',
      icon: '📈',
      count: 2,
      description: 'Data visualization',
      preview: '▂▃▅▇▆▄▂'
    },
    {
      id: 'trees',
      name: 'Trees',
      icon: '🌳',
      count: 2,
      description: 'Hierarchical data',
      preview: '├─ src/\n└─ dist/'
    }
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/components/${category.id}`}
          className="group block p-6 bg-terminal-bg/50 border border-terminal-blue/20 rounded-lg hover:border-terminal-blue/50 transition-all hover:transform hover:scale-105"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="text-4xl">{category.icon}</div>
            <span className="text-xs px-2 py-1 bg-terminal-cyan/20 text-terminal-cyan rounded">
              {category.count} variants
            </span>
          </div>
          
          <h3 className="text-xl font-semibold text-terminal-cyan mb-2 group-hover:text-terminal-blue transition-colors">
            {category.name}
          </h3>
          
          <p className="text-terminal-text/70 text-sm mb-4">
            {category.description}
          </p>
          
          <div className="bg-terminal-bg/80 border border-terminal-cyan/10 rounded p-3 font-mono text-sm text-terminal-green">
            <pre className="whitespace-pre">{category.preview}</pre>
          </div>
        </Link>
      ))}
      
      <div className="p-6 bg-terminal-bg/30 border border-dashed border-terminal-text/20 rounded-lg flex flex-col items-center justify-center text-center">
        <div className="text-4xl mb-4">➕</div>
        <h3 className="text-xl font-semibold text-terminal-text/60 mb-2">
          More Coming Soon
        </h3>
        <p className="text-terminal-text/50 text-sm mb-4">
          Or create your own!
        </p>
        <Link 
          href="/docs/adding-components"
          className="text-terminal-cyan text-sm hover:underline"
        >
          Learn how →
        </Link>
      </div>
    </div>
  )
}
