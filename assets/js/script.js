/**
 * ProWi Landing Page - JavaScript
 * Interactive features and animations
 */

// ============================================
// Mobile Navigation Toggle
// ============================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ============================================
// Smooth Scroll for Navigation Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#contacto') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ============================================
// Navbar Background on Scroll
// ============================================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow when scrolled
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.07)';
    }

    // Hide/show navbar on scroll (optional)
    // Uncomment if you want this behavior
    /*
    if (currentScroll > lastScroll && currentScroll > 500) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    */

    lastScroll = currentScroll;
});

// ============================================
// Example Tabs Functionality
// ============================================
const exampleBtns = document.querySelectorAll('.example-btn');
const examplePanels = document.querySelectorAll('.example-panel');

exampleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const exampleId = btn.getAttribute('data-example');

        // Remove active class from all buttons and panels
        exampleBtns.forEach(b => b.classList.remove('active'));
        examplePanels.forEach(p => p.classList.remove('active'));

        // Add active class to clicked button and corresponding panel
        btn.classList.add('active');
        document.getElementById(exampleId)?.classList.add('active');
    });
});

// ============================================
// Scroll Animations (Intersection Observer)
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections for fade-in animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Observe cards for staggered animation
document.querySelectorAll('.feature-card, .benefit-card, .discount-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    card.style.transitionDelay = `${index * 0.1}s`;

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                cardObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cardObserver.observe(card);
});

// ============================================
// Animated Counter for Stats
// ============================================
const animateValue = (element, start, end, duration) => {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
};

// Observe stat numbers
const statNumbers = document.querySelectorAll('.stat-number');
let statsAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
            statsAnimated = true;
            // Since our stats are symbols, we'll just add a class for animation
            statNumbers.forEach(stat => {
                stat.style.opacity = '0';
                stat.style.transform = 'scale(0.5)';
                setTimeout(() => {
                    stat.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
                    stat.style.opacity = '1';
                    stat.style.transform = 'scale(1)';
                }, 100);
            });
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// ============================================
// Interactive Promo Card Animation
// ============================================
const promoCard = document.querySelector('.promo-card');

