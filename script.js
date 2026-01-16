// ========================================
// THE HEALEY REPORT Public Accountability Report
// Interactive Script
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initProgressBar();
    initQuickNav();
    initTabs();
    initScrollAnimations();
    initPollBars();
    initParallax();
    initParticles();
    initToast();
    initQuoteCopy();
});

// ========================================
// Toast Notification System
// ========================================
let toastElement = null;
let toastTimeout = null;

function initToast() {
    // Create toast element if it doesn't exist
    toastElement = document.createElement('div');
    toastElement.className = 'toast';
    toastElement.setAttribute('role', 'status');
    toastElement.setAttribute('aria-live', 'polite');
    document.body.appendChild(toastElement);
}

function showToast(message, type = 'success', duration = 3000) {
    if (!toastElement) return;

    // Clear any existing timeout
    if (toastTimeout) {
        clearTimeout(toastTimeout);
    }

    // Set message and type
    toastElement.textContent = message;
    toastElement.className = `toast ${type}`;

    // Show toast
    requestAnimationFrame(() => {
        toastElement.classList.add('show');
    });

    // Hide after duration
    toastTimeout = setTimeout(() => {
        toastElement.classList.remove('show');
    }, duration);
}

// ========================================
// Navigation
// ========================================
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const nav = document.getElementById('nav');

    // Mobile toggle with accessibility
    navToggle?.addEventListener('click', () => {
        const isExpanded = navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close on link click
    navLinks?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle?.setAttribute('aria-expanded', 'false');
        });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks?.classList.contains('active')) {
            navLinks.classList.remove('active');
            navToggle?.classList.remove('active');
            navToggle?.setAttribute('aria-expanded', 'false');
            navToggle?.focus();
        }
    });

    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav?.classList.add('scrolled');
        } else {
            nav?.classList.remove('scrolled');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// Progress Bar
// ========================================
function initProgressBar() {
    const progressBar = document.getElementById('progressBar');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = Math.round((window.scrollY / windowHeight) * 100);
        progressBar.style.width = `${scrolled}%`;
        progressBar.setAttribute('aria-valuenow', scrolled);
    });
}

// ========================================
// Quick Navigation (Side dots)
// ========================================
function initQuickNav() {
    const quickNavItems = document.querySelectorAll('.quick-nav-item');
    if (quickNavItems.length === 0) return;

    const sections = [];
    quickNavItems.forEach(item => {
        const sectionId = item.getAttribute('data-section');
        const section = document.getElementById(sectionId);
        if (section) sections.push({ id: sectionId, el: section, navItem: item });
    });

    function updateActiveSection() {
        const scrollPos = window.scrollY + window.innerHeight / 3;

        sections.forEach(({ el, navItem }) => {
            const top = el.offsetTop;
            const bottom = top + el.offsetHeight;

            if (scrollPos >= top && scrollPos < bottom) {
                navItem.classList.add('active');
            } else {
                navItem.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveSection);
    updateActiveSection();
}

// ========================================
// Tabs (Fiscal Section) with Full Accessibility
// ========================================
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const tabList = document.querySelector('.fiscal-tabs');

    function activateTab(btn) {
        const tabId = btn.dataset.tab;

        // Update ARIA states
        tabBtns.forEach(b => {
            b.classList.remove('active');
            b.setAttribute('aria-selected', 'false');
            b.setAttribute('tabindex', '-1');
        });

        tabContents.forEach(c => c.classList.remove('active'));

        // Activate clicked tab
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        btn.setAttribute('tabindex', '0');

        const panel = document.getElementById(tabId);
        panel?.classList.add('active');
    }

    tabBtns.forEach((btn, index) => {
        // Set initial tabindex
        btn.setAttribute('tabindex', index === 0 ? '0' : '-1');

        btn.addEventListener('click', () => {
            activateTab(btn);
        });

        // Keyboard navigation for tabs (arrow keys)
        btn.addEventListener('keydown', (e) => {
            const tabArray = Array.from(tabBtns);
            const currentIndex = tabArray.indexOf(btn);
            let newIndex;

            switch (e.key) {
                case 'ArrowRight':
                case 'ArrowDown':
                    e.preventDefault();
                    newIndex = (currentIndex + 1) % tabArray.length;
                    tabArray[newIndex].focus();
                    activateTab(tabArray[newIndex]);
                    break;
                case 'ArrowLeft':
                case 'ArrowUp':
                    e.preventDefault();
                    newIndex = (currentIndex - 1 + tabArray.length) % tabArray.length;
                    tabArray[newIndex].focus();
                    activateTab(tabArray[newIndex]);
                    break;
                case 'Home':
                    e.preventDefault();
                    tabArray[0].focus();
                    activateTab(tabArray[0]);
                    break;
                case 'End':
                    e.preventDefault();
                    tabArray[tabArray.length - 1].focus();
                    activateTab(tabArray[tabArray.length - 1]);
                    break;
            }
        });
    });
}

// ========================================
// Scroll Animations
// ========================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Stagger children animation
                const children = entry.target.querySelectorAll('.stagger-child');
                children.forEach((child, index) => {
                    child.style.transitionDelay = `${index * 0.1}s`;
                    child.classList.add('visible');
                });
            }
        });
    }, observerOptions);

    // Elements to animate
    const animatedElements = document.querySelectorAll(`
        .vuln-card, .vendor-card, .cost-card, .quote-card, 
        .timeline-item, .conflict-step, .incident-card,
        .fallout-card, .official-card, .donor-card,
        .key-figure, .response-item, .bailout-item
    `);

    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(25px)';
        el.style.transition = `opacity 0.6s ease ${index % 5 * 0.05}s, transform 0.6s ease ${index % 5 * 0.05}s`;
        observer.observe(el);
    });

    // Add visible class styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

