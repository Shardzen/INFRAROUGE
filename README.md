  `content`: `# 📚 GUIDE COMPLET - MISE À JOUR INFRAROUGE

## 🎯 Table des Matières

1. [Où se trouvent les fichiers](#-où-se-trouvent-les-fichiers)
2. [Ajouter un nouvel artiste](#-ajouter-un-nouvel-artiste)
3. [Modifier les photos](#-modifier-les-photos)
4. [Obtenir les URLs d'images](#-obtenir-les-urls-dimages)
5. [Intégrer SoundCloud](#-intégrer-soundcloud)
6. [Modifier un artiste existant](#-modifier-un-artiste-existant)
7. [Supprimer un artiste](#-supprimer-un-artiste)
8. [Tester vos modifications](#-tester-vos-modifications)
9. [Erreurs courantes](#-erreurs-courantes)

---

## 📍 OÙ SE TROUVENT LES FICHIERS

**TOUT se passe dans UN SEUL fichier :**

```
C:\\Users\\arthu\\Desktop\\INFRAROUGE\\src\\data\\artists.js
```

C'est le fichier que vous allez modifier à **99% du temps** !

### Comment y accéder ?
1. Ouvrez **Visual Studio Code** (ou votre éditeur de code)
2. Ouvrez le dossier `INFRAROUGE`
3. Naviguez : `src` → `data` → `artists.js`

---

## ➕ AJOUTER UN NOUVEL ARTISTE

### 🎵 MUSICIEN (avec SoundCloud)

**ÉTAPE 1 :** Ouvrez `src/data/artists.js`

**ÉTAPE 2 :** Trouvez la section `// ============ MUSIQUE ============`

**ÉTAPE 3 :** Copiez ce code APRÈS le dernier musicien (après la virgule) :

```javascript
{
  // INFORMATIONS DE BASE
  id: 'djexemple',                    // ⚠️ UNIQUE, minuscules, pas d'espaces
  name: 'DJ Exemple',                 // Nom affiché
  slug: 'djexemple',                  // ⚠️ Identique à l'ID
  category: 'Musique',                // NE PAS MODIFIER
  genre: 'Electronic / House',        // Genre musical
  tags: ['House', 'Techno', 'Deep'],  // 3-5 mots-clés
  featured: true,                     // true = page d'accueil, false = non
  
  // PHOTOS
  coverImage: 'https://i.imgur.com/VOTRE_IMAGE.jpg',  // Photo carrée
  heroImage: 'https://i.imgur.com/VOTRE_IMAGE2.jpg',  // Photo large
  
  // BIOGRAPHIE (3 paragraphes séparés par ligne vide)
  bio: `DJ Exemple révolutionne la scène électronique avec son style unique.

Producteur autodidacte, il a développé un son reconnaissable entre mille qui fusionne house classique et influences modernes.

Ses sets énergiques transportent le public dans une expérience sonore inoubliable.`,

  // SOUNDCLOUD
  soundcloud: {
    username: 'djexemple',
    profileUrl: 'https://soundcloud.com/djexemple',
    embedTrack: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/djexemple&color=%237c3aed&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false'
  },
  
  // RÉSEAUX SOCIAUX
  socialMedia: {
    soundcloud: 'https://soundcloud.com/djexemple',
    instagram: 'https://instagram.com/djexemple',
    spotify: 'https://open.spotify.com/artist/...',  // Optionnel
    youtube: ''  // Laissez vide si pas de chaîne
  },
  
  // STATISTIQUES
  stats: {
    followers: '10K+',     // Texte libre
    plays: '500K+'         // Texte libre
  }
},
```

**⚠️ IMPORTANT :** N'oubliez PAS la **virgule** à la fin `},`

---

### 🎨 ARTISTE PLASTICIEN (avec Galerie Photo)

**ÉTAPE 1 :** Ouvrez `src/data/artists.js`

**ÉTAPE 2 :** Trouvez la section `// ============ ARTS PLASTIQUES ============`

**ÉTAPE 3 :** Copiez ce code APRÈS le dernier artiste :

