document.addEventListener("DOMContentLoaded", () => {
  // ===== Navigation functionality =====
  document.querySelector(".nav-btn.home")?.addEventListener("click", () => {
    window.location.href = "index.html";
  });

  document.querySelector(".nav-btn.about")?.addEventListener("click", () => {
    window.location.href = "About-me.html";
  });

  document.querySelector(".nav-btn.skill")?.addEventListener("click", () => {
    window.location.href = "skill.html";
  });

  document.querySelector(".nav-btn.goal")?.addEventListener("click", () => {
    window.location.href = "goal.html";
  });

  // ===== Project card animations =====
  const projectCards = document.querySelectorAll('.project-card');
  
  const animateCards = () => {
    projectCards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight && rect.bottom > 0) {
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, index * 100);
      }
    });
  };

  // Initialize cards as hidden
  projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
  });

  // Animate cards on scroll
  window.addEventListener('scroll', animateCards);
  setTimeout(animateCards, 500);

  // ===== Enhanced hover effects for project cards =====
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });

  // ===== Project button interactions =====
  const viewProjectBtns = document.querySelectorAll('.view-project-btn');
  const viewCodeBtns = document.querySelectorAll('.view-code-btn');

  viewProjectBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      console.log('View project clicked');
      // Example: window.open('your-project-url', '_blank');
    });
  });

  viewCodeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      console.log('View code clicked');
      // Example: window.open('your-github-url', '_blank');
    });
  });

  // ===== Timeline animation =====
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  const animateTimeline = () => {
    timelineItems.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight && rect.bottom > 0) {
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateX(0)';
        }, index * 200);
      }
    });
  };

  // Initialize timeline items as hidden
  timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = 'all 0.6s ease';
  });

  // Animate timeline on scroll
  window.addEventListener('scroll', animateTimeline);
  setTimeout(animateTimeline, 1000);

  // ===== Interactive tech tags =====
  const techTags = document.querySelectorAll('.tech-tag');
  
  techTags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
      tag.style.transform = 'scale(1.1)';
      tag.style.backgroundColor = 'rgba(0, 255, 204, 0.2)';
    });
    
    tag.addEventListener('mouseleave', () => {
      tag.style.transform = 'scale(1)';
      tag.style.backgroundColor = 'rgba(0, 255, 204, 0.1)';
    });
  });

  // ===== Project status badges =====
  const statusBadges = document.querySelectorAll('.project-status');
  
  statusBadges.forEach(badge => {
    if (badge.textContent.includes('In Progress')) {
      badge.style.background = 'linear-gradient(90deg, #ff7f00, #ffed4e)';
      badge.style.color = '#000';
      badge.style.animation = 'pulse 2s infinite';
    } else if (badge.textContent.includes('Planned')) {
      badge.style.background = 'rgba(255, 255, 255, 0.1)';
      badge.style.color = '#ccc';
    } else if (badge.textContent.includes('Concept')) {
      badge.style.background = 'rgba(138, 43, 226, 0.2)';
      badge.style.color = '#dda0dd';
    }
  });

  // ===== Smooth scroll for internal links =====
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

  // ===== Smooth Fade + Staggered Entry Animation =====
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);

  const sections = document.querySelectorAll('.projects-container, .learning-section, .footer');
  sections.forEach((sec, i) => {
    sec.classList.add(`stagger-${i + 1}`);
    setTimeout(() => sec.classList.add('animate-in'), 300 + (i * 300));
  });

  // Floating nav buttons
  document.querySelectorAll('.nav-btn').forEach((btn, i) => {
    btn.style.animation = `floatButtons 3s ease-in-out infinite`;
    btn.style.animationDelay = `${i * 0.2}s`;
  });
});

// ===== Optional: Interactive particles background =====
function createParticles() {
  const particles = document.createElement('div');
  particles.className = 'particles';
  particles.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
  `;
  
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: absolute;
      width: 2px;
      height: 2px;
      background: rgba(0, 255, 204, 0.3);
      border-radius: 50%;
      animation: float ${Math.random() * 10 + 5}s linear infinite;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
    `;
    particles.appendChild(particle);
  }
  
  document.body.appendChild(particles);
}

// ===== Add CSS for particles and floating nav =====
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
  }

  @keyframes floatButtons {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  body {
    opacity: 0;
    transition: opacity 0.5s ease;
  }
`;
document.head.appendChild(style);

// Initialize particles after delay
setTimeout(createParticles, 1000);