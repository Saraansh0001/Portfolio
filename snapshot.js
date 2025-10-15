document.addEventListener("DOMContentLoaded", () => {
  // Animate stat cards on load
  const statCards = document.querySelectorAll('.stat-card');
  
  statCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 150);
  });

  // Animate skill badges
  const skillBadges = document.querySelectorAll('.skill-badge');
  
  skillBadges.forEach((badge, index) => {
    badge.style.opacity = '0';
    badge.style.transform = 'scale(0.8)';
    badge.style.transition = 'all 0.5s ease';
    
    setTimeout(() => {
      badge.style.opacity = '1';
      badge.style.transform = 'scale(1)';
    }, 500 + (index * 100));
  });

  // Animate project items
  const projectItems = document.querySelectorAll('.project-item');
  
  const animateProjectItems = () => {
    projectItems.forEach((item, index) => {
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

  // Initialize project items as hidden
  projectItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = 'all 0.6s ease';
  });

  // Animate progress bars
  const progressBars = document.querySelectorAll('.progress-fill');
  
  const animateProgressBars = () => {
    progressBars.forEach((bar, index) => {
      const rect = bar.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight && rect.bottom > 0) {
        const width = bar.style.width;
        bar.style.width = '0%';
        
        setTimeout(() => {
          bar.style.width = width;
        }, 500 + (index * 200));
      }
    });
  };

  // Animate goal items
  const goalItems = document.querySelectorAll('.goal-item');
  
  const animateGoalItems = () => {
    goalItems.forEach((item, index) => {
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

  // Initialize goal items as hidden
  goalItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'all 0.6s ease';
  });

  // Animate motivation quote
  const motivationQuote = document.querySelector('.motivation-quote');
  
  const animateQuote = () => {
    if (motivationQuote) {
      const rect = motivationQuote.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight && rect.bottom > 0) {
        motivationQuote.style.opacity = '1';
        motivationQuote.style.transform = 'scale(1)';
      }
    }
  };

  // Initialize quote as hidden
  if (motivationQuote) {
    motivationQuote.style.opacity = '0';
    motivationQuote.style.transform = 'scale(0.95)';
    motivationQuote.style.transition = 'all 0.8s ease';
  }

  // Scroll event listeners
  window.addEventListener('scroll', () => {
    animateProjectItems();
    animateProgressBars();
    animateGoalItems();
    animateQuote();
  });

  // Initial calls
  setTimeout(() => {
    animateProjectItems();
    animateProgressBars();
    animateGoalItems();
    animateQuote();
  }, 1000);

  // Add hover effects to stat cards
  statCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Add interactive effects to skill badges
  skillBadges.forEach(badge => {
    badge.addEventListener('click', () => {
      badge.style.animation = 'bounce 0.6s ease';
      setTimeout(() => {
        badge.style.animation = '';
      }, 600);
    });
  });

  // Add pulse effect to active project status
  const activeStatus = document.querySelectorAll('.project-status.active');
  
  activeStatus.forEach(status => {
    setInterval(() => {
      status.style.boxShadow = '0 0 15px rgba(0, 255, 136, 0.5)';
      setTimeout(() => {
        status.style.boxShadow = 'none';
      }, 1000);
    }, 2000);
  });

  // Add CSS animations
  const style = document.createElement('style');
  style.textContent = `
    @keyframes bounce {
      0%, 20%, 53%, 80%, 100% {
        transform: translate3d(0,0,0);
      }
      40%, 43% {
        transform: translate3d(0,-15px,0);
      }
      70% {
        transform: translate3d(0,-7px,0);
      }
      90% {
        transform: translate3d(0,-2px,0);
      }
    }
  `;
  document.head.appendChild(style);

  // Smooth scrolling for internal links
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

  // Add loading animation for the page
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});

// Add page loading transition
const style = document.createElement('style');
style.textContent = `
  body {
    opacity: 0;
    transition: opacity 0.5s ease;
  }
`;
document.head.appendChild(style);