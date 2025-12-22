# 💎 SNIPPETS - INFRAROUGE

Collection de composants réutilisables pour étendre le site.

---

## 🎴 CARDS

### Card Article Premium
```html
<article class="card-premium">
    <div class="card-image">
        <img src="IMAGE_URL" alt="Description" loading="lazy">
        <div class="card-overlay"></div>
        <span class="card-badge">Badge Text</span>
    </div>
    <div class="card-content">
        <div class="card-meta">
            <span class="meta-category">Catégorie</span>
            <span class="meta-date">Date</span>
        </div>
        <h3 class="card-title">Titre de l'article</h3>
        <p class="card-excerpt">Description courte...</p>
        <a href="#" class="card-link">
            <span>Lire plus</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
            </svg>
        </a>
    </div>
</article>
```

### Card Artiste
```html
<div class="artist-card">
    <div class="artist-visual">
        <img src="ARTISTE_IMAGE" alt="Nom Artiste">
        <div class="artist-overlay">
            <div class="artist-socials">
                <a href="#" class="social-icon"><span>IG</span></a>
                <a href="#" class="social-icon"><span>SC</span></a>
                <a href="#" class="social-icon"><span>YT</span></a>
            </div>
        </div>
    </div>
    <div class="artist-info">
        <h3 class="artist-name">Nom Artiste</h3>
        <p class="artist-genre">Genre · Ville</p>
        <a href="#" class="artist-link">Voir le profil →</a>
    </div>
</div>
```

### Card Event
```html
<div class="event-card">
    <div class="event-date">
        <span class="date-day">28</span>
        <span class="date-month">DÉC</span>
    </div>
    <div class="event-content">
        <h3 class="event-title">Titre de l'événement</h3>
        <p class="event-location">Lieu · Ville</p>
        <span class="event-tag">Type</span>
    </div>
    <a href="#" class="event-link">→</a>
</div>
```

---

## 🎯 BUTTONS

### Button Primary (Gradient)
```html
<button class="btn-primary">
    <span class="btn-text">Texte du bouton</span>
    <span class="btn-glow"></span>
</button>
```

### Button Secondary (Outline)
```html
<button class="btn-secondary">
    <span class="btn-text">Texte du bouton</span>
    <span class="btn-icon">→</span>
</button>
```

### Button avec Loading
```html
<button class="btn-primary" id="submit-btn">
    <span class="btn-text">Envoyer</span>
</button>

<script>
document.getElementById('submit-btn').addEventListener('click', function() {
    this.innerHTML = '<span>Chargement...</span>';
    this.disabled = true;
    
    // Simuler requête
    setTimeout(() => {
        this.innerHTML = '<span>✓ Envoyé !</span>';
        this.style.background = 'linear-gradient(135deg, #00ff88 0%, #00cc66 100%)';
    }, 2000);
});
</script>
```

---

## 📝 FORMS

### Form Newsletter
```html
<form class="newsletter-form" id="newsletter">
    <input type="email" placeholder="Votre email" required>
    <button type="submit">
        <span>S'abonner</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
        </svg>
    </button>
</form>

<script>
document.getElementById('newsletter').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.innerHTML = '<span>✓ Abonné !</span>';
    btn.style.background = 'var(--color-success)';
    setTimeout(() => {
        e.target.reset();
        btn.innerHTML = '<span>S\'abonner</span>';
        btn.style.background = '';
    }, 3000);
});
</script>
```

### Form Contact
```html
<form class="contact-form">
    <div class="form-group">
        <label for="name">Nom</label>
        <input type="text" id="name" required>
    </div>
    
    <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" required>
    </div>
    
    <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" rows="5" required></textarea>
    </div>
    
    <button type="submit" class="btn-primary">
        <span class="btn-text">Envoyer</span>
    </button>
</form>

<style>
.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--color-text-secondary);
    font-weight: 600;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.9rem 1.2rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-sm);
    color: var(--color-text);
    font-family: inherit;
    transition: all var(--transition-base);
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.08);
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(255, 0, 51, 0.1);
}
</style>
```

---

## 🖼️ MODALS

### Modal Simple
```html
<div id="modal" class="modal">
    <div class="modal-overlay"></div>
    <div class="modal-content">
        <button class="modal-close">&times;</button>
        <h2 class="modal-title">Titre du modal</h2>
        <p class="modal-text">Contenu du modal...</p>
    </div>
</div>

<style>
.modal {
    display: none;
    position: fixed;
    inset: 0;
    z-index: 9999;
    align-items: center;
    justify-content: center;
}

.modal.active {
    display: flex;
}

.modal-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(10px);
}

.modal-content {
    position: relative;
    z-index: 1;
    max-width: 600px;
    width: 90%;
    padding: 3rem;
    background: var(--gradient-surface);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-lg);
    animation: modalSlideIn 0.3s ease;
}

@keyframes modalSlideIn {
    from {
        opacity: 0;
        transform: translateY(-30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    font-size: 1.5rem;
    color: var(--color-text);
    cursor: pointer;
}
</style>

<script>
// Ouvrir modal
function openModal(id) {
    document.getElementById(id).classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Fermer modal
function closeModal(id) {
    document.getElementById(id).classList.remove('active');
    document.body.style.overflow = '';
}

// Event listeners
document.querySelector('.modal-close').addEventListener('click', () => closeModal('modal'));
document.querySelector('.modal-overlay').addEventListener('click', () => closeModal('modal'));
</script>
```

