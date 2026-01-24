# 🔥 INFRAROUGE

Site web avec une esthétique underground contemporaine inspirée du thème infrarouge. Une plateforme dédiée aux artistes de la scène underground : musique, arts plastiques, photographie et vidéographie.

## 🎨 Identité visuelle

- **Palette thermique** : violet profonds, dégradés chauds, contrastes sombres
- **Ambiance** : nocturne, clandestine, élégante
- **Style** : underground, expérimental, premium et maîtrisé
- **Typographies** : Syne (display), Archivo Black (headings), IBM Plex Mono (mono), Space Grotesk (body)

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Preview du build
npm run preview
```

Le site sera accessible sur `http://localhost:3000`

## 📁 Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── Navbar.jsx      # Navigation avec menu mobile
│   ├── Footer.jsx      # Pied de page avec réseaux sociaux
│   ├── Loader.jsx      # Écran de chargement animé
│   ├── HeroSection.jsx # Section hero avec effets parallax
│   └── MosaicGrid.jsx  # Grille d'artistes/événements
├── pages/              # Pages du site
│   ├── Home.jsx        # Page d'accueil avec artistes par catégorie
│   ├── About.jsx       # À propos avec animations au scroll
│   ├── Artists.jsx     # Liste des artistes avec filtres par catégorie
│   ├── ArtistDetail.jsx# Page détail artiste (musique/arts/photo/vidéo)
│   ├── Events.jsx      # Événements à venir
│   ├── CategoryPage.jsx# Page de catégorie (placeholder)
│   └── StyleShowcase.jsx# Guide de style complet
├── data/               # Données
│   └── artists.js      # Base de données des artistes par catégorie
├── App.jsx             # Composant principal avec routing
├── main.jsx            # Point d'entrée React
└── index.css           # Styles globaux + custom CSS
```

## 🎭 Catégories d'artistes

### 🎵 Musique
- **thatcherblackwood** - Electronic, Experimental, Ambient
- **Sobi** - Electronic, Bass, Experimental
- **carbine** - Electronic, Techno, Industrial
- **wired** - Electronic, Breakbeat, Bass
- **SADSADSERGIEVPOSAD** - Experimental, Noise, Ambient

### 🎨 Arts Plastiques
- **Lazuli Ren** - Créations visuelles expérimentales
- **Sypsy** - Art contemporain
- **PF** - Explorations digitales
- **Jin.x126** - Art visuel contemporain
- **Xarumyaru** - Créations visuelles uniques

### 📷 Photographie
- **Arthur Bardet** - Photographie contemporaine
- **Gesicht** - Photographie expérimentale

### 🎬 Vidéographie
- **Paul Cruanes** - Direction artistique et réalisations
- **Voyageurs Sans Frontières** - Documentaires et city trips
- **Motiontripledouble** - Vidéographie sportive 4K
- **Lisa Touvet** - Vidéaste professionnelle
- **as.fefe** - Explorations sonores et visuelles
- **tomkun_r** - Créations vidéo artistiques
- **schatten.gfx** - Art vidéo distordu
- **harmonance** - Contenus audiovisuels expérimentaux
- **Timothée Falcon** - Télépilote drone
- **Adrian Kloeser** - Contenus vidéo artistiques
- **Jack Lawes** - Visual storytelling

## 🎨 Fonctionnalités

### Design & Effets
- ✨ **Grain texture** subtile pour l'atmosphère
- 🌈 **Gradients thermiques** inspirés des couleurs infrarouges
- 💫 **Animations fluides** (float, pulse-glow, glitch)
- 🎯 **Effets de glow** sur les éléments interactifs
- 📺 **Scanline effect** pour l'esthétique underground
- 🎨 **Typographies variées** selon les catégories d'artistes
- 🖼️ **Grid lines** subtiles en arrière-plan

### Navigation
- 📱 **Menu mobile** responsive avec animations
- 🔍 **Recherche d'artistes** par nom, genre ou style
- 🏷️ **Filtrage par catégorie** (Tous, Musique, Arts Plastiques, Photo, Vidéo)
- 🔗 **Navigation fluide** avec React Router
- ⬆️ **Scroll to top** automatique sur changement de page

### Pages Artistes
#### Musique
- 🎵 **Player SoundCloud** intégré
- 🔗 Liens vers **SoundCloud** et **Instagram**
- 📝 Biographie complète
- 🎸 Genres musicaux

#### Arts Plastiques & Photographie
- 📷 Liens vers **Instagram**
- 🖼️ Portfolio visuel
- 📝 Description des démarches artistiques

#### Vidéographie
- 🎬 **Lecteurs YouTube** intégrés
- 📱 Liens vers contenus **Instagram**
- 🎥 Showreels et démos
- 🔗 Liens vers **YouTube** et **Instagram**

### Responsive
- 📱 **Mobile first** design
- 💻 Adaptation tablette et desktop
- 🖥️ Breakpoints optimisés

## 🎨 Palette de couleurs

```css
--color-infrared-deep: #1a0a1e     /* Violet très sombre */
--color-infrared-darker: #0a0a0f   /* Noir profond */
--color-infrared-purple: #4a1a5c   /* Violet underground */
--color-infrared-magenta: #8b2d6e  /* Magenta électrique */
--color-infrared-hot: #d84a7f      /* Rose chaud */
--color-infrared-orange: #ff6b4a   /* Orange thermique */
--color-infrared-yellow: #ffb347   /* Jaune lumineux */
```

## 🔧 Technologies

- **React 18** - Framework UI
- **React Router 6** - Navigation
- **Tailwind CSS 3** - Styling utility-first
- **Vite** - Build tool & dev server
- **Google Fonts** - Typographies custom
- **PostCSS** - CSS processing
- **Autoprefixer** - Compatibilité CSS

## 📝 Ajouter un artiste

Pour ajouter un nouvel artiste, éditez `src/data/artists.js` :

```javascript
// Musique
artists.music.push({
  id: 'unique-id',
  name: 'Nom de l\'artiste',
  category: 'Musique',
  genres: ['Genre1', 'Genre2'],
  description: 'Description courte',
  bio: 'Biographie complète',
  socials: {
    soundcloud: 'https://soundcloud.com/...',
    instagram: 'https://instagram.com/...',
  },
  embedUrl: 'https://w.soundcloud.com/player/?url=...',
});

