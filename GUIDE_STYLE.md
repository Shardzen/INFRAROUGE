# 🔥 GUIDE STYLISTIQUE INFRAROUGE

## 🎨 Palette de Couleurs

### Couleurs Principales
```jsx
// Jaune Infrarouge (Énergie, Attention)
text-infrared-yellow
bg-infrared-yellow
border-infrared-yellow

// Violet Infrarouge (Mystère, Underground)
text-infrared-purple
bg-infrared-purple
border-infrared-purple

// Rose Infrarouge (Créativité, Passion)
text-infrared-pink
bg-infrared-pink
border-infrared-pink

// Noir et Variations
bg-black
bg-dark-bg
bg-dark-card
border-dark-border
```

### Gradients Signature
```jsx
// Gradient Infrarouge Principal
bg-gradient-infrared
// Jaune → Rose → Violet

// Gradients Mono-Couleur
bg-gradient-yellow
bg-gradient-purple
bg-gradient-pink

// Gradient Texte
<h1 className="gradient-text">TITRE</h1>
<h1 className="gradient-text-yellow">TITRE</h1>
```

---

## 🔤 Typographies Underground

### Polices Disponibles

```jsx
// 1. DISPLAY ULTRA - Titres Massifs
font-display-ultra
// Polices: Bebas Neue, Anton
// Usage: Titres principaux H1, Headers qui claquent
<h1 className="font-display-ultra text-6xl">INFRAROUGE</h1>

// 2. DISPLAY TECH - Look Futuriste
font-display-tech
// Polices: Orbitron, Audiowide, Teko
// Usage: Titres tech, sous-titres cyberpunk
<h2 className="font-display-tech text-4xl">CYBERPUNK VIBES</h2>

// 3. DISPLAY BOLD - Impact Maximum
font-display-bold
// Polices: Black Ops One, Bungee, Russo One
// Usage: Titres puissants, noms d'artistes
<h2 className="font-display-bold text-3xl">MC SUPREME</h2>

// 4. DISPLAY MODERN - Artistique
font-display-modern
// Polices: Righteous, Staatliches, Oswald
// Usage: Contenus créatifs, titres d'événements
<h3 className="font-display-modern text-2xl">Festival Underground</h3>

// 5. MONO - Code/Technique
font-mono
// Polices: JetBrains Mono
// Usage: Code, détails techniques, dates
<span className="font-mono">2025.01.23</span>

// 6. BODY - Texte Courant
font-body
// Polices: Oswald
// Usage: Paragraphes, descriptions
<p className="font-body">Contenu éditorial lisible...</p>
```

---

## 🎯 Boutons

```jsx
// Bouton Principal (Jaune/Rose/Violet)
<button className="btn-primary">
  Découvrir les artistes
</button>

// Bouton Secondaire (Bordure Jaune)
<button className="btn-secondary">
  Explorer
</button>

// Bouton Ghost (Transparent avec soulignement)
<button className="btn-ghost">
  En savoir plus
</button>
```

---

## 🃏 Cards & Conteneurs

```jsx
// Card Premium avec bordure et hover
<div className="card-premium">
  <h3>Contenu</h3>
  <p>Description...</p>
</div>

// Card Glass (Effet verre/blur)
<div className="card-glass">
  <h3>Contenu Premium</h3>
</div>

// Card avec effet d'image
<div className="image-hover-infrared">
  <img src="..." alt="..." />
</div>
```

---

## ✨ Effets Visuels

### Glow Effects
```jsx
// Glow général infrarouge
<div className="glow-effect">...</div>

// Glow par couleur
<h1 className="glow-yellow">Titre jaune</h1>
<h2 className="glow-purple">Titre violet</h2>
<h3 className="glow-pink">Titre rose</h3>

// Shadow effects
shadow-infrared-glow
shadow-infrared-glow-lg
shadow-infrared-premium
shadow-yellow-glow
shadow-purple-glow
shadow-pink-glow
```

### Animations
```jsx
// Glow pulsant
animate-infrared-glow

// Pulse doux
animate-infrared-pulse

// Float (mouvement vertical)
animate-float
animate-float-chaotic

// Slide
animate-slide-up
animate-slide-down

// Fade
animate-fade-in
animate-fade-in-fast

// Glitch effect
animate-glitch

// Shimmer (effet de lumière)
animate-shimmer

// Delays pour séquences
animate-delay-100
animate-delay-200
...
animate-delay-800
```

### Effets Spéciaux
```jsx
// Scanlines (effet CRT)
<div className="scanlines">...</div>

// Noise overlay
<div className="noise-overlay">...</div>

// Backdrop blur + dark
<div className="backdrop-infrared">...</div>

// Text glitch au hover
<h1 className="text-glitch" data-text="GLITCH">GLITCH</h1>

// Text shadow infrarouge
<h1 className="text-shadow-infrared">Titre</h1>
```

---

## 📋 Formulaires

