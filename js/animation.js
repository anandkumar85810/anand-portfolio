/**
 * ANIMATION.JS - ANAND KUMAR PORTFOLIO
 * Viewport Scroll Reveal Engine using Native JavaScript IntersectionObserver API
 * Supports .reveal, .reveal-left, .reveal-right, .reveal-scale and Active Nav Link highlighting.
 */

/**
 * Initializes viewport scroll reveal animations for all elements with reveal classes.
 */
function initScrollAnimations() {
    // 1. Select all HTML elements that have reveal classes
    const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");

    if (revealElements.length === 0) return;

    // 2. Configuration options for the IntersectionObserver
    const observerOptions = {
        root: null,
        rootMargin: "0px 0px -40px 0px",
        threshold: 0.15
    };

    // 3. Callback function executed whenever an observed element enters the viewport
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the CSS class '.active' which triggers the CSS transition
                entry.target.classList.add("active");
                // Stop observing this element once animated
                observer.unobserve(entry.target);
            }
        });
    };

    // 4. Create an IntersectionObserver instance
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // 5. Observe each element
    revealElements.forEach(element => {
        // Only observe if element doesn't already have '.active'
        if (!element.classList.contains("active")) {
            observer.observe(element);
        }
    });

    // 6. Initialize Active Navbar Section Observer
    initActiveNavObserver();
}

/**
 * Highlights the active Navbar link based on which section is currently visible.
 */
function initActiveNavObserver() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    if (sections.length === 0 || navLinks.length === 0) return;

    const navObserverOptions = {
        root: null,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0
    };

    const navObserverCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute("id");

                navLinks.forEach(link => {
                    const href = link.getAttribute("href");
                    if (href === `#${currentId}`) {
                        link.classList.add("active");
                        link.setAttribute("aria-current", "page");
                    } else {
                        link.classList.remove("active");
                        link.removeAttribute("aria-current");
                    }
                });
            }
        });
    };

    const navObserver = new IntersectionObserver(navObserverCallback, navObserverOptions);

    sections.forEach(section => {
        navObserver.observe(section);
    });
}
