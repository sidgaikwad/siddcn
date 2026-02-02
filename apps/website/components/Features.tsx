'use client'

export function Features() {
  const features = [
    {
      icon: '🎯',
      title: 'Extensible Architecture',
      description: 'Add new component types in minutes with our simple registry pattern'
    },
    {
      icon: '🔌',
      title: 'SSH Access',
      description: 'Connect remotely and browse components from anywhere'
    },
    {
      icon: '🎨',
      title: 'Beautiful UI',
      description: 'Gradient animations, colors, and smooth navigation'
    },
    {
      icon: '⌨️',
      title: 'Keyboard Navigation',
      description: 'Vim-like keybindings and intuitive controls'
    },
    {
      icon: '📦',
      title: 'Component Library',
      description: 'Pre-built components for buttons, charts, forms, and more'
    },
    {
      icon: '🚀',
      title: 'Fast & Lightweight',
      description: 'Built on React Ink for optimal performance'
    }
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, idx) => (
        <div 
          key={idx}
          className="p-6 bg-terminal-bg/50 border border-terminal-cyan/20 rounded-lg hover:border-terminal-cyan/50 transition-all hover:transform hover:scale-105"
        >
          <div className="text-4xl mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold text-terminal-cyan mb-2">
            {feature.title}
          </h3>
          <p className="text-terminal-text/70">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  )
}