```jsx
// Input Premium
<input 
  type="text" 
  placeholder="Votre texte"
  className="input-premium"
/>

// Textarea
<textarea 
  className="input-premium resize-none"
  rows="5"
></textarea>
```

---

## 🎨 Composants Utiles

### Badges
```jsx
// Badge plein
<span className="badge-infrared">RAP</span>

// Badge contour
<span className="badge-outline">ELECTRO</span>
```

### Dividers
```jsx
<div className="divider-infrared"></div>
```

### Scrollbar Custom
```jsx
<div className="custom-scrollbar overflow-y-auto">
  Contenu scrollable...
</div>
```

---

## 🎬 Exemples de Compositions

### Hero Section Underground
```jsx
<section className="relative overflow-hidden py-32 scanlines">
  <div className="absolute inset-0 bg-gradient-to-br from-infrared-yellow/10 via-infrared-pink/10 to-infrared-purple/10"></div>
  
  <div className="relative section-container">
    <h1 className="font-display-ultra text-8xl gradient-text glow-yellow animate-slide-down">
      INFRAROUGE
    </h1>
    
    <p className="font-display-tech text-2xl text-gray-300 animate-fade-in animate-delay-200">
      MAGAZINE UNDERGROUND PREMIUM
    </p>
    
    <div className="divider-infrared max-w-md mx-auto"></div>
    
    <button className="btn-primary mt-8">
      Découvrir
    </button>
  </div>
</section>
```

### Card Artiste Premium
```jsx
<div className="card-premium group">
  <div className="image-hover-infrared aspect-square overflow-hidden rounded-lg mb-6">
    <img src="..." alt="Artiste" className="w-full h-full object-cover" />
  </div>
  
  <div className="space-y-3">
    <span className="badge-infrared">RAP</span>
    
    <h3 className="font-display-bold text-2xl text-infrared-yellow group-hover:glow-yellow transition-all">
      MC SUPREME
    </h3>
    
    <p className="font-body text-gray-400">
      Description de l'artiste underground...
    </p>
    
    <button className="btn-ghost">
      En savoir plus
    </button>
  </div>
</div>
```

### Section avec Glass Effect
```jsx
<section className="section-container">
  <h2 className="font-display-tech gradient-text-yellow text-center mb-16">
    ÉVÉNEMENTS À VENIR
  </h2>
  
  <div className="grid md:grid-cols-2 gap-8">
    <div className="card-glass p-8 space-y-4">
      <div className="flex items-center justify-between">
        <span className="font-mono text-infrared-yellow">25.01.2025</span>
        <span className="badge-outline">LIVE</span>
      </div>
      
      <h3 className="font-display-modern text-3xl gradient-text">
        Underground Night
      </h3>
      
      <p className="font-body text-gray-400">
        Une soirée exceptionnelle avec les meilleurs artistes de la scène...
      </p>
      
      <button className="btn-secondary w-full">
        Réserver
      </button>
    </div>
  </div>
</section>
```

---

## 🚀 Tips & Best Practices

### 1. Hiérarchie Typographique
```
H1: font-display-ultra (Bebas Neue) - 6xl à 8xl
H2: font-display-tech (Orbitron) - 4xl à 6xl
H3: font-display-bold (Black Ops) - 2xl à 4xl
H4-H6: font-display-modern (Righteous) - xl à 2xl
Body: font-body (Oswald) - base à lg
```

### 2. Combinaisons de Couleurs
```jsx
// Combo 1: Jaune dominant
text-infrared-yellow + border-infrared-yellow + shadow-yellow-glow

// Combo 2: Mix infrarouge
gradient-text + glow-effect + shadow-infrared-premium

// Combo 3: Contraste maximum
bg-black + text-infrared-yellow + border-infrared-purple
```

### 3. Animations Séquencées
```jsx
<div className="animate-slide-up">...</div>
<div className="animate-fade-in animate-delay-200">...</div>
<div className="animate-slide-down animate-delay-400">...</div>
```

### 4. Effets au Hover
```jsx
// Bouton avec transition
hover:shadow-infrared-glow hover:scale-105 transition-all duration-300

// Card avec bordure
hover:border-infrared-yellow hover:shadow-infrared-premium

// Texte avec glow
group-hover:glow-yellow transition-all
```

---

## 📱 Responsive Design

Toutes les classes sont responsive. Utilisez les préfixes Tailwind :
```jsx
<h1 className="text-4xl md:text-6xl lg:text-8xl">
  Responsive
</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  ...
</div>
```

---

## 🎯 Pour Aller Plus Loin

### Voir la page de démo
Visitez `/style` pour voir tous les composants en action !

### Personnalisation
Les couleurs, polices et animations sont définies dans :
- `tailwind.config.js` - Configuration Tailwind
- `src/index.css` - Styles custom et animations

---

**INFRAROUGE - UNDERGROUND PREMIUM MAGAZINE**