```javascript
{
  // INFORMATIONS DE BASE
  id: 'artiste-exemple',
  name: 'Artiste Exemple',
  slug: 'artiste-exemple',
  category: 'Arts Plastiques',        // NE PAS MODIFIER
  genre: 'Art Contemporain',          // Style artistique
  tags: ['Peinture', 'Acrylique', 'Abstrait'],
  featured: true,
  
  // PHOTOS
  coverImage: 'https://i.imgur.com/PHOTO1.jpg',
  heroImage: 'https://i.imgur.com/PHOTO2.jpg',
  
  // BIOGRAPHIE
  bio: `Artiste Exemple explore les frontières de l'abstraction avec une palette vibrante.

Chaque œuvre est une méditation visuelle qui invite le spectateur à plonger dans un univers onirique.

Son travail a été exposé dans plusieurs galeries européennes.`,

  // INSTAGRAM
  instagram: {
    username: 'artiste_exemple',
    profileUrl: 'https://www.instagram.com/artiste_exemple'
  },
  
  // GALERIE (6 images recommandées)
  galleryImages: [
    'https://i.imgur.com/OEUVRE1.jpg',
    'https://i.imgur.com/OEUVRE2.jpg',
    'https://i.imgur.com/OEUVRE3.jpg',
    'https://i.imgur.com/OEUVRE4.jpg',
    'https://i.imgur.com/OEUVRE5.jpg',
    'https://i.imgur.com/OEUVRE6.jpg'
  ],
  
  // RÉSEAUX SOCIAUX
  socialMedia: {
    instagram: 'https://www.instagram.com/artiste_exemple',
    behance: 'https://www.behance.net/artiste',  // Optionnel
    website: 'https://www.artiste-exemple.com'   // Optionnel
  },
  
  // EXPOSITIONS À VENIR (optionnel)
  exhibitions: [
    {
      date: '2026-06-15',              // Format: AAAA-MM-JJ
      venue: 'Galerie Moderne',        // Nom du lieu
      city: 'Paris',                   // Ville
      title: 'Exposition Solo 2026'    // Titre
    },
    {
      date: '2026-09-01',
      venue: 'Art Space Lyon',
      city: 'Lyon',
      title: 'Collective Show'
    }
  ]
},
```

---

## 📸 MODIFIER LES PHOTOS

### Remplacer la photo d'un artiste existant

1. **Trouvez l'artiste** dans `artists.js` (Ctrl+F pour chercher)

2. **Modifiez les URLs** :

```javascript
// AVANT
coverImage: 'https://images.unsplash.com/old-photo.jpg',
heroImage: 'https://images.unsplash.com/old-hero.jpg',

// APRÈS
coverImage: 'https://i.imgur.com/NOUVELLE-PHOTO.jpg',
heroImage: 'https://i.imgur.com/NOUVEAU-HERO.jpg',
```

3. **Sauvegardez** le fichier

---

## 🌐 OBTENIR LES URLs D'IMAGES

### Méthode 1 : IMGUR (Recommandé ✅)

**C'est la méthode la plus simple et gratuite !**

1. **Allez sur** https://imgur.com/
2. **Cliquez** sur \"New post\" (en haut)
3. **Uploadez** votre image (glissez-déposez)
4. Une fois uploadée, **clic droit** sur l'image
5. **Sélectionnez** \"Copier l'adresse de l'image\"
6. **Collez** dans votre code

**Exemple d'URL Imgur :**
```
https://i.imgur.com/abc123XYZ.jpg
```

### Méthode 2 : ImgBB

1. **Allez sur** https://imgbb.com/
2. **Uploadez** votre image
3. **Copiez** le \"Direct link\"

### Méthode 3 : Depuis Instagram (pour récupérer une image)

1. **Ouvrez la photo** sur Instagram (navigateur web)
2. **Clic droit** → \"Inspecter\"
3. **Cherchez** `<img src=\"https://...\"`
4. **Copiez l'URL** entre les guillemets

---

## 🖼️ TAILLES D'IMAGES RECOMMANDÉES

Pour un rendu optimal :

| Type d'image | Taille recommandée | Utilisation |
|--------------|-------------------|-------------|
| **coverImage** | 1200x1200px (carré) | Miniature/carte artiste |
| **heroImage** | 1600x900px (paysage) | Grande image en-tête |
| **galleryImages** | 800x800px minimum | Galerie d'œuvres |

**Format :** JPG (pour photos) ou PNG (si transparence)

**Qualité :** 80-90% (bon compromis)

---

