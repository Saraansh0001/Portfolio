document.addEventListener("DOMContentLoaded", () => {
  /* --------------------------
     🔹 NAVIGATION BUTTONS
  ---------------------------*/
  const navLinks = {
    home: "index.html",
    about: "About-me.html",
    project: "project.html",
    goal: "goal.html",
  };

  Object.entries(navLinks).forEach(([key, url]) => {
    document.querySelector(`.nav-btn.${key}`)?.addEventListener("click", () => {
      window.location.href = url;
    });
  });

  /* --------------------------
     🔹 SKILL BAR ANIMATION
  ---------------------------*/
  const skillBars = document.querySelectorAll(".skill-progress");

  const animateSkillBars = () => {
    skillBars.forEach((bar) => {
      const rect = bar.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight - 50 && rect.bottom > 0) {
        const targetWidth = bar.dataset.width || "0%";
        bar.style.setProperty("--target-width", targetWidth);
        bar.style.width = targetWidth;
        bar.classList.add("animate");
      }
    });
  };

  window.addEventListener("scroll", animateSkillBars);
  setTimeout(animateSkillBars, 400);

  /* --------------------------
     🔹 SKILL CATEGORY HOVER
  ---------------------------*/
  const skillCategories = document.querySelectorAll(".skill-category");

  skillCategories.forEach((category) => {
    category.addEventListener("mouseenter", () => {
      category.style.transform = "translateY(-8px) scale(1.03)";
      category.style.boxShadow = "0 20px 40px rgba(0, 255, 204, 0.15)";
      category.style.borderColor = "rgba(0, 255, 204, 0.3)";
    });

    category.addEventListener("mouseleave", () => {
      category.style.transform = "translateY(0) scale(1)";
      category.style.boxShadow = "none";
      category.style.borderColor = "rgba(255, 255, 255, 0.1)";
    });
  });

  /* --------------------------
     🔹 STAGGER SKILL ITEMS
  ---------------------------*/
  const skillItems = document.querySelectorAll(".skill-item");
  skillItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
    setTimeout(() => {
      item.style.transition = "all 0.6s ease";
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }, index * 80);
  });

  /* --------------------------
     🔹 SOFT SKILL ANIMATION
  ---------------------------*/
  const softSkills = document.querySelectorAll(".soft-skill");

  softSkills.forEach((skill) => {
    skill.style.opacity = "0";
    skill.style.transform = "translateY(40px)";
    skill.style.transition = "all 0.6s ease";
  });

  const animateSoftSkills = () => {
    softSkills.forEach((skill, index) => {
      const rect = skill.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight - 50 && rect.bottom > 0) {
        setTimeout(() => {
          skill.style.opacity = "1";
          skill.style.transform = "translateY(0)";
        }, index * 120);
      }
    });
  };

  window.addEventListener("scroll", animateSoftSkills);
  setTimeout(animateSoftSkills, 800);

  /* --------------------------
     🔹 SMOOTH FADE-IN ON LOAD
  ---------------------------*/
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.8s ease";
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 200);
});
  