---

## 🎨 BADGES

### Badge Basic
```html
<span class="badge">Text</span>

<style>
.badge {
    display: inline-block;
    padding: 0.3rem 0.8rem;
    background: rgba(255, 0, 51, 0.1);
    border: 1px solid rgba(255, 0, 51, 0.2);
    border-radius: var(--radius-full);
    color: var(--color-primary);
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
}
</style>
```

### Badge avec Dot
```html
<span class="badge-dot">
    <span class="dot"></span>
    <span class="text">En direct</span>
</span>

<style>
.badge-dot {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-full);
}

.badge-dot .dot {
    width: 8px;
    height: 8px;
    background: var(--color-success);
    border-radius: 50%;
    animation: dotPulse 2s infinite;
}

@keyframes dotPulse {
    0%, 100% {
        box-shadow: 0 0 0 0 rgba(0, 255, 136, 0.7);
    }
    50% {
        box-shadow: 0 0 0 6px rgba(0, 255, 136, 0);
    }
}
</style>
```

---

## 🎭 ANIMATIONS

### Fade In Up
```css
.fade-in-up {
    opacity: 0;
    animation: fadeInUp 0.8s ease forwards;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

### Slide In Left
```css
.slide-in-left {
    opacity: 0;
    animation: slideInLeft 0.6s ease forwards;
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
```

### Scale In
```css
.scale-in {
    opacity: 0;
    animation: scaleIn 0.5s ease forwards;
}

@keyframes scaleIn {
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}
```

### Pulse Glow
```css
.pulse-glow {
    animation: pulseGlow 2s ease-in-out infinite alternate;
}

@keyframes pulseGlow {
    from {
        box-shadow: 0 0 5px var(--color-primary);
    }
    to {
        box-shadow: 0 0 20px var(--color-primary), 
                    0 0 30px var(--color-primary);
    }
}
```

---

## 🎯 SCROLL ANIMATIONS (GSAP)

### Fade In au Scroll
```javascript
gsap.from('.element', {
    scrollTrigger: {
        trigger: '.element',
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: 'power2.out'
});
```

### Stagger Animation
```javascript
gsap.from('.card', {
    scrollTrigger: {
        trigger: '.card',
        start: 'top 80%'
    },
    opacity: 0,
    y: 50,
    duration: 0.6,
    stagger: 0.1, // Délai entre chaque élément
    ease: 'power2.out'
});
```

---

## 📊 TOOLTIPS

### Tooltip Simple
```html
<span class="tooltip" data-tooltip="Texte du tooltip">
    Hover moi
</span>

<style>
.tooltip {
    position: relative;
    cursor: help;
}

.tooltip::before {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(-8px);
    padding: 0.5rem 1rem;
    background: rgba(0, 0, 0, 0.9);
    color: white;
    border-radius: var(--radius-sm);
    font-size: 0.85rem;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
}

.tooltip:hover::before {
    opacity: 1;
}
</style>
```

---

## 🎨 GRADIENTS

### Gradient Text
```css
.gradient-text {
    background: linear-gradient(135deg, #ff0033 0%, #9933ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
```

### Gradient Border
```css
.gradient-border {
    position: relative;
    padding: 2rem;
    background: var(--color-bg);
    border-radius: var(--radius-lg);
}

.gradient-border::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: var(--radius-lg);
    padding: 2px;
    background: linear-gradient(135deg, #ff0033, #9933ff);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, 
                  linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
}
```

---

## 🔔 NOTIFICATIONS

### Notification Toast
```html
<div id="toast" class="toast">
    <span class="toast-icon">✓</span>
    <span class="toast-text">Message de succès !</span>
</div>

<style>
.toast {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    padding: 1rem 1.5rem;
    background: var(--gradient-surface);
    border: 1px solid var(--color-success);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-lg);
    display: flex;
    align-items: center;
    gap: 1rem;
    transform: translateY(100px);
    opacity: 0;
    transition: all 0.3s ease;
    z-index: 9999;
}

.toast.show {
    transform: translateY(0);
    opacity: 1;
}

.toast-icon {
    font-size: 1.5rem;
}
</style>

<script>
function showToast(message, duration = 3000) {
    const toast = document.getElementById('toast');
    toast.querySelector('.toast-text').textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

// Utilisation
showToast('Opération réussie !');
</script>
```

---

## 📱 RESPONSIVE HELPERS

### Show/Hide par Breakpoint
```css
/* Masquer sur mobile */
.hide-mobile {
    display: block;
}

@media (max-width: 768px) {
    .hide-mobile {
        display: none;
    }
}

/* Afficher uniquement sur mobile */
.show-mobile {
    display: none;
}

@media (max-width: 768px) {
    .show-mobile {
        display: block;
    }
}
```

---

## 🎨 GLASSMORPHISM

### Container Glass Effect
```css
.glass-container {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-lg);
    padding: 2rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
```

---

💎 **Tous ces snippets sont prêts à l'emploi et s'intègrent parfaitement avec le design system INFRAROUGE !**