## 🎧 INTÉGRER SOUNDCLOUD

### Comment obtenir l'URL d'embed SoundCloud ?

**ÉTAPE 1 :** Allez sur **votre profil SoundCloud**

**ÉTAPE 2 :** Cliquez sur le bouton **\"Share\"** (Partager)

**ÉTAPE 3 :** Cliquez sur **\"Embed\"**

**ÉTAPE 4 :** Vous verrez un code. **Copiez l'URL** qui ressemble à :
```
https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/VOTRE-USERNAME
```

**ÉTAPE 5 :** Ajoutez les paramètres de personnalisation :
```javascript
embedTrack: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/VOTRE-USERNAME&color=%237c3aed&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false'
```

**Paramètres expliqués :**
- `color=%237c3aed` → Couleur violet d'INFRAROUGE
- `auto_play=false` → Ne démarre pas automatiquement
- `show_user=true` → Affiche le nom de l'artiste

---

## ✏️ MODIFIER UN ARTISTE EXISTANT

### Changer n'importe quelle information

1. **Ouvrez** `src/data/artists.js`

2. **Trouvez l'artiste** avec `Ctrl+F` (ou `Cmd+F` sur Mac)

3. **Modifiez** ce que vous voulez

**Exemples :**

**Changer le nom :**
```javascript
// AVANT
name: 'Thatcher Blackwood',

// APRÈS
name: 'Thatcher B.',
```

**Changer le genre :**
```javascript
// AVANT
genre: 'Electronic / Experimental',

// APRÈS
genre: 'Ambient / Downtempo',
```

**Ajouter un tag :**
```javascript
// AVANT
tags: ['Ambient', 'Experimental'],

// APRÈS
tags: ['Ambient', 'Experimental', 'Minimal'],
```

**Modifier la bio :**
```javascript
bio: `Nouvelle biographie premier paragraphe...

Deuxième paragraphe avec plus d'infos...

Troisième paragraphe conclusion...`,
```

4. **Sauvegardez** le fichier

---

## 🗑️ SUPPRIMER UN ARTISTE

**ATTENTION :** Soyez sûr de vouloir supprimer !

1. **Trouvez l'artiste** dans `artists.js`

2. **Sélectionnez TOUT** depuis `{` jusqu'à `},` (inclus)

3. **Supprimez** la sélection

**Exemple :**

**AVANT :**
```javascript
{
  id: 'artiste1',
  name: 'Artiste 1',
  // ... tout le reste
},
{
  id: 'artiste2',  // ← Celui qu'on veut garder
  name: 'Artiste 2',
  // ...
},
```

**APRÈS :**
```javascript
{
  id: 'artiste2',
  name: 'Artiste 2',
  // ...
},
```

---

## 🔄 METTRE UN ARTISTE EN FEATURED (Page d'accueil)

**Pour afficher sur la page d'accueil :**
```javascript
featured: true,
```

**Pour NE PAS afficher sur la page d'accueil :**
```javascript
featured: false,
```

C'est aussi simple que ça !

---

## 🎨 CATÉGORIES DISPONIBLES

Les catégories sont **fixes**. Utilisez EXACTEMENT ces noms :

```javascript
category: 'Musique',           // Pour musiciens
category: 'Arts Plastiques',   // Pour peintres, sculpteurs, etc.
category: 'Street Art',        // Pour graffiti, murales
category: 'Photographie',      // Pour photographes
```

**⚠️ ATTENTION :** Respectez les **majuscules** et l'**orthographe** exacte !

---

## 🚀 TESTER VOS MODIFICATIONS

### Méthode 1 : Terminal

1. **Ouvrez un terminal** dans le dossier du projet

2. **Tapez** :
```bash
cd C:\\Users\\arthu\\Desktop\\INFRAROUGE
npm run dev
```

3. **Ouvrez** votre navigateur : `http://localhost:5173`

4. **Vérifiez** que tout s'affiche correctement

### Méthode 2 : Visual Studio Code

