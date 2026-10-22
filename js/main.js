/**
 * MAIN.JS - ANAND KUMAR PORTFOLIO
 * Vanilla JavaScript Core Engine:
 * - Theme Toggle (Dark/Light Mode with localStorage)
 * - Scroll Progress Indicator
 * - Floating Back to Top Button
 * - Typing Animation (Backend & Spring Boot Focus)
 * - Navbar Behavior & Dynamic Footer Year
 * - Skills & Projects Initialization
 * - Contact Form Validation Initialization
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Dark / Light Mode Theme Engine
    initThemeToggle();

    // 2. Initialize Top Scroll Progress Bar
    initScrollProgress();

    // 3. Initialize Floating Back to Top Button
    initBackToTop();

    // 4. Initialize Dynamic Year in Footer
    initFooterYear();

    // 5. Initialize Vanilla JS Typing Animation
    initTypingAnimation();

    // 6. Mobile Navbar Auto-Collapse on Link Click
    initMobileNavbarAutoClose();

    // 7. Initialize Dynamic Skills Section
    if (typeof initSkillsSection === "function") {
        initSkillsSection();
    }

    // 8. Initialize Dynamic Projects Section
    if (typeof initProjectsSection === "function") {
        initProjectsSection();
    }

    // 9. Initialize Contact Form Validation
    if (typeof initContactForm === "function") {
        initContactForm();
    }

    // 10. Initialize IntersectionObserver Scroll Reveal Animations
    if (typeof initScrollAnimations === "function") {
        initScrollAnimations();
    }
});

/* ==========================================================================
   1. DARK / LIGHT THEME TOGGLE ENGINE
   ========================================================================== */

/**
 * Handles Dark / Light mode toggling and persists choice in localStorage.
 */
function initThemeToggle() {
    const themeToggleBtn = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    // 1. Read stored preference from localStorage or default to "dark"
    const savedTheme = localStorage.getItem("theme") || "dark";

    // 2. Apply theme to HTML documentElement and Bootstrap data attribute
    applyTheme(savedTheme);

    if (!themeToggleBtn) return;

    // 3. Toggle theme on button click
    themeToggleBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
        const newTheme = currentTheme === "dark" ? "light" : "dark";

        // Save new choice in localStorage
        localStorage.setItem("theme", newTheme);

        // Apply updated theme
        applyTheme(newTheme);
    });
}

/**
 * Helper function to apply theme data-attribute and update button icon.
 * @param {String} theme - "dark" or "light"
 */
function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-bs-theme", theme);

    const themeIcon = document.getElementById("theme-icon");
    if (themeIcon) {
        if (theme === "light") {
            themeIcon.className = "bi bi-sun-fill text-warning";
        } else {
            themeIcon.className = "bi bi-moon-stars-fill text-success";
        }
    }
}

/* ==========================================================================
   2. TOP SCROLL PROGRESS BAR INDICATOR
   ========================================================================== */

/**
 * Calculates and updates the top scroll progress bar width.
 */
function initScrollProgress() {
    const progressBar = document.getElementById("scroll-progress");
    if (!progressBar) return;

    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = totalHeight > 0 ? (scrollTop / totalHeight) * 100 : 0;
        progressBar.style.width = `${scrollPercentage}%`;
    });
}

/* ==========================================================================
   3. FLOATING BACK TO TOP BUTTON
   ========================================================================== */

/**
 * Manages floating Back to Top button visibility and smooth scroll action.
 */
function initBackToTop() {
    const backToTopBtn = document.getElementById("back-to-top");
    if (!backToTopBtn) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }
    });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

/* ==========================================================================
   4. GENERAL UI & UTILITIES
   ========================================================================== */

function initFooterYear() {
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

function initTypingAnimation() {
    const typingElement = document.getElementById("typing-text");
    if (!typingElement) return;

    const roles = [
        "Java Spring Boot Developer",
        "Backend REST API Engineer",
        "Microservices & Database Specialist",
        "Full Stack Developer"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typingSpeed = 90;
    const deletingSpeed = 45;
    const pauseBeforeDelete = 2000;
    const pauseBeforeNextWord = 450;

    function typeEffect() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let delay = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && charIndex === currentRole.length) {
            delay = pauseBeforeDelete;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            delay = pauseBeforeNextWord;
        }

        setTimeout(typeEffect, delay);
    }

    typeEffect();
}

function initMobileNavbarAutoClose() {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navbarCollapse = document.getElementById("navbarContent");

    if (navbarCollapse && navLinks) {
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                if (navbarCollapse.classList.contains("show")) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            });
        });
    }
}

/* ==========================================================================
   5. DYNAMIC SKILLS RENDERING & FILTERING ENGINE
   ========================================================================== */

function initSkillsSection() {
    const skillsContainer = document.getElementById("skills-container");
    const filterButtons = document.querySelectorAll(".skill-filter-btn");

    if (!skillsContainer) return;

    renderSkills(skillsData);

    filterButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            filterButtons.forEach(btn => {
                btn.classList.remove("active");
                btn.setAttribute("aria-pressed", "false");
            });

            const clickedBtn = event.currentTarget;
            clickedBtn.classList.add("active");
            clickedBtn.setAttribute("aria-pressed", "true");

            const selectedCategory = clickedBtn.getAttribute("data-category");
            filterSkillsByCategory(selectedCategory);
        });
    });
}

function renderSkills(skillsToRender) {
    const skillsContainer = document.getElementById("skills-container");
    if (!skillsContainer) return;

    skillsContainer.innerHTML = "";

    if (!skillsToRender || skillsToRender.length === 0) {
        skillsContainer.innerHTML = `
            <div class="col-12 text-center py-4">
                <p class="text-muted">No skills found in this category.</p>
            </div>
        `;
        return;
    }

    skillsToRender.forEach(skill => {
        const isLearning = skill.level && skill.level.toLowerCase().includes("learning");
        const badgeHTML = skill.level
            ? `<span class="skill-level-badge ${isLearning ? 'learning' : ''}">${escapeHTML(skill.level)}</span>`
            : '';

        const cardHTML = `
            <div class="col-6 col-md-4 col-lg-3 reveal">
                <div class="skill-card">
                    <div class="skill-card-icon ${skill.color}">
                        <i class="${skill.icon}"></i>
                    </div>
                    <h3 class="skill-card-title">${escapeHTML(skill.name)}</h3>
                    <span class="skill-card-category">${escapeHTML(skill.category)}</span>
                    ${badgeHTML}
                </div>
            </div>
        `;
        skillsContainer.innerHTML += cardHTML;
    });

    if (typeof initScrollAnimations === "function") {
        initScrollAnimations();
    }
}

function filterSkillsByCategory(category) {
    if (category === "All") {
        renderSkills(skillsData);
    } else {
        const filtered = skillsData.filter(skill => {
            return skill.category === category;
        });
        renderSkills(filtered);
    }
}
