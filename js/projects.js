/**
 * PROJECTS.JS - ANAND KUMAR PORTFOLIO
 * Dynamic Project Card Rendering, Category Filtering, and Modal Details Engine
 * Specialization: Java Spring Boot Backend Developer
 */

/**
 * Initializes the Projects Section and Modal event handlers on page load.
 */
function initProjectsSection() {
    const projectsContainer = document.getElementById("projects-container");
    const filterButtons = document.querySelectorAll(".project-filter-btn");

    if (!projectsContainer) return;

    // 1. Initial Render: Display ALL projects on initial page load
    renderProjects(projectsData);

    // 2. Attach Click Event Listeners to Category Filter Buttons
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
            filterProjectsByCategory(selectedCategory);
        });
    });

    // 3. Event Delegation for "View Details" Modal Buttons
    projectsContainer.addEventListener("click", (event) => {
        const detailsBtn = event.target.closest(".btn-details-trigger");
        if (detailsBtn) {
            const projectId = detailsBtn.dataset.projectId;
            openProjectDetailsModal(projectId);
        }
    });
}

/**
 * Dynamically renders project cards into the DOM.
 * @param {Array} projectList - List of project objects to be rendered
 */
function renderProjects(projectList) {
    const projectsContainer = document.getElementById("projects-container");
    if (!projectsContainer) return;

    projectsContainer.innerHTML = "";

    if (!projectList || projectList.length === 0) {
        projectsContainer.innerHTML = `
            <div class="col-12 text-center py-5">
                <div class="p-4 rounded-3 border border-secondary-subtle bg-dark-subtle d-inline-block">
                    <i class="bi bi-folder-x fs-1 text-muted d-block mb-2"></i>
                    <p class="text-secondary mb-0">No projects found in this category.</p>
                </div>
            </div>
        `;
        return;
    }

    projectList.forEach(project => {
        let techBadgesHTML = "";
        if (project.technologies && Array.isArray(project.technologies)) {
            project.technologies.forEach(tech => {
                techBadgesHTML += `<span class="project-tech-badge">${escapeHTML(tech)}</span>`;
            });
        }

        // Code action button: real link or disabled state
        const hasGithub = project.github && project.github !== "#";
        const githubBtnHTML = hasGithub
            ? `<a href="${escapeHTML(project.github)}" target="_blank" rel="noopener noreferrer" class="btn btn-project-action btn-project-outline" aria-label="View ${escapeHTML(project.title)} on GitHub">
                    <i class="bi bi-github"></i>
                    <span>Code</span>
               </a>`
            : `<button type="button" class="btn btn-project-action btn-project-disabled" disabled title="Source code is in a private repository" aria-label="Source code is private">
                    <i class="bi bi-lock-fill"></i>
                    <span>Private</span>
               </button>`;

        // Demo action button: real link or unavailable indicator
        const hasDemo = project.demo && project.demo !== "#";
        const demoBtnHTML = hasDemo
            ? `<a href="${escapeHTML(project.demo)}" target="_blank" rel="noopener noreferrer" class="btn btn-project-action btn-project-primary" aria-label="View ${escapeHTML(project.title)} Live Demo">
                    <i class="bi bi-box-arrow-up-right"></i>
                    <span>Demo</span>
               </a>`
            : `<button type="button" class="btn btn-project-action btn-project-disabled" disabled title="Live demo available on request / local environment" aria-label="Demo available on request">
                    <i class="bi bi-clock-history"></i>
                    <span>On Request</span>
               </button>`;

        const projectCardHTML = `
            <div class="col-12 col-md-6 col-lg-6 reveal">
                <div class="project-card">
                    <div class="project-image-wrapper">
                        <img src="${escapeHTML(project.image)}" 
                             alt="${escapeHTML(project.title)} Architecture Preview" 
                             class="project-image" 
                             loading="lazy" 
                             onerror="this.onerror=null; this.src='assets/images/projects/hirehub-preview.svg';">
                        <span class="project-category-badge">${escapeHTML(project.category)}</span>
                    </div>

                    <div class="project-body">
                        <h3 class="project-title">${escapeHTML(project.title)}</h3>
                        <p class="project-subtitle">${escapeHTML(project.subtitle)}</p>
                        <p class="project-description">${escapeHTML(project.description)}</p>
                        
                        <div class="project-tech-wrapper">
                            ${techBadgesHTML}
                        </div>

                        <div class="project-actions flex-wrap gap-2 pt-2">
                            <button type="button" 
                                    class="btn btn-project-action btn-project-outline btn-details-trigger w-100 mb-2" 
                                    data-project-id="${escapeHTML(project.id)}" 
                                    data-bs-toggle="modal" 
                                    data-bs-target="#projectDetailsModal" 
                                    aria-label="View full architectural details for ${escapeHTML(project.title)}">
                                <i class="bi bi-diagram-3-fill me-1"></i>
                                <span>View System Details</span>
                            </button>

                            ${githubBtnHTML}
                            ${demoBtnHTML}
                        </div>
                    </div>
                </div>
            </div>
        `;

        projectsContainer.innerHTML += projectCardHTML;
    });

    if (typeof initScrollAnimations === "function") {
        initScrollAnimations();
    }
}

