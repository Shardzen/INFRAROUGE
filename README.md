# 🔥 INFRAROUGE - Magazine Underground

Magazine digital dédié à la scène artistique underground et alternative.

## 🎨 Design System

- **Palette de couleurs :**
  - `infra-black`: #050505 (Fond principal)
  - `infra-yellow`: #D9F99D (Accent néon)
  - `infra-violet`: #8B5CF6 (Glow électrique)
  - `infra-white`: #F5F5F5 (Texte)

- **Typographie :**
  - Titres : Police Heavy/Bold (Impact, Arial Black)
  - Corps : Inter (système)

## 🚀 Installation & Lancement

### Installation des dépendances
```bash
npm install
```

### Développement local
```bash
npm run dev
```
Le site sera accessible sur `http://localhost:5173`

### Build de production
```bash
npm run build
```

## 🌐 Déploiement sur Netlify

### Option 1 : Via l'interface Netlify (Recommandé)

1. **Connectez-vous à Netlify** : https://app.netlify.com
2. **Cliquez sur "Add new site" > "Import an existing project"**
3. **Connectez votre repo Git** ou faites un "drag & drop" du dossier
4. **Configuration automatique** : Netlify détectera le `netlify.toml`
5. **Déployez !**

### Option 2 : Via Netlify CLI

```bash
# Installation de Netlify CLI (si pas déjà fait)
npm install -g netlify-cli

# Login
netlify login

# Déploiement
netlify deploy --prod
```

### Option 3 : Drag & Drop manuel

1. Lancez `npm run build`
2. Allez sur https://app.netlify.com/drop
3. Glissez-déposez le dossier `dist/`

## 📁 Structure du projet

```
INFRAROUGE/
├── src/
│   ├── components/
│   │   ├── Loader.jsx          # Écran d'intro avec effet glitch
│   │   ├── Navbar.jsx          # Navigation minimaliste
│   │   ├── HeroSection.jsx     # Section héro avec CTA
│   │   ├── MosaicGrid.jsx      # Grille Masonry des artistes
│   │   └── AudioPlayer.jsx     # Lecteur audio sticky
│   ├── App.jsx                 # Assemblage principal
│   ├── index.css               # Styles globaux + Tailwind
│   └── main.jsx                # Point d'entrée
├── tailwind.config.js          # Configuration Tailwind
├── netlify.toml                # Configuration Netlify
└── package.json

```

## ✨ Fonctionnalités

- ✅ **Loader animé** avec effet de glitch au démarrage
- ✅ **Navigation responsive** avec menu burger mobile
- ✅ **Hero section** immersive avec typographie massive
- ✅ **Grille Masonry** type Pinterest avec hover effects
- ✅ **Lecteur audio** sticky avec visualiseur d'ondes
- ✅ **Animations fluides** via Framer Motion
- ✅ **Design underground** avec palette thermique

## 🎯 Optimisations

- Lazy loading des images
- Animations GPU-accelerated
- Responsive design (mobile-first)
- Accessibilité (ARIA labels)
- SEO-friendly

## 🔧 Technologies

- **React** 18.3.1
- **Vite** 5.2.0 (Build tool ultra-rapide)
- **Tailwind CSS** 3.4.0
- **Framer Motion** 11.0.0 (Animations)
- **Lucide React** 0.263.1 (Icônes)

## 📝 Notes de développement

### Prochaines étapes possibles :
1. Ajouter un système de filtrage dans la galerie
2. Intégrer une vraie API de streaming audio
3. Créer des pages individuelles pour chaque artiste
4. Ajouter un système de newsletter
5. Implémenter un mode sombre/clair

### Performance :
- Lighthouse Score cible : 95+
- Temps de chargement : < 2s
- First Contentful Paint : < 1s

## 📄 Licence

© 2025 INFRAROUGE - Tous droits réservés

---

Made with 🔥 by a Senior Creative Front-End Developer
