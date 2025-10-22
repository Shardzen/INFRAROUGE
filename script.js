try {
    // Three.js Star Field
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('star-field'), alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 5;

    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({ color: 0xff0000, size: 0.5 });
    const starsVertices = [];
    // Réduction de 1000 à 300 étoiles pour améliorer les performances
    for (let i = 0; i < 300; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = (Math.random() - 0.5) * 2000;
        starsVertices.push(x, y, z);
    }
    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    function animateStars() {
        requestAnimationFrame(animateStars);
        stars.rotation.x += 0.0002;
        stars.rotation.y += 0.0002;
        renderer.render(scene, camera);
    }
    animateStars();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
} catch (err) {
    console.error('Three.js initialization failed:', err);
    // fallback : masquer le canvas pour éviter erreurs visuelles
    const canvas = document.getElementById('star-field');
    if (canvas) canvas.style.display = 'none';
}

// Enhanced Loading Animation
window.addEventListener('load', () => {
    const loading = document.getElementById('loading');
    const progressBar = document.getElementById('progress-bar');
    const logoTrace = document.getElementById('logo-trace');
    const energyLine = document.getElementById('energy-line');
    const loadingText = document.getElementById('loading-text');
    const energyParticles = document.getElementById('energy-particles');

    // Create energy particles - Réduction de 25 à 10 pour améliorer les performances
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.className = 'energy-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 3 + 's';
        particle.style.animationDuration = (Math.random() * 2 + 2) + 's';
        energyParticles.appendChild(particle);
    }

    // Timeline simplifiée - 3 phases au lieu de 7
    const tl = gsap.timeline();

    // Phase 1: Particules et logo
    tl.to('.energy-particle', {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: 'power2.out'
    });

    tl.to('#logo-outline', {
        opacity: 0.8,
        textShadow: '0 0 30px rgba(255, 0, 0, 0.8)',
        duration: 1,
        ease: 'power2.out'
    }, '-=0.3');

    // Phase 2: Animation principale
    tl.to(energyLine, {
        width: '100%',
        duration: 1.5,
        ease: 'power2.inOut'
    }, '-=0.5');

    tl.to(logoTrace, {
        width: '100%',
        duration: 1,
        ease: 'power2.out'
    }, '-=1');

    tl.to(progressBar, {
        width: '100%',
        duration: 1.5,
        ease: 'power2.out'
    }, '-=0.8');

    tl.to(loadingText, {
        opacity: 1,
        duration: 0.5
    }, '-=1');

    // Phase 3: Effets finaux et disparition
    tl.to([logoTrace, energyLine], {
        textShadow: '0 0 40px #ff0000, 0 0 80px #ff0000',
        boxShadow: '0 0 40px #ff0000',
        duration: 0.3,
        yoyo: true,
        repeat: 2,
        ease: 'power2.inOut'
    }, '-=0.5');

    tl.to(loading, {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        onComplete: () => loading.style.display = 'none'
    }, '+=0.2');
});

// Particles - Réduction de 15 à 8 particules flottantes
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.width = Math.random() * 5 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDelay = Math.random() * 20 + 's';
        particlesContainer.appendChild(particle);
    }
}
createParticles();

// Scroll Animations - Optimisation des ScrollTriggers
gsap.registerPlugin(ScrollTrigger);

// Animation d'entrée simplifiée
gsap.from('#home h1', { opacity: 0, y: 50, duration: 1, delay: 2 });
gsap.from('#home p', { opacity: 0, y: 50, duration: 1, delay: 2.3 });
gsap.from('#home a', { opacity: 0, y: 50, duration: 1, delay: 2.6 });

gsap.from('#news h2', {
    scrollTrigger: { trigger: '#news', start: 'top 80%' },
    opacity: 0, y: 50, duration: 0.8
});

gsap.from('#news .grid > div', {
    scrollTrigger: { trigger: '#news', start: 'top 80%' },
    opacity: 0, y: 50, duration: 0.8, stagger: 0.15
});

// Scroll-based background changes - Réduction du scrub pour améliorer les performances
gsap.to('body', {
    scrollTrigger: {
        trigger: '#news',
        start: 'top center',
        end: 'bottom center',
        scrub: 0.5 // Réduction du scrub
    },
    background: 'linear-gradient(135deg, #ff0000, #1a0000, #2a001a)'
});

gsap.to('body', {
    scrollTrigger: {
        trigger: '#artist-focus',
        start: 'top center',
        end: 'bottom center',
        scrub: 0.5
    },
    background: 'linear-gradient(135deg, #800080, #000000, #1a0000)'
});