// ========================================
// Poll Bars Animation
// ========================================
function initPollBars() {
    const pollBars = document.querySelectorAll('.poll-fill');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target;
                const targetWidth = getComputedStyle(fill).getPropertyValue('--fill');
                setTimeout(() => {
                    fill.style.width = targetWidth;
                }, 300);
                observer.unobserve(fill);
            }
        });
    }, { threshold: 0.5 });

    pollBars.forEach(bar => observer.observe(bar));
}

// ========================================
// Parallax Effect
// ========================================
function initParallax() {
    const hero = document.querySelector('.hero-bg');
    if (!hero) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scroll = window.pageYOffset;
                if (scroll < window.innerHeight) {
                    hero.style.transform = `translateY(${scroll * 0.4}px)`;
                }
                ticking = false;
            });
            ticking = true;
        }
    });
}

// ========================================
// Particle Effect (Hero Background)
// ========================================
function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random properties
        const size = Math.random() * 4 + 2;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * -20;
        const opacity = Math.random() * 0.3 + 0.1;

        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, rgba(220,53,69,${opacity}) 0%, transparent 70%);
            border-radius: 50%;
            left: ${x}%;
            top: ${y}%;
            animation: float ${duration}s ease-in-out ${delay}s infinite;
            pointer-events: none;
        `;

        container.appendChild(particle);
    }

    // Add float animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
            25% { transform: translate(20px, -30px) scale(1.1); opacity: 0.8; }
            50% { transform: translate(-10px, -50px) scale(0.9); opacity: 0.6; }
            75% { transform: translate(30px, -20px) scale(1.05); opacity: 0.7; }
        }
    `;
    document.head.appendChild(style);
}

// ========================================
// Counter Animation (for future use)
// ========================================
function animateCounter(element, target, duration = 2000, prefix = '', suffix = '') {
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (easeOutQuart)
        const eased = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(eased * target);

        element.textContent = prefix + current.toLocaleString() + suffix;

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = prefix + target.toLocaleString() + suffix;
        }
    }

    requestAnimationFrame(update);
}

// ========================================
// Keyboard Shortcuts
// ========================================
// Note: Avoiding Ctrl+T as it conflicts with browser "new tab"
// Using Alt+T instead for accessibility compliance
document.addEventListener('keydown', (e) => {
    // Alt+T to toggle all tabs (show all content for printing)
    if (e.key === 't' && e.altKey) {
        e.preventDefault();
        const tabContents = document.querySelectorAll('.tab-content');
        tabContents.forEach(tc => tc.classList.add('active'));
        showToast('All tabs expanded for viewing');
    }

    // Ctrl+P handled by browser for print
});

// ========================================
// Typewriter Effect (Optional for headlines)
// ========================================
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// ========================================
// Intersection Observer for Section Highlights
// ========================================
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Update URL hash without jumping
            const sectionId = entry.target.id;
            if (sectionId && history.replaceState) {
                history.replaceState(null, null, `#${sectionId}`);
            }
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('section[id]').forEach(section => {
    sectionObserver.observe(section);
});

// ========================================
// Quote Copy with Toast Feedback
// ========================================
function initQuoteCopy() {
    document.querySelectorAll('.quote-card').forEach(card => {
        card.style.cursor = 'pointer';
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.title = 'Click or press Enter to copy quote';

        const copyHandler = async () => {
            const quote = card.querySelector('blockquote')?.textContent;
            const cite = card.querySelector('cite')?.textContent;

            if (quote && cite) {
                const text = `"${quote.trim()}" ${cite}`;

                try {
                    // Check if clipboard API is available
                    if (navigator.clipboard && navigator.clipboard.writeText) {
                        await navigator.clipboard.writeText(text);
                        showToast('Quote copied to clipboard!', 'success');
                    } else {
                        // Fallback for older browsers
                        const textarea = document.createElement('textarea');
                        textarea.value = text;
                        textarea.style.position = 'fixed';
                        textarea.style.opacity = '0';
                        document.body.appendChild(textarea);
                        textarea.select();
                        document.execCommand('copy');
                        document.body.removeChild(textarea);
                        showToast('Quote copied to clipboard!', 'success');
                    }

                    // Visual feedback
                    card.style.borderColor = '#10b981';
                    card.style.boxShadow = '0 0 20px rgba(16, 185, 129, 0.3)';

                    setTimeout(() => {
                        card.style.borderColor = '';
                        card.style.boxShadow = '';
                    }, 1000);
                } catch (err) {
                    showToast('Failed to copy quote', 'error');
                }
            }
        };

        card.addEventListener('click', copyHandler);

        // Keyboard support (Enter and Space)
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                copyHandler();
            }
        });
    });
}

// ========================================
// Performance: Lazy load images if any
// ========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}
