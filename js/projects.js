/**
 * PROJECTS.JS - ANAND KUMAR PORTFOLIO
 * Dynamic Project Card Rendering, Filtering, and Modal Details Engine
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

        const projectCardHTML = `
            <div class="col-12 col-md-6 col-lg-4 reveal">
                <div class="project-card">
                    <div class="project-image-wrapper">
                        <img src="${project.image}" 
                             alt="${escapeHTML(project.title)} Preview" 
                             class="project-image" 
                             loading="lazy" 
                             onerror="this.onerror=null; this.src='https://placehold.co/800x500/1f2937/3b82f6?text=${encodeURIComponent(project.title)}';">
                        <span class="project-category-badge">${escapeHTML(project.category)}</span>
                    </div>

                    <div class="project-body">
                        <h3 class="project-title">${escapeHTML(project.title)}</h3>
                        <p class="project-subtitle">${escapeHTML(project.subtitle)}</p>
                        <p class="project-description">${escapeHTML(project.description)}</p>
                        
                        <div class="project-tech-wrapper">
                            ${techBadgesHTML}
                        </div>

                        <div class="project-actions flex-wrap gap-2">
                            <button type="button" 
                                    class="btn btn-project-action btn-project-outline btn-details-trigger w-100 mb-2" 
                                    data-project-id="${project.id}" 
                                    data-bs-toggle="modal" 
                                    data-bs-target="#projectDetailsModal" 
                                    aria-label="View Details for ${escapeHTML(project.title)}">
                                <i class="bi bi-eye-fill me-1"></i>
                                <span>View Details</span>
                            </button>

                            <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-project-action btn-project-outline" aria-label="View ${escapeHTML(project.title)} Code on GitHub">
                                <i class="bi bi-github"></i>
                                <span>Code</span>
                            </a>
                            <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-project-action btn-project-primary" aria-label="View ${escapeHTML(project.title)} Live Demo">
                                <i class="bi bi-box-arrow-up-right"></i>
                                <span>Demo</span>
                            </a>
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
    // Search array for project object with matching ID using Array.prototype.find()
    const project = projectsData.find(p => p.id === projectId);

    if (!project) return;

    // Safely update modal text elements using textContent
    const titleEl = document.getElementById("modalProjectTitle");
    const categoryEl = document.getElementById("modalProjectCategory");
    const descriptionEl = document.getElementById("modalProjectLongDescription");
    const imageEl = document.getElementById("modalProjectImage");
    const techWrapperEl = document.getElementById("modalProjectTechBadges");
    const githubEl = document.getElementById("modalProjectGithub");
    const demoEl = document.getElementById("modalProjectDemo");

    if (titleEl) titleEl.textContent = project.title;
    if (categoryEl) categoryEl.textContent = project.category;
    if (descriptionEl) descriptionEl.textContent = project.longDescription || project.description;

    if (imageEl) {
        imageEl.src = project.image;
        imageEl.alt = `${project.title} Detailed Screenshot`;
        imageEl.onerror = function () {
            this.onerror = null;
            this.src = `https://placehold.co/800x500/1f2937/3b82f6?text=${encodeURIComponent(project.title)}`;
        };
    }

    if (techWrapperEl && project.technologies) {
        techWrapperEl.innerHTML = "";
        project.technologies.forEach(tech => {
            techWrapperEl.innerHTML += `<span class="project-tech-badge fs-6 me-1 mb-1 d-inline-block">${escapeHTML(tech)}</span>`;
        });
    }

    if (githubEl) githubEl.href = project.github || "#";
    if (demoEl) demoEl.href = project.demo || "#";
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
            return project.category === category || project.technologies.includes(category);
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
