# Anand Kumar - Personal Developer Portfolio

A modern, professional, accessible, and fully responsive personal developer portfolio website for **Anand Kumar** (Full Stack Developer: PHP, Laravel, MySQL, Java, Spring Boot).

## 🚀 Technical Stack
- **HTML5 & CSS3** (Custom Properties / Variables, Flexbox, CSS Grid)
- **Bootstrap 5.3.3 & Bootstrap Icons 1.11.3**
- **Vanilla JavaScript (ES6+)**

---

## ✨ Features

- **Single Page Application (SPA) Architecture**: Smooth scrolling navigation across all sections.
- **Dark / Light Theme Engine**: Toggle button with preference saved in `localStorage`.
- **Vanilla JS Typing Animation**: Dynamic typing effect showcasing developer roles.
- **Dynamic Technical Skills**: Filterable skills grid generated dynamically from `data.js`.
- **Dynamic Projects Showcase & Modal Details**: Project cards with category filters and interactive Bootstrap detail modals.
- **Interactive Experience Timeline**: Vertical visual timeline detailing career progression at Deytal Technologies Pvt. Ltd.
- **Services Section**: 4 professional cards highlighting backend, database, and full-stack development skills.
- **Client-Side Form Validation**: Real-time Regex email checks, field requirements, and a live 500-character counter.
- **Scroll Reveal Animations**: Native `IntersectionObserver` scroll animations (`.reveal`, `.reveal-left`, `.reveal-right`, `.reveal-scale`).
- **Top Scroll Progress Bar & Floating Back to Top Button**.
- **SEO & Accessibility**: Open Graph metadata, Twitter Cards, JSON-LD Person Structured Data, and `prefers-reduced-motion` support.

---

## 📁 Project Directory Structure

```
anand-portfolio/
│
├── index.html                  # Main Portfolio Single Page Application
├── 404.html                    # Custom 404 Error Page
├── README.md                   # Project Documentation
│
├── css/
│   └── style.css               # Design System, CSS Custom Properties, Theme Modes
│
├── js/
│   ├── data.js                 # Data Layer (skillsData & projectsData Arrays)
│   ├── main.js                 # App Core (Theme Toggle, Scroll Progress, Back to Top, Typing Effect)
│   ├── projects.js             # Project Card Rendering, Filtering & Modal Populator
│   ├── animation.js            # Native IntersectionObserver Scroll Reveal & Active Nav Observer
│   └── contact.js              # Frontend Form Validation & Live Character Counter Engine
│
└── assets/
    ├── images/
    │   ├── profile/            # Profile images & graphics
    │   ├── projects/           # Project screenshots
    │   └── favicon.svg         # Developer SVG Favicon
    │
    └── Anand-Kumar-Resume.pdf  # Resume PDF placeholder
```

---

## 💻 Running Locally

This is a pure static frontend web application. No Node.js build step or database installation is required.

### Option 1: Direct File Opening
1. Double-click or open `index.html` directly in any modern web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Local Server (XAMPP / VS Code Live Server)
1. Place the `anand-portfolio` directory in your web server root (e.g., `c:\xampp\htdocs\anand-portFolio`).
2. Start Apache via XAMPP Control Panel.
3. Open your browser and navigate to `http://localhost/anand-portFolio/`.
