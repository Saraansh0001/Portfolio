// Performance optimization - prevent rendering until DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize page with performance optimizations
    initializePage();
    
    // Setup button event listeners
    setupButtonListeners();
    
    // Lazy load non-critical animations
    requestAnimationFrame(() => {
        setupAnimations();
        setupInteractions();
    });
});

function initializePage() {
    // Fade in body once DOM is ready
    document.body.style.opacity = '1';
    
    // Setup skip link for accessibility
    setupSkipLink();
    
    // Announce page changes to screen readers
    announcePageLoad();
}

function setupButtonListeners() {
    // Main CTA button - About Me
    document.getElementById("skillsBtn")?.addEventListener("click", function () {
        announceAction("Navigating to About Me page");
        window.location.href = "About-me.html";
    });

    // Projects button
    document.getElementById("projectsBtn")?.addEventListener("click", function () {
        announceAction("Navigating to Projects page");
        window.location.href = "project.html";
    });

    // Contact button - smooth scroll to footer
    document.getElementById("contactBtn")?.addEventListener("click", function () {
        announceAction("Scrolling to contact section");
        document.querySelector('.footer').scrollIntoView({ 
            behavior: 'smooth' 
        });
    });
}

function setupSkipLink() {
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector('#main-content');
            if (target) {
                target.focus();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

function announcePageLoad() {
    // Create live region for screen reader announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);
    
    // Announce page load
    setTimeout(() => {
        liveRegion.textContent = 'Portfolio homepage loaded successfully';
    }, 500);
}

function setupAnimations() {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (!prefersReducedMotion.matches) {
        // Animate right side content
        animateRightSide();
        // Animate quick navigation
        animateQuickNav();
        // Setup scroll animations
        setupScrollAnimations();
    } else {
        // Show content immediately for reduced motion users
        showContentImmediately();
    }
}

function showContentImmediately() {
    const rightSide = document.querySelector('.RightSide');
    const quickNav = document.querySelector('.quick-nav');
    
    if (rightSide) {
        rightSide.style.opacity = '1';
        rightSide.style.transform = 'translateX(0)';
    }
    
    if (quickNav) {
        quickNav.style.opacity = '1';
        quickNav.style.transform = 'translateY(0)';
    }
}

function animateRightSide() {
    const rightSide = document.querySelector('.RightSide');
    if (rightSide) {
        setTimeout(() => {
            rightSide.style.opacity = '1';
            rightSide.style.transform = 'translateX(0)';
        }, 300);
    }
}

function animateQuickNav() {
    const quickNav = document.querySelector('.quick-nav');
    if (quickNav) {
        setTimeout(() => {
            quickNav.style.opacity = '1';
            quickNav.style.transform = 'translateY(0)';
        }, 800);
    }
}

function setupScrollAnimations() {
    // Add parallax effect to the main image
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.2;
        
        const leftSide = document.querySelector('.LeftSide');
        if (leftSide) {
            leftSide.style.transform = `translateY(calc(-50% + ${rate}px))`;
        }
    });

    // Create intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.fade-in-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
}

function setupInteractions() {
    // Enhanced button interactions
    setupButtonEffects();
    
    // Navigation interactions
    setupNavigationEffects();
    
    // Photo border animation controls
    setupPhotoControls();
    
    // Keyboard navigation
    setupKeyboardNavigation();
}

function setupButtonEffects() {
    const buttons = document.querySelectorAll('.button-grad');
    
    buttons.forEach(button => {
        // Add ripple effect on click
        button.addEventListener('click', function(e) {
            createRippleEffect(e, this);
        });
        
        // Add hover effects
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

function createRippleEffect(event, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
    `;
    
    // Add ripple animation if not exists
    if (!document.querySelector('#ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    element.style.position = 'relative';
    element.appendChild(ripple);
    
    // Remove ripple after animation
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
        }
    }, 600);
}

function setupNavigationEffects() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        // Add enhanced hover effects
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Add click feedback
        item.addEventListener('click', function() {
            const destination = this.getAttribute('href').split('/').pop().replace('.html', '');
            announceAction(`Navigating to ${destination} page`);
        });
    });
}

function setupPhotoControls() {
    const photo = document.querySelector('.LeftSide img');
    const container = document.querySelector('.LeftSide');
    
    if (photo && container) {
        // Add click interaction for photo
        photo.addEventListener('click', function() {
            container.style.transform = 'translateY(-50%) scale(1.05)';
            setTimeout(() => {
                container.style.transform = 'translateY(-50%) scale(1)';
            }, 200);
        });
        
        // Add accessible controls
        photo.setAttribute('tabindex', '0');
        photo.setAttribute('role', 'button');
        photo.setAttribute('aria-label', 'View larger profile photo');
        
        photo.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    }
}

function setupKeyboardNavigation() {
    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Alt + number keys for quick navigation
        if (e.altKey && !e.ctrlKey && !e.shiftKey) {
            switch(e.key) {
                case '1':
                    e.preventDefault();
                    navigateToPage('skill.html');
                    break;
                case '2':
                    e.preventDefault();
                    navigateToPage('project.html');
                    break;
                case '3':
                    e.preventDefault();
                    navigateToPage('goal.html');
                    break;
                case '4':
                    e.preventDefault();
                    navigateToPage('About-me.html');
                    break;
                case '5':
                    e.preventDefault();
                    navigateToPage('Snapshot.html');
                    break;
            }
        }
        
        // Escape key to return to top
        if (e.key === 'Escape') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            const homePage = document.querySelector('.HomePage');
            if (homePage) {
                homePage.focus();
            }
        }
    });
}

function navigateToPage(page) {
    announceAction(`Navigating to ${page.replace('.html', '')} page`);
    window.location.href = page;
}

function announceAction(message) {
    const liveRegion = document.querySelector('#live-region');
    if (liveRegion) {
        liveRegion.textContent = message;
    }
}

// Performance monitoring
function trackPerformance() {
    window.addEventListener('load', function() {
        if ('performance' in window) {
            const perfData = performance.timing;
            const loadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`Page loaded in ${loadTime}ms`);
        }
    });
}

// Initialize performance tracking
trackPerformance();