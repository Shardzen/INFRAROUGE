# 🚀 GUIDE DE DÉPLOIEMENT RAPIDE - INFRAROUGE

## ÉTAPE 1 : VÉRIFICATION PRÉ-DÉPLOIEMENT

### Vérifier que tout fonctionne localement

```bash
# Dans le terminal, depuis C:\Users\arthu\INFRAROUGE
npm run dev
```

✅ Le site doit s'ouvrir sur http://localhost:5173
✅ Le loader doit apparaître puis disparaître
✅ La navigation doit être responsive
✅ Les hover effects doivent fonctionner sur la galerie

---

## ÉTAPE 2 : BUILD DE PRODUCTION

```bash
npm run build
```

Cela va créer un dossier `dist/` avec tous les fichiers optimisés.

---

## ÉTAPE 3 : DÉPLOIEMENT SUR NETLIFY

### 🎯 MÉTHODE RECOMMANDÉE : Git + Netlify

#### A. Initialiser Git (si pas encore fait)

```bash
git init
git add .
git commit -m "🔥 INFRAROUGE - Site complet"
```

#### B. Créer un repo GitHub

1. Aller sur https://github.com/new
2. Nom du repo : `infrarouge`
3. Visibilité : Public ou Private
4. NE PAS cocher "Add README"
5. Cliquer sur "Create repository"

#### C. Pousser le code sur GitHub

```bash
# Remplacer USERNAME par votre nom d'utilisateur GitHub
git remote add origin https://github.com/USERNAME/infrarouge.git
git branch -M main
git push -u origin main
```

#### D. Connecter à Netlify

1. Aller sur https://app.netlify.com
2. Cliquer sur "Add new site" → "Import an existing project"
3. Sélectionner "GitHub"
4. Autoriser Netlify à accéder à vos repos
5. Sélectionner le repo `infrarouge`
6. **Les paramètres sont auto-détectés** grâce au fichier `netlify.toml`
7. Cliquer sur "Deploy site"

⏱️ Le déploiement prend 1-2 minutes.

#### E. Récupérer l'URL

Une fois le déploiement terminé :
- URL temporaire : `random-name-123456.netlify.app`
- Vous pouvez changer le nom dans "Site settings" → "Change site name"
- Ou connecter un domaine custom

---

## 🎯 MÉTHODE ALTERNATIVE : Drag & Drop

### Pour un test rapide sans Git

1. **Builder le projet :**
   ```bash
   npm run build
   ```

2. **Aller sur Netlify Drop :**
   https://app.netlify.com/drop

3. **Glisser le dossier `dist/`** dans l'interface

4. **C'est tout !** Votre site est en ligne instantanément.

⚠️ Limitation : Pas de déploiement continu (il faut re-uploader à chaque modification)

---

## 🔥 COMMANDES UTILES

```bash
# Lancer en local
npm run dev

# Build pour production
npm run build

# Preview du build (comme en prod)
npm run preview

# Vérifier la structure
dir dist
```

---

## ✅ CHECKLIST POST-DÉPLOIEMENT

Une fois le site en ligne :

- [ ] Tester le site sur mobile
- [ ] Vérifier que toutes les images chargent
- [ ] Tester les animations (loader, hover, etc)
- [ ] Vérifier le player audio
- [ ] Tester la navigation sur toutes les pages
- [ ] Vérifier la scrollbar custom
- [ ] Partager l'URL !

---

## 🐛 TROUBLESHOOTING

### Le site ne charge pas

- Vérifier que `netlify.toml` est bien à la racine
- Vérifier le build log dans Netlify
- S'assurer que `dist/` contient bien des fichiers

### Les images ne chargent pas

- Utiliser des URLs absolues (https://...)
- Vérifier que les URLs Unsplash sont valides

### Les animations ne fonctionnent pas

- Vérifier que Framer Motion est bien installé
- Ouvrir la console (F12) pour voir les erreurs

### Build échoue

```bash
# Nettoyer et réinstaller
rm -rf node_modules dist
npm install
npm run build
```

---

## 🎨 PERSONNALISATION

### Changer les couleurs

Modifier `tailwind.config.js` :

```js
colors: {
  'infra-black': '#VOTRE_COULEUR',
  'infra-yellow': '#VOTRE_COULEUR',
  // ...
}
```

### Changer les artistes

Modifier `src/components/MosaicGrid.jsx` :

```js
const artists = [
  {
    name: 'VOTRE_ARTISTE',
    discipline: 'VOTRE_DISCIPLINE',
    image: 'VOTRE_URL_IMAGE',
  },
  // ...
]
```

### Changer le titre du player

Modifier `src/components/AudioPlayer.jsx` :

```js
const [currentTrack] = useState({
  title: 'VOTRE_TITRE',
  artist: 'VOTRE_ARTISTE',
});
```

---

## 📱 PARTAGER VOTRE SITE

Une fois déployé, partagez :

```
🔥 INFRAROUGE est en ligne !
👉 https://votre-site.netlify.app

Magazine underground • Galerie d'artistes • Player audio
#INFRAROUGE #WebDesign #Underground
```

---

## 🚀 NEXT STEPS

1. Ajouter Google Analytics
2. Optimiser le SEO (meta tags)
3. Ajouter un domaine custom
4. Intégrer un vrai CMS
5. Connecter Spotify API

---

**Besoin d'aide ?** 
- Documentation Netlify : https://docs.netlify.com
- Documentation Vite : https://vitejs.dev

---

🔥 **INFRAROUGE** - Prêt à brûler le web !
