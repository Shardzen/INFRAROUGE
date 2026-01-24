import React from 'react';

const StyleShowcase = () => {
  const colorPalette = [
    { name: 'Deep', hex: '#1a0a1e', var: 'infrared-deep' },
    { name: 'Darker', hex: '#0a0a0f', var: 'infrared-darker' },
    { name: 'Purple', hex: '#4a1a5c', var: 'infrared-purple' },
    { name: 'Magenta', hex: '#8b2d6e', var: 'infrared-magenta' },
    { name: 'Hot', hex: '#d84a7f', var: 'infrared-hot' },
    { name: 'Orange', hex: '#ff6b4a', var: 'infrared-orange' },
    { name: 'Yellow', hex: '#ffb347', var: 'infrared-yellow' },
  ];

  const typography = [
    { name: 'Display', class: 'text-6xl font-bold', text: 'INFRAROUGE' },
    { name: 'Heading 1', class: 'text-5xl font-bold', text: 'Underground Culture' },
    { name: 'Heading 2', class: 'text-4xl font-bold', text: 'Experimental Sound' },
    { name: 'Heading 3', class: 'text-3xl font-bold', text: 'Dark Aesthetic' },
    { name: 'Body Large', class: 'text-xl', text: 'Contemporary electronic music experience' },
    { name: 'Body', class: 'text-base', text: 'Discover the underground scene' },
    { name: 'Body Small', class: 'text-sm', text: 'Where darkness meets elegance' },
    { name: 'Mono', class: 'text-sm font-mono tracking-widest', text: 'TECHNO • AMBIENT • EXPERIMENTAL' },
  ];

  const components = [
    {
      name: 'Button Primary',
      component: (
        <button className="px-8 py-4 bg-thermal-gradient rounded-lg text-white font-mono text-sm tracking-widest hover:shadow-glow-strong transition-all duration-300">
          PRIMARY ACTION
        </button>
      ),
    },
    {
      name: 'Button Secondary',
      component: (
        <button className="px-8 py-4 border border-infrared-purple rounded-lg text-gray-300 hover:border-infrared-orange font-mono text-sm tracking-widest transition-all duration-300">
          SECONDARY ACTION
        </button>
      ),
    },
    {
      name: 'Card',
      component: (
        <div className="group p-6 border border-infrared-purple/30 rounded-lg hover:border-infrared-hot/50 transition-all duration-300 relative overflow-hidden">
          <div className="absolute inset-0 bg-thermal-radial opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500" />
          <div className="relative z-10 space-y-2">
            <div className="font-mono text-xs text-infrared-orange">CATEGORY</div>
            <h3 className="text-xl font-bold text-gradient">Card Title</h3>
            <p className="text-gray-400 text-sm">Card description with hover effect</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-thermal-gradient transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        </div>
      ),
    },
    {
      name: 'Input',
      component: (
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-6 py-3 bg-infrared-deep/50 border border-infrared-purple/30 rounded-lg text-white placeholder-gray-500 focus:border-infrared-hot focus:outline-none transition-colors font-mono text-sm"
        />
      ),
    },
    {
      name: 'Badge',
      component: (
        <div className="flex gap-2">
          <span className="px-3 py-1 text-xs font-mono border border-infrared-purple/50 rounded bg-infrared-darker/50 text-gray-300">
            Techno
          </span>
          <span className="px-3 py-1 text-xs font-mono bg-infrared-hot/20 text-infrared-hot border border-infrared-hot/30 rounded">
            On Sale
          </span>
        </div>
      ),
    },
  ];

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center space-y-6">
          <div className="relative inline-block">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-gradient">
              GUIDE DE STYLE
            </h1>
            <div className="absolute -inset-8 bg-thermal-radial opacity-20 blur-3xl animate-pulse-glow" />
          </div>
          <div className="h-1 w-32 bg-thermal-gradient mx-auto rounded-full" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            L'identité visuelle INFRAROUGE : underground, élégante, expérimentale
          </p>
        </div>

        <section className="mb-20">
          <h2 className="text-4xl font-bold tracking-tighter text-gradient mb-8">Palette de couleurs</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {colorPalette.map((color) => (
              <div key={color.var} className="space-y-3">
                <div
                  className="aspect-square rounded-lg border border-infrared-purple/30 hover:border-infrared-hot/50 transition-all duration-300 cursor-pointer"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="text-center space-y-1">
                  <div className="text-sm font-bold text-white">{color.name}</div>
                  <div className="text-xs font-mono text-gray-500">{color.hex}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold tracking-tighter text-gradient mb-8">Typographie</h2>
          <div className="space-y-6">
            <div className="p-6 bg-infrared-deep/30 rounded-lg border border-infrared-purple/20">
              <div className="text-sm font-mono text-infrared-orange mb-2">FONTS</div>
              <div className="space-y-1 text-gray-300">
                <div>Primary: Space Grotesk (sans-serif)</div>
                <div>Monospace: JetBrains Mono</div>
              </div>
            </div>

            {typography.map((typo) => (
              <div
                key={typo.name}
                className="p-6 border border-infrared-purple/30 rounded-lg hover:border-infrared-hot/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="text-sm font-mono text-infrared-orange mb-3">{typo.name}</div>
                    <div className={`${typo.class} text-gradient`}>{typo.text}</div>
                  </div>
                  <div className="text-xs font-mono text-gray-500 md:text-right">
                    {typo.class}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold tracking-tighter text-gradient mb-8">Composants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {components.map((comp) => (
              <div
                key={comp.name}
                className="p-6 border border-infrared-purple/30 rounded-lg space-y-4"
              >
                <div className="text-sm font-mono text-infrared-orange">{comp.name}</div>
                <div className="flex items-center justify-center py-8">{comp.component}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold tracking-tighter text-gradient mb-8">Effets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border border-infrared-purple/30 rounded-lg space-y-4">
              <div className="text-sm font-mono text-infrared-orange">GLOW EFFECT</div>
              <div className="flex justify-center">
                <div className="text-5xl font-bold glow-text text-gradient">INFRAROUGE</div>
              </div>
            </div>

            <div className="p-8 border border-infrared-purple/30 rounded-lg space-y-4 relative overflow-hidden">
              <div className="text-sm font-mono text-infrared-orange">GRADIENT OVERLAY</div>
              <div className="relative h-32 bg-infrared-gradient rounded-lg flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-infrared-darker to-transparent" />
                <span className="relative z-10 text-white font-bold">Content</span>
              </div>
            </div>

            <div className="p-8 border border-infrared-purple/30 rounded-lg space-y-4">
              <div className="text-sm font-mono text-infrared-orange">RADIAL GLOW</div>
              <div className="relative h-32 bg-infrared-darker rounded-lg flex items-center justify-center">
                <div className="absolute inset-0 bg-thermal-radial opacity-30 blur-3xl" />
                <span className="relative z-10 text-white font-bold">Element</span>
              </div>
            </div>

            <div className="p-8 border border-infrared-purple/30 rounded-lg space-y-4">
              <div className="text-sm font-mono text-infrared-orange">BORDER GRADIENT</div>
              <div className="h-32 border-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">Card</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-bold tracking-tighter text-gradient mb-8">Animations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-infrared-purple/30 rounded-lg flex items-center justify-center">
              <div className="w-16 h-16 bg-infrared-hot rounded-full animate-float" />
            </div>
            <div className="p-8 border border-infrared-purple/30 rounded-lg flex items-center justify-center">
              <div className="w-16 h-16 bg-infrared-orange rounded-full animate-pulse-glow" />
            </div>
            <div className="p-8 border border-infrared-purple/30 rounded-lg flex items-center justify-center">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-infrared-orange rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-infrared-hot rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="w-2 h-2 bg-infrared-magenta rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StyleShowcase;
