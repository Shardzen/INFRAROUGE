// ====================================
// INFRAROUGE - PREMIUM JAVASCRIPT
// ====================================

// === LOADER ANIMATION ===
class QuantumLoader {
    constructor() {
        this.loader = document.getElementById('quantum-loader');
        this.canvas = document.getElementById('loader-particles');
        this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
        this.particles = [];
        this.init();
    }

    init() {
        if (!this.canvas || !this.ctx) return;
        
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
        // Créer les particules
        for (let i = 0; i < 50; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1,
                opacity: Math.random()
            });
        }
        
        this.animate();
        
        // Démarrer l'animation de chargement
        setTimeout(() => this.complete(), 3000);
    }

    animate() {
        if (!this.ctx) return;
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(p => {
            // Update position
            p.x += p.vx;
            p.y += p.vy;
            
            // Wrap around
            if (p.x < 0) p.x = this.canvas.width;
            if (p.x > this.canvas.width) p.x = 0;
            if (p.y < 0) p.y = this.canvas.height;
            if (p.y > this.canvas.height) p.y = 0;
            
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            const gradient = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2);
            gradient.addColorStop(0, `rgba(255, 0, 51, ${p.opacity})`);
            gradient.addColorStop(1, 'rgba(255, 0, 51, 0)');
            this.ctx.fillStyle = gradient;
            this.ctx.fill();
        });
        
        if (this.loader && this.loader.style.display !== 'none') {
            requestAnimationFrame(() => this.animate());
        }
    }

    complete() {
        if (!this.loader) return;
        
        this.loader.style.opacity = '0';
        setTimeout(() => {
            this.loader.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 800);
    }
}

// === NAVIGATION ===
class Navigation {
    constructor() {
        this.nav = document.getElementById('main-nav');
        this.lastScroll = 0;
        this.init();
    }

    init() {
        if (!this.nav) return;
        
        // Scroll behavior
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll <= 0) {
                this.nav.classList.remove('scroll-up');
                return;
            }
            
            if (currentScroll > this.lastScroll && !this.nav.classList.contains('scroll-down')) {
                // Scroll down
                this.nav.classList.remove('scroll-up');
                this.nav.classList.add('scroll-down');
            } else if (currentScroll < this.lastScroll && this.nav.classList.contains('scroll-down')) {
                // Scroll up
                this.nav.classList.remove('scroll-down');
                this.nav.classList.add('scroll-up');
            }
            
            this.lastScroll = currentScroll;
        });
        
        // Active link on scroll
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').slice(1) === current) {
                    link.classList.add('active');
                }
            });
        });
    }
}

// === THEME TOGGLE ===
class ThemeToggle {
    constructor() {
        this.btn = document.getElementById('theme-toggle');
        this.currentTheme = localStorage.getItem('theme') || 'dark';
        this.init();
    }

    init() {
        if (!this.btn) return;
        
        // Appliquer le thème sauvegardé
        document.body.classList.toggle('light-theme', this.currentTheme === 'light');
        
        // Toggle au clic
        this.btn.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            const isLight = document.body.classList.contains('light-theme');
            this.currentTheme = isLight ? 'light' : 'dark';
            localStorage.setItem('theme', this.currentTheme);
        });
    }
}

// === HERO 3D CANVAS ===
class Hero3D {
    constructor() {
        this.canvas = document.getElementById('hero-canvas');
        if (!this.canvas || typeof THREE === 'undefined') return;
        
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.particles = null;
        this.init();
    }

    init() {
        // Scene
        this.scene = new THREE.Scene();
        
        // Camera
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.z = 5;
        
        // Renderer
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            alpha: true,
            antialias: true
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        
        // Particles
        const geometry = new THREE.BufferGeometry();
        const vertices = [];
        const colors = [];
        
        for (let i = 0; i < 1000; i++) {
            const x = (Math.random() - 0.5) * 20;
            const y = (Math.random() - 0.5) * 20;
            const z = (Math.random() - 0.5) * 20;
            vertices.push(x, y, z);
            
            // Gradient rouge-violet
            const color = new THREE.Color();
            color.setHSL(Math.random() * 0.1, 1, 0.5);
            colors.push(color.r, color.g, color.b);
        }
        
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        
        const material = new THREE.PointsMaterial({
            size: 0.05,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });
        
        this.particles = new THREE.Points(geometry, material);
        this.scene.add(this.particles);
        
        // Animation
        this.animate();
        
        // Resize
        window.addEventListener('resize', () => this.onResize());
        
        // Mouse move
        document.addEventListener('mousemove', (e) => this.onMouseMove(e));
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        
        if (this.particles) {
            this.particles.rotation.x += 0.0003;
            this.particles.rotation.y += 0.0005;
        }
        
        this.renderer.render(this.scene, this.camera);
    }

    onResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    onMouseMove(e) {
        const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
        
        if (this.particles) {
            this.particles.rotation.x = mouseY * 0.1;
            this.particles.rotation.y = mouseX * 0.1;
        }
    }
}

// === STATS COUNTER ===
class StatsCounter {
    constructor() {
        this.stats = document.querySelectorAll('.stat-number');
        this.init();
    }