gsap.to('body', {
    scrollTrigger: {
        trigger: '#discovery',
        start: 'top center',
        end: 'bottom center',
        scrub: 0.5
    },
    background: 'linear-gradient(135deg, #000000, #ff0000, #800080)'
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Search Functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');

    console.log('Search elements found:', !!searchInput, !!searchBtn);

    if (searchInput && searchBtn) {
        // Search on button click
        searchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            performSearch();
        });

        // Search on Enter key
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch();
            }
        });

        console.log('Search event listeners added');
    }

    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        console.log('Performing search for:', query);

        if (!query) {
            showSearchMessage('Veuillez entrer un terme de recherche');
            return;
        }

        // Define search mappings for different pages
        const searchMappings = {
            'petite sœur': 'artists.html',
            'petite soeur': 'artists.html',
            'lorenzo': 'artists.html',
            'laylow': 'artists.html',
            'artistes': 'artists.html',
            'artists': 'artists.html',
            'actualité': 'news.html',
            'actualites': 'news.html',
            'news': 'news.html',
            'événements': 'events.html',
            'evenements': 'events.html',
            'events': 'events.html',
            'galerie': 'gallery.html',
            'gallery': 'gallery.html',
            'contact': 'contact.html',
            'à propos': 'about.html',
            'about': 'about.html',
            'rap': 'artists.html',
            'street art': 'gallery.html',
            'photographie': 'gallery.html',
            'peinture': 'gallery.html',
            'marseille': 'artists.html',
            'paris': 'artists.html',
            'infrarouge': 'index.html',
            'accueil': 'index.html',
            'home': 'index.html'
        };

        // Check if query matches any mapping
        for (const [key, page] of Object.entries(searchMappings)) {
            if (query.includes(key) || key.includes(query)) {
                console.log('Redirecting to:', page);
                window.location.href = page;
                return;
            }
        }

        // If no specific match, search within current page content
        console.log('No mapping found, searching in page');
        searchInPage(query);
    }

    function searchInPage(query) {
        const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, div, article');
        let found = false;
        let firstMatch = null;

        console.log('Searching in page for:', query);

        elements.forEach(element => {
            const text = element.textContent.toLowerCase();
            if (text.includes(query)) {
                console.log('Found match in element:', element.tagName, text.substring(0, 50) + '...');
                if (!found) {
                    firstMatch = element;
                    found = true;
                }
                // Highlight all matches
                highlightText(element, query);
            }
        });

        if (found && firstMatch) {
            // Scroll to first match
            firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
            showSearchMessage('Résultat trouvé !');
        } else {
            // Show no results message
            showSearchMessage('Aucun résultat trouvé pour "' + query + '"');
        }
    }

    function highlightText(element, query) {
        const text = element.textContent;
        const regex = new RegExp(`(${query})`, 'gi');
        const highlighted = text.replace(regex, '<mark class="bg-yellow-300 text-black">$1</mark>');
        element.innerHTML = highlighted;

        // Remove highlight after 5 seconds
        setTimeout(() => {
            element.innerHTML = text;
        }, 5000);
    }

    function showSearchMessage(message) {
        // Remove existing message
        const existingMsg = document.getElementById('search-message');
        if (existingMsg) existingMsg.remove();

        // Create new message
        const msg = document.createElement('div');
        msg.id = 'search-message';
        msg.textContent = message;
        msg.className = 'fixed top-20 right-4 bg-red-600 text-white px-4 py-2 rounded-lg z-50 shadow-lg';
        msg.style.zIndex = '9999';
        document.body.appendChild(msg);

        // Remove after 3 seconds
        setTimeout(() => {
            if (msg.parentNode) msg.remove();
        }, 3000);
    }



    // Newsletter Functionality
    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterEmail = document.getElementById('newsletter-email');
    const newsletterSuccess = document.getElementById('newsletter-success');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const email = newsletterEmail.value.trim();
            if (!email) return;

            // Show loading state
            const submitBtn = newsletterForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Inscription...';

            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1500));

                // Show success message
                newsletterSuccess.classList.remove('hidden');
                newsletterForm.reset();

                // Hide success after 5 seconds
                setTimeout(() => {
                    newsletterSuccess.classList.add('hidden');
                }, 5000);

            } catch (error) {
                console.error('Newsletter signup error:', error);
                showSearchMessage('Erreur lors de l\'inscription. Veuillez réessayer.');
            } finally {
                // Reset button
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        });
    }

// Theme Toggle Functionality
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');

    if (themeToggle) {
        // Load saved theme
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);

        // Toggle theme on click
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        const toggle = document.getElementById('theme-toggle');
        if (toggle) toggle.setAttribute('aria-checked', theme === 'light' ? 'true' : 'false');

        if (theme === 'light') {
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        } else {
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        }
    }

    // Lazy Loading for Images - Performance Optimization
    function lazyLoadImages() {
        const images = document.querySelectorAll('img[loading="lazy"]');

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

            images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for browsers without IntersectionObserver
            images.forEach(img => img.classList.add('loaded'));
        }
    }

    // Initialize lazy loading
    lazyLoadImages();

    // Performance Monitoring
    function logPerformance() {
        if ('performance' in window && 'getEntriesByType' in performance) {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    console.log('Page Load Time:', perfData.loadEventEnd - perfData.fetchStart, 'ms');
                }, 0);
            });
        }
    }

    // Initialize performance monitoring in development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        logPerformance();
    }

    // Service Worker Registration for PWA (if needed)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            // Register service worker for caching (optional)
            // navigator.serviceWorker.register('/sw.js');
        });
    }
});
