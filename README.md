# 🚀 Personal Portfolio Website

> **Showcase your skills, projects, and professional journey in a modern, responsive portfolio.**

<div align="center">

[![GitHub stars](https://img.shields.io/github/stars/Saraansh0001/Portfolio?style=flat-square&color=0891b2)](https://github.com/Saraansh0001/Portfolio/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Saraansh0001/Portfolio?style=flat-square&color=0891b2)](https://github.com/Saraansh0001/Portfolio/network/members)
[![Open Source](https://img.shields.io/badge/Open%20Source-%E2%9D%A4-0891b2?style=flat-square)](https://github.com/Saraansh0001/Portfolio)
[![License](https://img.shields.io/badge/License-MIT-0891b2?style=flat-square)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=flat-square&logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
[![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=flat-square&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</div>

---

## 📑 Table of Contents

- [✨ Key Features](#key-features)
- [🛠 Tech Stack](#tech-stack)
- [💡 Challenges & Solutions](#challenges--solutions)
- [📚 Project Category](#project-category)
- [🗺️ Future Roadmap](#roadmap)
- [🎯 Quick Start](#quick-start)
- [📂 Project Structure](#project-structure)
- [🔧 Development & Customization](#development--customization)
- [❓ FAQ & Troubleshooting](#faq--troubleshooting)
- [🔗 Connect With Me](#connect-with-me)

---

## ✨ Key Features

<table>
<tr>
<td width="50%">

### 🎨 Responsive Design

Optimized for mobile, tablet, and desktop devices, ensuring a seamless experience across all screen sizes and devices.

</td>
<td width="50%">

### 📱 Interactive Navigation

Smooth multi-page navigation between Home, About Me, Skills, Projects, and Goals sections with intuitive UI controls.

</td>
</tr>
<tr>
<td width="50%">

### 🔗 Social Integration

Direct links to LinkedIn, GitHub, and LeetCode profiles, making it easy for visitors to connect and explore your professional presence.

</td>
<td width="50%">

### 📸 Project Showcase

Elegant project cards with hover effects, live demo links, and GitHub code repository references for quick access.

</td>
</tr>
<tr>
<td width="50%">

### 📊 Skills Visualization

Dynamic skill progress bars and categorized skill sections (Frontend, Backend, etc.) to display technical expertise at a glance.

</td>
<td width="50%">

### ✉️ Call-to-Action Buttons

Strategic CTAs (About Me, View Projects, Contact Me) guide visitors to key sections and encourage engagement.

</td>
</tr>
<tr>
<td width="50%">

### 🌐 SEO Optimized

Metadata, open graph tags, and semantic HTML ensure your portfolio ranks well and shares beautifully on social platforms.

</td>
<td width="50%">

### ⚡ Performance Optimized

Preloaded critical resources and optimized asset loading for fast page performance and better user experience.

</td>
</tr>
</table>

---

## 🛠 Tech Stack

| Layer               | Technology                        |
| ------------------- | --------------------------------- |
| **Frontend**        | HTML5, CSS3, Vanilla JavaScript   |
| **Styling**         | CSS3 (Flexbox, Grid, Animations)  |
| **Responsiveness**  | Viewport Meta Tags, Media Queries |
| **Version Control** | Git & GitHub                      |
| **Hosting**         | GitHub Pages (Optional)           |

---

## 💡 Challenges & Solutions

### Challenge: Creating a Fully Responsive Design Without Frameworks

**Problem**: Building a polished, responsive portfolio using only vanilla HTML, CSS, and JavaScript without relying on Bootstrap or Tailwind presented challenges in maintaining consistency across multiple screen sizes and ensuring smooth interactions.

**Solution**: Implemented a mobile-first CSS approach with strategic media queries, flexbox, and grid layouts. Created reusable CSS classes for common components and used CSS custom properties (variables) for maintainable theming. Added JavaScript event listeners for responsive navigation and dynamic skill bar animations triggered on scroll, resulting in a lightweight, fast-loading portfolio.

---

## 📚 Project Category

This project falls under **Learning** — it represents a hands-on exploration of front-end development fundamentals. It demonstrates practical knowledge of:

- Semantic HTML and accessibility best practices
- Advanced CSS layouts and animations
- Vanilla JavaScript DOM manipulation
- Responsive web design principles

This portfolio serves as both a personal branding tool and a testament to foundational web development skills.

---

## 🗺️ Future Roadmap

- [ ] Add a blog section to share technical insights and learning notes
- [ ] Implement dark mode toggle for enhanced user experience and accessibility
- [ ] Integrate a contact form backend (Node.js/Express) with email notifications
- [ ] Add project filtering by technology stack (Frontend, Full-Stack, etc.)
- [ ] Create an animated timeline for professional experience and milestones

---

## 🎯 Quick Start

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: Git for cloning the repository

### Setup Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Saraansh0001/Portfolio.git
   cd Portfolio
   ```

2. **Open in Your Browser**

   ```bash
   # Simply open the index.html file in your browser
   # On Windows: double-click index.html
   # Or right-click → Open with → Your preferred browser
   ```

3. **Explore & Customize**
   - Edit `index.html` to update your content
   - Modify `CSS/index.css` to personalize the styling
   - Update `JS/index.js` for interactive features
   - Replace images in the `PICTURES/` folder with your own

---

## 📂 Project Structure

```
Portfolio/
├── index.html              # Main homepage
├── About-me.html           # About Me page
├── project.html            # Projects showcase
├── skill.html              # Skills section
├── goal.html               # Goals/Roadmap
├── CSS/
│   ├── index.css           # Homepage styling
│   ├── projects.css        # Projects page styling
│   ├── skills.css          # Skills page styling
│   ├── sideBar.css         # Navigation sidebar
│   └── animations.css      # Reusable animations
├── JS/
│   ├── index.js            # Main script
│   └── navigation.js       # Navigation logic
├── PICTURES/               # Images and assets
│   ├── Me.jpg
│   ├── Professional Photo.png
│   ├── Project1.png
│   └── ...
└── README.md               # This file
```

---

## 🔧 Development & Customization

### Color Scheme Customization

Edit the CSS custom properties in your stylesheet:

```css
:root {
  --primary-color: #0891b2;
  --secondary-color: #f97316;
  --text-dark: #1f2937;
  --text-light: #f3f4f6;
  --border-color: #e5e7eb;
}
```

### Adding New Pages

1. Create a new HTML file (e.g., `experience.html`)
2. Copy the existing header structure from another page
3. Add your content in the main section
4. Update navigation links to include the new page

### Updating Project Information

Edit `project.html` to add or modify project cards:

```html
<div class="project-card">
  <div class="project-image">
    <img src="PICTURES/your-project.png" alt="Project Name" />
  </div>
  <div class="project-content">
    <h3 class="project-title">Your Project Title</h3>
    <p class="project-description">Your project description</p>
  </div>
</div>
```

---

## ❓ FAQ & Troubleshooting

<details>
<summary><strong>Q: How do I host this portfolio online for free?</strong></summary>

**A:** You can host it using GitHub Pages:

1. Push your code to GitHub
2. Go to your repository settings
3. Enable GitHub Pages under the "Pages" section
4. Select the `main` branch as your source
5. Your portfolio will be live at `https://yourusername.github.io/Portfolio`

</details>

<details>
<summary><strong>Q: Why aren't my styles loading?</strong></summary>

**A:** Check the following:

- Verify CSS file paths are correct (relative to HTML file location)
- Clear browser cache (Ctrl+Shift+Delete)
- Check browser console for 404 errors (F12)
- Ensure CSS files are in the correct directory structure

</details>

<details>
<summary><strong>Q: How do I improve my portfolio's SEO?</strong></summary>

**A:** Tips to boost SEO:

- Add descriptive meta tags to each page
- Use semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<footer>`)
- Optimize images (compress and add alt text)
- Create a `sitemap.xml` for search engines
- Add Open Graph meta tags for social sharing

</details>

<details>
<summary><strong>Q: Can I use this template commercially?</strong></summary>

**A:** Yes! This project is under the MIT License, which allows commercial use. Simply credit the original author.

</details>

---

## 📊 Performance Tips

- **Compress Images**: Use tools like TinyPNG to reduce image file sizes
- **CSS Optimization**: Minify CSS and remove unused styles
- **JavaScript**: Use vanilla JS to keep bundle size minimal
- **Caching**: Enable browser caching in your hosting settings
- **Lighthouse Audit**: Run a Lighthouse audit (DevTools > Lighthouse) to identify improvement areas

---

## 🚀 Deployment Checklist

- [ ] All links are working correctly
- [ ] Images display properly
- [ ] Mobile responsiveness tested on multiple devices
- [ ] SEO meta tags updated
- [ ] Social share preview tested
- [ ] Contact information is current
- [ ] All external links open in new tabs
- [ ] No console errors when inspected

---

## 💡 Pro Tips

✨ **Use CSS transitions** for smooth interactive effects
✨ **Implement lazy loading** for images to boost performance
✨ **Add accessibility focus states** for keyboard navigation
✨ **Test across browsers** (Chrome, Firefox, Safari, Edge)
✨ **Keep animations subtle** to avoid overwhelming visitors

---

## 🔗 Connect With Me

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230A66C2.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/saraansh-gandhi-845403327/)
[![GitHub](https://img.shields.io/badge/GitHub-%23181717.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Saraansh0001)
[![LeetCode](https://img.shields.io/badge/LeetCode-%23FFA116.svg?style=for-the-badge&logo=leetcode&logoColor=white)](https://leetcode.com/u/SaraanshG/)

</div>

---

## 📝 License

This project is open source and available under the MIT License. Feel free to fork, modify, and use it as a template for your own portfolio!

---

<div align="center">

**Built with ❤️ and Vanilla JavaScript**

[⬆ Back to Top](#-personal-portfolio-website)

**Last Updated**: March 2026

</div>