1. **Ouvrez le terminal intégré** (Ctrl+`)
2. **Tapez** `npm run dev`
3. **Cliquez** sur le lien qui apparaît

---

## ⚠️ ERREURS COURANTES

### ❌ Erreur 1 : Virgule manquante

**SYMPTÔME :** Le site ne charge pas, erreur dans la console

**PROBLÈME :**
```javascript
{
  name: 'Artiste 1',
  // ...
}  // ❌ Manque la virgule !
{
  name: 'Artiste 2',
```

**SOLUTION :**
```javascript
{
  name: 'Artiste 1',
  // ...
},  // ✅ Virgule ajoutée
{
  name: 'Artiste 2',
```

---

### ❌ Erreur 2 : ID en double

**SYMPTÔME :** Un artiste ne s'affiche pas

**PROBLÈME :**
```javascript
{ id: 'carbine', name: 'Carbine', ... },
{ id: 'carbine', name: 'Nouveau Carbine', ... },  // ❌ ID déjà utilisé
```

**SOLUTION :** Chaque artiste doit avoir un ID **unique**
```javascript
{ id: 'carbine', name: 'Carbine', ... },
{ id: 'carbine2', name: 'Nouveau Carbine', ... },  // ✅ ID différent
```

---

### ❌ Erreur 3 : Mauvaise catégorie

**SYMPTÔME :** L'artiste ne s'affiche pas dans sa catégorie

**PROBLÈME :**
```javascript
category: 'musique',  // ❌ Minuscule
category: 'Music',    // ❌ En anglais
category: 'Musiques', // ❌ Au pluriel
```

**SOLUTION :**
```javascript
category: 'Musique',  // ✅ Exactement comme ça
```

---

### ❌ Erreur 4 : URL d'image incorrecte

**SYMPTÔME :** Image ne s'affiche pas (carré gris)

**PROBLÈME :**
```javascript
coverImage: 'mon-image.jpg',              // ❌ Pas d'URL complète
coverImage: 'C:\\Desktop\\image.jpg',       // ❌ Chemin local
coverImage: 'www.monsite.com/image.jpg',  // ❌ Manque https://
```

**SOLUTION :**
```javascript
coverImage: 'https://i.imgur.com/abc123.jpg',  // ✅ URL complète
```

---

### ❌ Erreur 5 : Bio mal formatée

**PROBLÈME :**
```javascript
bio: 'Texte tout sur une ligne sans paragraphes',  // ❌
```

**SOLUTION :**
```javascript
bio: `Premier paragraphe avec les backticks ` `.

Deuxième paragraphe séparé par ligne vide.

Troisième paragraphe.`,  // ✅
```

Utilisez les **backticks** `` ` `` (AltGr + 7) et **sautez des lignes** entre paragraphes.

---

## 🎯 EXEMPLE COMPLET D'AJOUT

Imaginons que vous voulez ajouter **\"Luna Art\"**, une artiste plasticienne.

**ÉTAPE 1 :** Préparez vos éléments
- 📸 Photos uploadées sur Imgur
- ✍️ Bio écrite (3 paragraphes)
- 🌐 Liens Instagram, etc.

**ÉTAPE 2 :** Ouvrez `artists.js` et ajoutez :

```javascript
{
  id: 'lunaart',
  name: 'Luna Art',
  slug: 'lunaart',
  category: 'Arts Plastiques',
  genre: 'Art Digital / Illustration',
  tags: ['Digital Art', 'Illustration', 'Colorful'],
  featured: true,
  
  coverImage: 'https://i.imgur.com/xYz789.jpg',
  heroImage: 'https://i.imgur.com/aBc456.jpg',
  
  bio: `Luna Art crée des univers colorés et oniriques à travers l'art digital.

Chaque illustration raconte une histoire, peuplée de créatures fantastiques et de paysages imaginaires.

Son style unique mêle influences manga et esthétique contemporaine.`,

  instagram: {
    username: 'luna_art_official',
    profileUrl: 'https://www.instagram.com/luna_art_official'
  },
  
  galleryImages: [
    'https://i.imgur.com/work1.jpg',
    'https://i.imgur.com/work2.jpg',
    'https://i.imgur.com/work3.jpg',
    'https://i.imgur.com/work4.jpg',
    'https://i.imgur.com/work5.jpg',
    'https://i.imgur.com/work6.jpg'
  ],
  
  socialMedia: {
    instagram: 'https://www.instagram.com/luna_art_official',
    behance: 'https://www.behance.net/lunaart',
    website: 'https://www.luna-art.com'
  },
  
  exhibitions: [
    {
      date: '2026-07-01',
      venue: 'Digital Art Gallery',
      city: 'Paris',
      title: 'Dreamscapes'
    }
  ]
},
```

**ÉTAPE 3 :** Sauvegardez

**ÉTAPE 4 :** Testez avec `npm run dev`

**C'est fait ! 🎉**

---

## 📊 STRUCTURE COMPLÈTE (Référence)

Voici **TOUS** les champs possibles :

```javascript
{
  // === OBLIGATOIRE ===
  id: 'string',                    // Identifiant unique
  name: 'string',                  // Nom affiché
  slug: 'string',                  // URL (identique à id)
  category: 'string',              // Catégorie exacte
  genre: 'string',                 // Genre/style
  tags: ['str1', 'str2'],          // Mots-clés
  featured: true/false,            // Page d'accueil
  coverImage: 'url',               // Photo miniature
  heroImage: 'url',                // Photo grande
  bio: `multi-line string`,        // Biographie
  
  // === MUSICIENS ===
  soundcloud: {
    username: 'string',
    profileUrl: 'url',
    embedTrack: 'url'
  },
  stats: {
    followers: 'string',
    plays: 'string'
  },
  
  // === ARTISTES VISUELS ===
  instagram: {
    username: 'string',
    profileUrl: 'url'
  },
  galleryImages: ['url1', 'url2'],
  exhibitions: [{
    date: 'YYYY-MM-DD',
    venue: 'string',
    city: 'string',
    title: 'string'
  }],
  
  // === RÉSEAUX SOCIAUX (Tous) ===
  socialMedia: {
    soundcloud: 'url',
    instagram: 'url',
    spotify: 'url',
    youtube: 'url',
    behance: 'url',
    website: 'url'
  }
}
```

---

## ✅ CHECKLIST AVANT PUBLICATION

Avant de publier vos modifications :

- [ ] **Images** : Toutes les URLs fonctionnent
- [ ] **Qualité** : Images en haute résolution
- [ ] **Bio** : 3 paragraphes minimum, bien rédigés
- [ ] **Liens** : Tous les liens sociaux testés
- [ ] **SoundCloud** : Player s'affiche correctement
- [ ] **Virgules** : Toutes bien placées
- [ ] **Test** : Site testé avec `npm run dev`
- [ ] **Responsive** : Vérifié sur mobile (F12 → mode mobile)
- [ ] **Orthographe** : Bio relue, pas de fautes

---

## 🆘 BESOIN D'AIDE ?

### Le site ne démarre pas ?

```bash
# Solution 1 : Réinstaller les dépendances
npm install

# Solution 2 : Nettoyer le cache
npm run build
```

### Une image ne s'affiche pas ?

1. **Testez l'URL** dans votre navigateur
2. **Vérifiez** que l'URL commence par `https://`
3. **Uploadez** à nouveau sur Imgur
4. **Utilisez** le lien \"Direct\" d'Imgur

### Erreur dans la console ?

1. **Appuyez sur F12** dans le navigateur
2. **Regardez l'onglet \"Console\"**
3. **Lisez le message d'erreur** (souvent une virgule manquante)
4. **Corrigez** le problème indiqué

### Le site marche mais un artiste ne s'affiche pas ?

1. **Vérifiez l'ID** est unique
2. **Vérifiez la catégorie** (majuscule, orthographe)
3. **Vérifiez les virgules** avant et après
4. **Rechargez** la page (Ctrl+F5)

---

## 🎓 RÉCAPITULATIF ULTRA-RAPIDE

**Pour ajouter un artiste en 5 minutes :**

1. ✅ Uploadez vos images sur **Imgur**
2. ✅ Ouvrez `src/data/artists.js`
3. ✅ Copiez le **template** (musicien ou artiste visuel)
4. ✅ Remplissez les **informations**
5. ✅ **Sauvegardez** et testez avec `npm run dev`

**C'est tout ! 🚀**

---

## 📞 SUPPORT

Pour toute question ou problème :
- 📧 Email : contact@infrarouge-mag.com
- 📸 Instagram : @infrarouge_mag

---

**Version 2.0 - Guide Complet INFRAROUGE**
*Dernière mise à jour : Janvier 2026*`,
  `filepath`: `C:\\Users\\arthu\\Desktop\\INFRAROUGE\\GUIDE_COMPLET.md`