    init() {
        if (this.stats.length === 0) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateValue(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        this.stats.forEach(stat => observer.observe(stat));
    }

    animateValue(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000;
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }
}

// === SEARCH FUNCTIONALITY ===
class Search {
    constructor() {
        this.input = document.getElementById('search-input');
        this.btn = document.querySelector('.search-btn');
        this.init();
    }

    init() {
        if (!this.input || !this.btn) return;
        
        this.btn.addEventListener('click', () => this.performSearch());
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.performSearch();
        });
    }

    performSearch() {
        const query = this.input.value.trim().toLowerCase();
        if (!query) return;
        
        const searchMappings = {
            'petite sœur': 'artists.html',
            'petite soeur': 'artists.html',
            'lorenzo': 'artists.html',
            'laylow': 'artists.html',
            'artistes': 'artists.html',
            'artists': 'artists.html',
            'news': 'news.html',
            'actualités': 'news.html',
            'events': 'events.html',
            'événements': 'events.html',
            'galerie': 'gallery.html',
            'gallery': 'gallery.html',
            'contact': 'contact.html',
            'about': 'about.html',
            'à propos': 'about.html'
        };
        
        for (const [key, page] of Object.entries(searchMappings)) {
            if (query.includes(key) || key.includes(query)) {
                window.location.href = page;
                return;
            }
        }
        
        this.searchInPage(query);
    }

    searchInPage(query) {
        const elements = document.querySelectorAll('h1, h2, h3, p, span');
        let found = false;
        
        elements.forEach(el => {
            const text = el.textContent.toLowerCase();
            if (text.includes(query) && !found) {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                el.style.backgroundColor = 'rgba(255, 0, 51, 0.2)';
                setTimeout(() => {
                    el.style.backgroundColor = '';
                }, 2000);
                found = true;
            }
        });
        
        if (!found) {
            alert('Aucun résultat trouvé pour: ' + query);
        }
    }
}

// === SMOOTH SCROLL ===
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href === '#') return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// === SCROLL ANIMATIONS ===
class ScrollAnimations {
    constructor() {
        if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
        
        gsap.registerPlugin(ScrollTrigger);
        this.init();
    }

    init() {
        // Cards fade in
        gsap.utils.toArray('.card-premium').forEach(card => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    end: 'top 50%',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: 'power2.out'
            });
        });
        
        // Artists cards
        gsap.utils.toArray('.artist-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%'
                },
                opacity: 0,
                y: 50,
                duration: 0.6,
                delay: i * 0.1,
                ease: 'power2.out'
            });
        });
        
        // Events
        gsap.utils.toArray('.event-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%'
                },
                opacity: 0,
                x: -30,
                duration: 0.6,
                delay: i * 0.1,
                ease: 'power2.out'
            });
        });
        
        // Section headers
        gsap.utils.toArray('.section-header').forEach(header => {
            gsap.from(header, {
                scrollTrigger: {
                    trigger: header,
                    start: 'top 75%'
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: 'power2.out'
            });
        });
    }
}

// === NEWSLETTER FORM ===
class NewsletterForm {
    constructor() {
        this.form = document.querySelector('.newsletter-form');
        this.init();
    }

    init() {
        if (!this.form) return;
        
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = this.form.querySelector('input').value;
            
            // Animation de succès
            const btn = this.form.querySelector('.newsletter-btn');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<span>✓ Abonné !</span>';
            btn.style.background = 'linear-gradient(135deg, #00ff88 0%, #00cc66 100%)';
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
                this.form.reset();
            }, 3000);
        });
    }
}

// === LAZY LOADING IMAGES ===
class LazyLoad {
    constructor() {
        this.images = document.querySelectorAll('img[loading="lazy"]');
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            });
            
            this.images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback pour les vieux navigateurs
            this.images.forEach(img => img.classList.add('loaded'));
        }
    }
}

// === MOBILE MENU ===
class MobileMenu {
    constructor() {
        this.burger = document.querySelector('.menu-burger');
        this.nav = document.querySelector('.nav-menu');
        this.init();
    }

    init() {
        if (!this.burger || !this.nav) return;
        
        this.burger.addEventListener('click', () => {
            this.burger.classList.toggle('active');
            this.nav.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }
}

// === INITIALIZATION ===
document.addEventListener('DOMContentLoaded', () => {
    // Empêcher le scroll pendant le chargement
    document.body.style.overflow = 'hidden';
    
    // Initialiser tous les modules
    new QuantumLoader();
    new Navigation();
    new ThemeToggle();
    new Hero3D();
    new StatsCounter();
    new Search();
    new SmoothScroll();
    new ScrollAnimations();
    new NewsletterForm();
    new LazyLoad();
    new MobileMenu();
    
    // Log de succès
    console.log('%c🔴 INFRAROUGE', 'color: #ff0033; font-size: 24px; font-weight: bold;');
    console.log('%cSite chargé avec succès', 'color: #9933ff; font-size: 14px;');
});

// === PERFORMANCE MONITORING ===
window.addEventListener('load', () => {
    if (window.performance && window.performance.timing) {
        const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
        console.log(`⚡ Page chargée en ${loadTime}ms`);
    }
});