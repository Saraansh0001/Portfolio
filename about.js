    document.addEventListener("DOMContentLoaded", () => {
        // Navigation functionality
        document.querySelector(".nav-btn.home")?.addEventListener("click", () => {
            window.location.href = "index.html";
        });

        document.querySelector(".nav-btn.project")?.addEventListener("click", () => {
            window.location.href = "project.html";
        });

        document.querySelector(".nav-btn.skill")?.addEventListener("click", () => {
            window.location.href = "skill.html";
        });

        document.querySelector(".nav-btn.goal")?.addEventListener("click", () => {
            window.location.href = "goal.html";
        });

        // Page loading animation
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);

        // Animate sections on load
        const middleSection = document.querySelector('.middle-section');
        const paragraphs = document.querySelectorAll('p');
        const highlights = document.querySelectorAll('.highlight, .UI');

        setTimeout(() => {
            if (middleSection) {
                middleSection.classList.add('animate-in');
            }
        }, 300);

        // Animate paragraphs with stagger effect
        paragraphs.forEach((p, index) => {
            p.classList.add(`stagger-${index + 1}`);
            setTimeout(() => {
                p.classList.add('animate-in');
            }, 500 + (index * 200));
        });

        // Add interactive effects to highlighted text
        highlights.forEach(highlight => {
            highlight.addEventListener('mouseenter', () => {
                highlight.style.transform = 'scale(1.1) translateY(-2px)';
                highlight.style.textShadow = '0 5px 15px rgba(0, 255, 204, 0.5)';
            });

            highlight.addEventListener('mouseleave', () => {
                highlight.style.transform = 'scale(1) translateY(0)';
                highlight.style.textShadow = 'none';
            });

            highlight.addEventListener('click', () => {
                const ripple = document.createElement('span');
                ripple.style.cssText = `
                    position: absolute;
                    width: 100px;
                    height: 100px;
                    background: rgba(0, 255, 204, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                `;
                const rect = highlight.getBoundingClientRect();
                ripple.style.left = (rect.width / 2 - 50) + 'px';
                ripple.style.top = (rect.height / 2 - 50) + 'px';
                highlight.style.position = 'relative';
                highlight.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);
            });
        });

        // Typing effect for headings
        const headings = document.querySelectorAll('h2');
        headings.forEach((heading, index) => {
            const text = heading.textContent;
            heading.textContent = '';
            heading.style.borderRight = '2px solid #00ffcc';
            setTimeout(() => {
                let i = 0;
                const typeWriter = () => {
                    if (i < text.length) {
                        heading.textContent += text.charAt(i);
                        i++;
                        setTimeout(typeWriter, 100);
                    } else {
                        setTimeout(() => heading.style.borderRight = 'none', 500);
                    }
                };
                typeWriter();
            }, 800 + (index * 1000));
        });

        // Floating animation for nav buttons
        const navBtns = document.querySelectorAll('.nav-btn');
        navBtns.forEach((btn, index) => {
            // Using existing float keyframe from CSS, but setting it here
            btn.style.animation = `float 3s ease-in-out infinite`;
            btn.style.animationDelay = `${index * 0.2}s`;
        });

        // Parallax effect
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.1;
            if (middleSection) {
                middleSection.style.transform = `translateY(${rate}px)`;
            }
        });

        // Removed: createParticles function and related code to fix visual bugs
        
        // Adding necessary keyframes that were in the removed JS section's style tag
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple { to { transform: scale(4); opacity: 0; } }
            @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
        `;
        document.head.appendChild(style);


        // Smooth scroll for anchors
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    });