if (promoCard) {
    // Add subtle tilt effect on mouse move
    promoCard.addEventListener('mousemove', (e) => {
        const rect = promoCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        promoCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    promoCard.addEventListener('mouseleave', () => {
        promoCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
}

// ============================================
// Particle Effect for Hero (Optional)
// ============================================
const createParticles = () => {
    const heroParticles = document.querySelector('.hero-particles');
    if (!heroParticles) return;

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = `${Math.random() * 4 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.background = 'rgba(246, 108, 94, 0.3)';
        particle.style.borderRadius = '50%';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animation = `floatParticle ${Math.random() * 10 + 10}s linear infinite`;
        particle.style.animationDelay = `${Math.random() * 5}s`;

        heroParticles.appendChild(particle);
    }
};

// Add particle animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes floatParticle {
        0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        10% {
            opacity: 0.5;
        }
        90% {
            opacity: 0.5;
        }
        100% {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize particles
createParticles();

// ============================================
// Table Row Hover Effect with Sound (Optional)
// ============================================
const tableRows = document.querySelectorAll('.calc-table tbody tr');

tableRows.forEach(row => {
    row.addEventListener('mouseenter', () => {
        row.style.transition = 'all 0.3s ease';
    });
});

// ============================================
// Copy to Clipboard for Contact Email
// ============================================
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

emailLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // You can add a tooltip or notification here
        console.log('Email link clicked:', link.href);
    });
});

// ============================================
// Download Tracking (Optional)
// ============================================
const downloadLinks = document.querySelectorAll('a[download]');

downloadLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log('Document downloaded:', link.getAttribute('download'));
        // Here you can add analytics tracking
    });
});

// ============================================
// Roadmap Timeline Animation
// ============================================
const timelineItems = document.querySelectorAll('.timeline-item');

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 200);
            timelineObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = 'all 0.6s ease';
    timelineObserver.observe(item);
});

// ============================================
// Dynamic Year in Footer
// ============================================
const updateYear = () => {
    const yearElements = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => {
        el.textContent = currentYear;
    });
};

updateYear();

// ============================================
// Preload Animation (Optional)
// ============================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Add entrance animation to hero
    const heroContent = document.querySelector('.hero-content');
    const heroVisual = document.querySelector('.hero-visual');

    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(20px)';
        setTimeout(() => {
            heroContent.style.transition = 'all 0.8s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }

    if (heroVisual) {
        heroVisual.style.opacity = '0';
        heroVisual.style.transform = 'translateY(20px)';
        setTimeout(() => {
            heroVisual.style.transition = 'all 0.8s ease';
            heroVisual.style.opacity = '1';
            heroVisual.style.transform = 'translateY(0)';
        }, 300);
    }
});

// ============================================
// Interactive Discount Card Hover
// ============================================
const discountCards = document.querySelectorAll('.discount-card');

discountCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const number = card.querySelector('.discount-number');
        if (number) {
            number.style.transform = 'scale(1.2) rotate(10deg)';
            number.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
        }
    });

    card.addEventListener('mouseleave', () => {
        const number = card.querySelector('.discount-number');
        if (number) {
            number.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

// ============================================
// CTA Button Ripple Effect
// ============================================
const createRipple = (event) => {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();

    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add('ripple');

    button.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
};

// Add ripple style
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: rippleEffect 0.6s ease-out;
        pointer-events: none;
    }
    @keyframes rippleEffect {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Add ripple to all buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', createRipple);
});

// ============================================
// Console Easter Egg
// ============================================
console.log('%c¡Hola Desarrollador! 👋', 'font-size: 20px; color: #F66C5E; font-weight: bold;');
console.log('%cInteresado en ProWi? Contáctanos en contacto@prowi.com', 'font-size: 14px; color: #4A494B;');
console.log('%c🚀 Desarrollado con ❤️ por el equipo de ProWi', 'font-size: 12px; color: #9E9E9E;');

// ============================================
// Debug Mode (Press Ctrl+Shift+D)
// ============================================
let debugMode = false;

document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        debugMode = !debugMode;
        document.body.style.outline = debugMode ? '2px solid red' : 'none';
        document.querySelectorAll('section').forEach(section => {
            section.style.outline = debugMode ? '1px dashed blue' : 'none';
        });
        console.log(`Debug mode: ${debugMode ? 'ON' : 'OFF'}`);
    }
});

// ============================================
// Form Validation (If you add a contact form later)
// ============================================
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

// Export functions for potential use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateEmail,
        createRipple
    };
}

// ============================================
// Accessibility: Focus trap for mobile menu
// ============================================
const focusableElements = 'a[href], button, textarea, input, select';

const trapFocus = (element) => {
    const focusables = element.querySelectorAll(focusableElements);
    const firstFocusable = focusables[0];
    const lastFocusable = focusables[focusables.length - 1];

    element.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    lastFocusable.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    firstFocusable.focus();
                    e.preventDefault();
                }
            }
        }

        if (e.key === 'Escape') {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
};

if (navMenu) {
    trapFocus(navMenu);
}

// ============================================
// Performance: Lazy load images (if you add images)
// ============================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// Print the current example data (for debugging)
// ============================================
const logCurrentExample = () => {
    const activeExample = document.querySelector('.example-panel.active');
    if (activeExample) {
        console.log('Current active example:', activeExample.id);
    }
};

// Make it available globally for debugging
window.prowiDebug = {
    logCurrentExample,
    enableDebugMode: () => {
        debugMode = true;
        console.log('Debug mode enabled');
    }
};

console.log('✅ ProWi Landing Page - Loaded successfully');
console.log('💡 Tip: Type prowiDebug.enableDebugMode() in console to enable debug mode');