// Arts Plastiques / Photographie
artists.visualArts.push({
  id: 'unique-id',
  name: 'Nom de l\'artiste',
  category: 'Arts Plastiques',
  description: 'Description',
  bio: 'Biographie',
  socials: {
    instagram: 'https://instagram.com/...',
  },
  instagramHandle: 'username',
});

// Vidéographie
artists.videography.push({
  id: 'unique-id',
  name: 'Nom de l\'artiste',
  category: 'Vidéographie',
  description: 'Description',
  bio: 'Biographie',
  socials: {
    youtube: 'https://youtube.com/...',
    instagram: 'https://instagram.com/...',
  },
  videos: [
    {
      title: 'Titre vidéo',
      url: 'https://youtube.com/watch?v=...',
      embedId: 'VIDEO_ID',
    },
  ],
});
```

## 🎯 Pages disponibles

- `/` - Accueil avec artistes en vedette
- `/about` - À propos d'INFRAROUGE
- `/artists` - Liste complète des artistes
- `/artist/:category/:id` - Page détail d'un artiste
- `/events` - Événements (placeholder)
- `/style` - Guide de style complet

## 🚀 Déploiement

```bash
# Build de production
npm run build

# Le dossier dist/ contient les fichiers à déployer
# Compatible avec : Netlify, Vercel, GitHub Pages, etc.
```

## 📄 Licence

Tous droits réservés © 2026 INFRAROUGE

---

**INFRAROUGE** - Where underground meets elegance
