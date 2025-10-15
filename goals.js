document.addEventListener("DOMContentLoaded", () => {
  // Navigation functionality
  document.querySelector(".nav-btn.home")?.addEventListener("click", () => {
    window.location.href = "index.html";
  });

  document.querySelector(".nav-btn.about")?.addEventListener("click", () => {
    window.location.href = "About-me.html";
  });

  document.querySelector(".nav-btn.project")?.addEventListener("click", () => {
    window.location.href = "project.html";
  });

  document.querySelector(".nav-btn.skill")?.addEventListener("click", () => {
    window.location.href = "skill.html";
  });

  // Animate progress bars on scroll
  const progressBars = document.querySelectorAll('.progress-fill');
  
  const animateProgressBars = () => {
    progressBars.forEach(bar => {
      const rect = bar.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight && rect.bottom > 0) {
        const targetWidth = bar.getAttribute('data-width');
        bar.style.setProperty('--target-width', targetWidth);
        bar.style.width = targetWidth;
        bar.classList.add('animate');
      }
    });
  };

  // Trigger animation on scroll
  window.addEventListener('scroll', animateProgressBars);
  
  // Trigger animation on load
  setTimeout(animateProgressBars, 500);

  // Goal card animations
  const goalCards = document.querySelectorAll('.goal-card');
  
  const animateGoalCards = () => {
    goalCards.forEach((card, index) => {
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
  goalCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
  });

  // Animate cards on scroll
  window.addEventListener('scroll', animateGoalCards);
  setTimeout(animateGoalCards, 300);

  // Enhanced hover effects for goal cards
  goalCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Animate focus items
  const focusItems = document.querySelectorAll('.focus-item');
  
  const animateFocusItems = () => {
    focusItems.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight && rect.bottom > 0) {
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, index * 150);
      }
    });
  };

  // Initialize focus items as hidden
  focusItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'all 0.5s ease';
  });

  // Animate focus items on scroll
  window.addEventListener('scroll', animateFocusItems);
  setTimeout(animateFocusItems, 1000);

  // Add interactive effects to action items
  const actionItems = document.querySelectorAll('.action-item');
  
  actionItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'translateX(10px)';
      item.style.color = '#00ffcc';
    });
    
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'translateX(0)';
      item.style.color = '#ccc';
    });
  });

  // Add interactive effects to feature items
  const featureItems = document.querySelectorAll('.feature-item');
  
  featureItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'scale(1.05)';
      item.style.backgroundColor = 'rgba(138, 43, 226, 0.2)';
    });
    
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'scale(1)';
      item.style.backgroundColor = 'rgba(138, 43, 226, 0.1)';
    });
  });

  // Add pulse animation to high priority cards
  const highPriorityCards = document.querySelectorAll('.goal-card.priority-high');
  
  highPriorityCards.forEach(card => {
    setInterval(() => {
      card.style.boxShadow = '0 20px 40px rgba(255, 71, 87, 0.2)';
      setTimeout(() => {
        card.style.boxShadow = '0 20px 40px rgba(0, 255, 204, 0.1)';
      }, 1000);
    }, 3000);
  });

  // Section title animations
  const sectionTitles = document.querySelectorAll('.section-title');
  
  const animateSectionTitles = () => {
    sectionTitles.forEach((title, index) => {
      const rect = title.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight && rect.bottom > 0) {
        setTimeout(() => {
          title.style.opacity = '1';
          title.style.transform = 'translateX(0)';
        }, index * 200);
      }
    });
  };

  // Initialize section titles as hidden
  sectionTitles.forEach(title => {
    title.style.opacity = '0';
    title.style.transform = 'translateX(-30px)';
    title.style.transition = 'all 0.6s ease';
  });

  // Animate section titles on scroll
  window.addEventListener('scroll', animateSectionTitles);
  setTimeout(animateSectionTitles, 200);

  // Add loading animation for the page
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);

  // Create floating particles for visual enhancement
  function createFloatingParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
      overflow: hidden;
    `;

    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: absolute;
        width: 3px;
        height: 3px;
        background: rgba(0, 255, 204, 0.2);
        border-radius: 50%;
        animation: float ${Math.random() * 15 + 10}s linear infinite;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        box-shadow: 0 0 10px rgba(0, 255, 204, 0.3);
      `;
      particleContainer.appendChild(particle);
    }

    document.body.appendChild(particleContainer);
  }

  // Add CSS for floating particles
  const style = document.createElement('style');
  style.textContent = `
    @keyframes float {
      0% { 
        transform: translateY(100vh) translateX(0px) rotate(0deg); 
        opacity: 0; 
      }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { 
        transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px) rotate(360deg); 
        opacity: 0; 
      }
    }
    
    body {
      opacity: 0;
      transition: opacity 0.5s ease;
    }
  `;
  document.head.appendChild(style);

  // Initialize floating particles
  setTimeout(createFloatingParticles, 1500);

  // Add smooth scrolling for better UX
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    // Parallax effect for the page title
    const pageTitle = document.querySelector('.page-title');
    if (pageTitle) {
      pageTitle.style.transform = `translateY(${rate}px)`;
    }
  });
});