# Anand Kumar - Java Spring Boot Backend Developer Portfolio

A modern, high-performance, accessible, and recruiter-friendly personal portfolio for **Anand Kumar** (**Java Spring Boot Backend Developer**). Engineered with clean HTML5, CSS3 Custom Properties, Vanilla JavaScript (ES6+), Bootstrap 5.3.3, and Bootstrap Icons. Fully static and compatible with **GitHub Pages**.

🔗 **Live Deployment:** [https://anandkumar85810.github.io/anand-portfolio/](https://anandkumar85810.github.io/anand-portfolio/)

---

## 🎨 Design Palette & System

- **Background:** Deep green/navy obsidian (`#071713`) with subtle forest depth (`#0B1E19`)
- **Card Surfaces:** Rich tech dark green (`#10251F`) with hover elevations (`#16362D`)
- **Brand Accents:** Vibrant Spring Boot Green (`#22C55E`) and Tech API Teal (`#2DD4BF`)
- **Typography:** Google Fonts (*Outfit* for bold geometric headings, *Plus Jakarta Sans* for clean body text, *Fira Code* for syntax-highlighted code blocks)
- **Framework:** Bootstrap 5.3.3 (CSS & JS Bundle) + Bootstrap Icons 1.11.3

---

## ✨ Features & Architecture

- **Backend-First Identity:** Built around Java, Spring Boot, REST APIs, Hibernate/JPA, MySQL, Redis, and Docker.
- **Hero Developer Visual:**
  - High-resolution portrait of Anand Kumar with glowing border accents and a live *"Available for Backend Roles"* pulsing dot badge.
  - Interactive **`DeveloperController.java` Spring Boot REST Controller** code card with syntax highlighting.
  - Dynamic typewriter effect cycling through backend engineering roles.
- **ATS-Friendly Text-Based Resume:**
  - Located at `assets/resume/Anand-Kumar-Resume.pdf`.
  - Simple single-column format, standard headings (`SUMMARY`, `TECHNICAL SKILLS`, `WORK EXPERIENCE`, `PROJECTS`, `EDUCATION`), 100% selectable text, and tailored keywords for Java Spring Boot backend developer roles.
- **Technical Skills Matrix (`data.js`):** Categorized into *Backend*, *Database*, *Tools & API*, and *Frontend*, complete with skill level indicators (*e.g., Core & Advanced, REST & MVC, Learning / In Progress* for CI/CD).
- **Verified Featured Projects:**
  - **HireHub:** Job portal & recruitment management system with role-based REST endpoints.
  - **Student Management System:** Academic records & course enrollment REST API with Hibernate/JPA and MySQL.
  - **Spring Boot E-Commerce System:** Scalable catalog service with Redis caching and Docker containerization.
  - **Shopora:** Jewelry e-commerce web application with PHP, Laravel, and MySQL.
- **Honest Project Link Handling:** No broken `href="#"` jumps. Projects without public deployments display graceful disabled badges (*"Private Repository"* / *"Demo on Request"*).
- **Interactive Project Details Modal:** Bootstrap 5 modal rendering extended technical overviews, architectural highlight checklists, and technology tags.
- **Experience Timeline:** Highlights progression at **Deytal Technologies Pvt. Ltd.** from PHP Intern to Full Stack Developer.
- **Core Engineering Services:** 4 focused backend cards (*RESTful API Architecture*, *Spring Boot Backend Services*, *Database Design & Caching*, *Full-Stack Integration*).
- **Contact Form Validation (`contact.js`):** Client-side regex email validation, field length constraints, and a live 500-character counter.
- **Dark / Light Theme Engine (`main.js`):** Smooth theme switcher with choice persisted across sessions via `localStorage`.
- **Performance & Accessibility:**
  - Native `IntersectionObserver` scroll reveal animations (`.reveal`, `.reveal-left`, `.reveal-right`, `.reveal-scale`).
  - Native active section navbar observer.
  - Full `prefers-reduced-motion` accessibility support.
  - Open Graph and Twitter Card metadata for rich social previews.

---

## 📁 Project Directory Structure

```
anand-portfolio/
│
├── index.html                  # Main Single Page Application (Java Spring Boot theme)
├── 404.html                    # Custom 404 Error Page matching the design system
├── README.md                   # Project Documentation & Deployment Guide
│
├── css/
│   └── style.css               # Design system, CSS variables, deep green/navy theme, animations
│
├── js/
│   ├── data.js                 # Data models (skillsData & projectsData with verified projects)
│   ├── projects.js             # Project card renderer, category filtering & modal populator
│   ├── animation.js            # Native IntersectionObserver scroll reveal & active navbar observer
│   ├── contact.js              # Client-side form validation & live 500-char counter
│   └── main.js                 # Core orchestrator (Theme toggle, typing animation, scroll progress)
│
└── assets/
    ├── images/
    │   ├── profile/
    │   │   └── anand-profile.png       # High-resolution portrait of Anand Kumar
    │   ├── projects/
    │   │   ├── hirehub-preview.svg     # Architecture preview for HireHub
    │   │   ├── student-mgmt-preview.svg# Architecture preview for Student Management
    │   │   ├── ecommerce-preview.svg   # Architecture preview for E-Commerce System
    │   │   └── shopora-preview.svg     # Architecture preview for Shopora
    │   ├── favicon.svg                 # Developer SVG Favicon
    │   └── og-cover.svg                # Open Graph social media banner preview
    │
    └── resume/
        └── Anand-Kumar-Resume.pdf      # Professional ATS-friendly single-column resume PDF
```

---

## 💻 How to Test Locally

This is a static frontend web project that runs in any modern browser without needing build tools or package managers.

### Option 1: Direct Browser Launch
Double-click `index.html` or right-click `index.html` and select **Open with Google Chrome / Microsoft Edge**.

### Option 2: Local XAMPP Server
1. Ensure the project is located inside your XAMPP web root:
   `c:\xampp\htdocs\anand-portFolio`
2. Start Apache from the **XAMPP Control Panel**.
3. Open your browser and navigate to:
   ```
   http://localhost/anand-portFolio/
   ```

### Option 3: VS Code / IDE Live Server
Right-click `index.html` and select **Open with Live Server** (serves on `http://127.0.0.1:5500/`).

---

## 🚀 GitHub Pages Deployment Workflow

*(Note: Run these commands yourself after inspecting your local preview)*

### Step 1: Check Git Status
```bash
git status
```
Inspect what files have been modified or created.

### Step 2: Stage All Changes
```bash
git add .
```

### Step 3: Commit
```bash
git commit -m "Upgrade portfolio to deep green/navy theme and add ATS resume PDF"
```

### Step 4: Push to GitHub
```bash
git push origin main
```

### Step 5: Verify GitHub Pages
1. Go to your repository on GitHub: `https://github.com/anandkumar85810/anand-portfolio`
2. Click **Settings** &rarr; **Pages**.
3. Under **Build and deployment**, ensure **Source** is set to *Deploy from a branch* on `main` / `root`.
4. Your site will be live at:
   **[https://anandkumar85810.github.io/anand-portfolio/](https://anandkumar85810.github.io/anand-portfolio/)**

---

## 📬 Contact & Connect

- **Developer:** Anand Kumar
- **Role:** Java Spring Boot Backend Developer
- **Email:** [anandkoderma85810@gmail.com](mailto:anandkoderma85810@gmail.com)
- **LinkedIn:** [https://www.linkedin.com/in/anand-kumar-52b775331](https://www.linkedin.com/in/anand-kumar-52b775331)
- **GitHub:** [https://github.com/anandkumar85810](https://github.com/anandkumar85810)
