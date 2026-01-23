// Base de données des artistes INFRAROUGE
// Pour ajouter un artiste : voir README.md section "Gestion du contenu"

export const artists = [
  // ============ MUSIQUE ============
  {
    id: 'thatcherblackwood',
    name: 'Thatcher Blackwood',
    slug: 'thatcherblackwood',
    category: 'Musique',
    genre: 'Electronic / Experimental',
    tags: ['Ambient', 'Experimental', 'Production'],
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=1600&q=80',
    bio: `Thatcher Blackwood sculpte des paysages sonores qui défient les conventions. Entre ambiance éthérée et expérimentation audacieuse, son univers musical transporte l'auditeur dans des dimensions inexploré es.

Chaque production est une exploration minutieuse des textures sonores, où les synthétiseurs analogiques rencontrent le traitement numérique pour créer des atmosphères uniques et envoûtantes.

Artiste émergent de la scène électronique underground, Thatcher construit méticuleusement un catalogue qui repousse les frontières de l'électronique expérimentale.`,
    soundcloud: {
      username: 'thatcherblackwood',
      profileUrl: 'https://soundcloud.com/thatcherblackwood',
      embedTrack: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/thatcherblackwood&color=%237c3aed&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false'
    },
    socialMedia: {
      soundcloud: 'https://soundcloud.com/thatcherblackwood',
      instagram: '',
      spotify: '',
      youtube: ''
    },
    stats: {
      followers: 'En croissance',
      plays: 'Underground'
    }
  },
  {
    id: 'sobi',
    name: 'Sobi',
    slug: 'sobi',
    category: 'Musique',
    genre: 'Hip-Hop / R&B',
    tags: ['Rap', 'Mélodique', 'Nouvelle Vague'],
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1600&q=80',
    bio: `Sobi incarne la nouvelle génération du rap francophone qui fusionne mélodie et authenticité. Son flow naturel et ses textes introspectifs créent une connexion immédiate avec son audience.

Entre beats lo-fi et production moderne, il navigue avec aisance dans différents registres, offrant une palette musicale riche et variée qui défie les cases traditionnelles du genre.

Artiste complet, Sobi écrit, compose et produit son propre univers sonore, affirmant ainsi une indépendance créative rare dans le paysage musical actuel.`,
    soundcloud: {
      username: 'sobi_a01',
      profileUrl: 'https://soundcloud.com/sobi_a01',
      embedTrack: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/sobi_a01&color=%237c3aed&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false'
    },
    socialMedia: {
      soundcloud: 'https://soundcloud.com/sobi_a01',
      instagram: '',
      spotify: '',
      youtube: ''
    },
    stats: {
      followers: 'En croissance',
      plays: 'Underground'
    }
  },
  {
    id: 'carbine',
    name: 'Carbine',
    slug: 'carbine',
    category: 'Musique',
    genre: 'Trap / Drill',
    tags: ['Drill', 'Énergie', 'Urbain'],
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1600&q=80',
    bio: `Carbine débarque avec une énergie brute et un flow percutant qui ne laisse pas indifférent. Représentant de la nouvelle vague drill, il impose son style avec des prod lourdes et des lyrics sans filtre.

Son approche directe et sans compromis résonne avec la jeunesse urbaine en quête d'authenticité. Chaque track est une déflagration d'énergie pure qui secoue les codes établis.

Artiste en pleine ascension, Carbine construit méthodiquement sa place dans le paysage drill français avec une constance et une détermination impressionnantes.`,
    soundcloud: {
      username: 'saycarbine',
      profileUrl: 'https://soundcloud.com/saycarbine',
      embedTrack: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/saycarbine&color=%237c3aed&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false'
    },
    socialMedia: {
      soundcloud: 'https://soundcloud.com/saycarbine',
      instagram: '',
      spotify: '',
      youtube: ''
    },
    stats: {
      followers: 'En croissance',
      plays: 'Underground'
    }
  },
  {
    id: 'wired',
    name: 'Wired',
    slug: 'wired',
    category: 'Musique',
    genre: 'Electronic / Bass',
    tags: ['Bass Music', 'Dark', 'Experimental'],
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=1600&q=80',
    bio: `Wired plonge dans les profondeurs de la bass music avec une approche sombre et cinématique. Ses productions sont des voyages sonores intenses qui explorent les limites du spectre des basses fréquences.

Entre dubstep, drum & bass et expérimentation, il crée des atmosphères oppressantes et captivantes qui transportent l'auditeur dans un univers dystopique fascinant.

Producteur technique et audacieux, Wired repousse constamment les frontières de la musique électronique underground avec des sonorités innovantes et percutantes.`,
    soundcloud: {
      username: 'wire_d_d',
      profileUrl: 'https://soundcloud.com/wire_d_d',
      embedTrack: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/wire_d_d&color=%237c3aed&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false'
    },
    socialMedia: {
      soundcloud: 'https://soundcloud.com/wire_d_d',
      instagram: '',
      spotify: '',
      youtube: ''
    },
    stats: {
      followers: 'En croissance',
      plays: 'Underground'
    }
  },

  // ============ ARTS PLASTIQUES ============
  {
    id: 'lazuliren',
    name: 'Lazuli Ren',
    slug: 'lazuliren',
    category: 'Arts Plastiques',
    genre: 'Art Contemporain',
    tags: ['Peinture', 'Mixed Media', 'Abstrait'],
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1600&q=80',
    bio: `Lazuli Ren explore les frontières entre abstraction et figuration avec une palette de couleurs vibrantes et des techniques mixtes innovantes. Son travail interroge la perception et l'émotion à travers des compositions dynamiques.

Chaque œuvre est une méditation visuelle qui invite le spectateur à plonger dans un univers onirique où les formes et les couleurs dialoguent en harmonie avec le chaos créatif.

Artiste plasticienne émergente, Lazuli développe un langage visuel unique qui fusionne influences orientales et esthétique contemporaine occidentale.`,
    instagram: {
      username: 'lazuliren',
      profileUrl: 'https://www.instagram.com/lazuliren'
    },
    galleryImages: [
      'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80',
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80',
      'https://images.unsplash.com/photo-1578926078627-e7a5c5f3f001?w=800&q=80',
      'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800&q=80',
      'https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&q=80',
      'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&q=80'
    ],
    socialMedia: {
      instagram: 'https://www.instagram.com/lazuliren',
      behance: '',
      website: ''
    },
    exhibitions: [
      {
        date: '2026-03-15',
        venue: 'Galerie Émergence',
        city: 'Paris',
        title: 'Chromatic Reverie'
      }
    ]
  },
  {
    id: 'syntheticpsychosis',
    name: 'Synthetic Psychosis',
    slug: 'syntheticpsychosis',
    category: 'Arts Plastiques',
    genre: 'Art Numérique / Glitch',
    tags: ['Digital Art', 'Glitch', 'Psychédélique', 'Cyberpunk'],
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=1600&q=80',
    bio: `Synthetic Psychosis navigue dans les territoires digitaux de la psyché moderne. Ses œuvres fragmentées et glitchées reflètent la désintégration et la reconstruction perpétuelle de l'identité à l'ère numérique.

À travers une esthétique cyberpunk saturée de néons et de distorsions visuelles, l'artiste crée des univers hallucinatoires qui interrogent notre rapport à la technologie et à la réalité virtuelle.

Chaque création est une plongée vertigineuse dans un futur dystopique où l'organique et le synthétique fusionnent dans une danse chaotique et fascinante.`,
    instagram: {
      username: 'sypsy',
      profileUrl: 'https://www.instagram.com/sypsy'
    },
    galleryImages: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&q=80',
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
      'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&q=80',
      'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&q=80',
      'https://images.unsplash.com/photo-1617791160588-241658c0f566?w=800&q=80'
    ],
    socialMedia: {
      instagram: 'https://www.instagram.com/sypsy',
      behance: '',
      website: ''
    },
    exhibitions: [
      {
        date: '2026-02-20',
        venue: 'Digital Art Space',
        city: 'Lyon',
        title: 'Digital Breakdown'
      }
    ]
  },
  {
    id: 'paulancuchy',
    name: 'Paulancuchy',
    slug: 'paulancuchy',
    category: 'Arts Plastiques',
    genre: 'Art Expérimental',
    tags: ['Avant-garde', 'Installation', 'Conceptuel'],
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1600&q=80',
    bio: `Paulancuchy repousse les limites de l'expression artistique avec des œuvres qui défient les conventions. Son travail expérimental fusionne médiums traditionnels et approches contemporaines dans une quête constante de nouvelles formes d'expression.

Chaque création est une expérience immersive qui invite le spectateur à remettre en question ses perceptions et à explorer de nouveaux territoires sensoriels et conceptuels.

Artiste polymorphe, Paulancuchy développe un langage visuel radical qui s'inscrit dans la lignée des grands avant-gardistes tout en affirmant une voix résolument contemporaine.`,
    instagram: {
      username: '01010000_01000110',
      profileUrl: 'https://www.instagram.com/01010000_01000110'
    },
    galleryImages: [
      'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800&q=80',
      'https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&q=80',
      'https://images.unsplash.com/photo-1578926078627-e7a5c5f3f001?w=800&q=80',
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80',
      'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&q=80',
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80'
    ],
    socialMedia: {
      instagram: 'https://www.instagram.com/01010000_01000110',
      behance: '',
      website: ''
    },
    exhibitions: [
      {
        date: '2026-04-10',
        venue: 'Espace Contemporain',
        city: 'Marseille',
        title: 'Binary Expressions'
      }
    ]
  },
  {
    id: 'jinxibadda',
    name: 'Jin.Xibadda',
    slug: 'jinxibadda',
    category: 'Arts Plastiques',
    genre: 'Street Art / Illustration',
    tags: ['Illustration', 'Urbain', 'Character Design', 'Pop Culture'],
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=1600&q=80',
    bio: `Jin.Xibadda mêle culture urbaine et univers illustratif dans des créations explosives de couleurs et de personnages. Son style unique fusionne influences manga, street art et design contemporain.

Chaque illustration raconte une histoire, peuplée de créatures fantastiques et de personnages charismatiques qui évoluent dans des environnements urbains réinventés avec imagination et audace.

Artiste complet, Jin.Xibadda développe un univers visuel cohérent qui transcende les frontières entre illustration digitale, art mural et culture pop contemporaine.`,
    instagram: {
      username: 'jin.x126',
      profileUrl: 'https://www.instagram.com/jin.x126'
    },
    galleryImages: [
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80',
      'https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=800&q=80',
      'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=800&q=80',
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&q=80'
    ],
    socialMedia: {
      instagram: 'https://www.instagram.com/jin.x126',
      behance: '',
      website: ''
    },
    exhibitions: [
      {
        date: '2026-05-15',
        venue: 'Urban Gallery',
        city: 'Bordeaux',
        title: 'Character Universe'
      }
    ]
  }
];

// Filtres par catégorie
export const musicArtists = artists.filter(a => a.category === 'Musique');
export const visualArtists = artists.filter(a => a.category === 'Arts Plastiques');
export const streetArtists = artists.filter(a => a.category === 'Street Art');
export const photoArtists = artists.filter(a => a.category === 'Photographie');

// Artistes featured
export const featuredArtists = artists.filter(a => a.featured);

// Fonction helper pour récupérer un artiste par slug
export const getArtistBySlug = (slug) => {
  return artists.find(artist => artist.slug === slug);
};

// Fonction helper pour récupérer les artistes par catégorie
export const getArtistsByCategory = (category) => {
  return artists.filter(artist => artist.category === category);
};