/**
 * Populates Bootstrap Modal elements with details of the clicked project object.
 * @param {String} projectId - Unique string ID of project
 */
function openProjectDetailsModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    const titleEl = document.getElementById("modalProjectTitle");
    const categoryEl = document.getElementById("modalProjectCategory");
    const descriptionEl = document.getElementById("modalProjectLongDescription");
    const highlightsWrapperEl = document.getElementById("modalProjectHighlights");
    const imageEl = document.getElementById("modalProjectImage");
    const techWrapperEl = document.getElementById("modalProjectTechBadges");
    const githubEl = document.getElementById("modalProjectGithub");
    const demoEl = document.getElementById("modalProjectDemo");

    if (titleEl) titleEl.textContent = project.title;
    if (categoryEl) categoryEl.textContent = project.category;
    if (descriptionEl) descriptionEl.textContent = project.longDescription || project.description;

    if (imageEl) {
        imageEl.src = project.image;
        imageEl.alt = `${project.title} Detailed Architecture Screenshot`;
        imageEl.onerror = function () {
            this.onerror = null;
            this.src = "assets/images/projects/hirehub-preview.svg";
        };
    }

    // Populate Key Architectural Highlights if available
    if (highlightsWrapperEl) {
        if (project.highlights && Array.isArray(project.highlights) && project.highlights.length > 0) {
            let highlightsHTML = `<h4 class="h6 text-white mb-2 font-semibold"><i class="bi bi-check2-circle text-primary me-2"></i>Key Architectural Features</h4><ul class="modal-highlights-list mb-4">`;
            project.highlights.forEach(h => {
                highlightsHTML += `<li>${escapeHTML(h)}</li>`;
            });
            highlightsHTML += `</ul>`;
            highlightsWrapperEl.innerHTML = highlightsHTML;
            highlightsWrapperEl.classList.remove("d-none");
        } else {
            highlightsWrapperEl.innerHTML = "";
            highlightsWrapperEl.classList.add("d-none");
        }
    }

    if (techWrapperEl && project.technologies) {
        techWrapperEl.innerHTML = "";
        project.technologies.forEach(tech => {
            techWrapperEl.innerHTML += `<span class="project-tech-badge fs-6 me-1 mb-1 d-inline-block">${escapeHTML(tech)}</span>`;
        });
    }

    // Modal GitHub Action Button
    if (githubEl) {
        const hasGithub = project.github && project.github !== "#";
        if (hasGithub) {
            githubEl.href = project.github;
            githubEl.classList.remove("disabled");
            githubEl.removeAttribute("aria-disabled");
            githubEl.innerHTML = `<i class="bi bi-github"></i><span>View on GitHub</span>`;
        } else {
            githubEl.removeAttribute("href");
            githubEl.classList.add("disabled");
            githubEl.setAttribute("aria-disabled", "true");
            githubEl.innerHTML = `<i class="bi bi-lock-fill"></i><span>Private Repository</span>`;
        }
    }

    // Modal Demo Action Button
    if (demoEl) {
        const hasDemo = project.demo && project.demo !== "#";
        if (hasDemo) {
            demoEl.href = project.demo;
            demoEl.classList.remove("disabled");
            demoEl.removeAttribute("aria-disabled");
            demoEl.innerHTML = `<i class="bi bi-box-arrow-up-right"></i><span>Live Demo</span>`;
        } else {
            demoEl.removeAttribute("href");
            demoEl.classList.add("disabled");
            demoEl.setAttribute("aria-disabled", "true");
            demoEl.innerHTML = `<i class="bi bi-clock-history"></i><span>Demo on Request</span>`;
        }
    }
}

/**
 * Filters projectsData array based on chosen category.
 * @param {String} category - Selected category string
 */
function filterProjectsByCategory(category) {
    if (category === "All") {
        renderProjects(projectsData);
    } else {
        const filtered = projectsData.filter(project => {
            return project.category.includes(category) || project.technologies.includes(category);
        });
        renderProjects(filtered);
    }
}

/**
 * Simple HTML escape helper to prevent XSS.
 */
function escapeHTML(str) {
    if (!str) return "";
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
