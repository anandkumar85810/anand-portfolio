/**
 * DATA.JS - ANAND KUMAR PORTFOLIO
 * Structured Data Store for Technical Skills & Verified Projects
 * Specialization: Java Spring Boot Backend Developer
 */

// 1. Technical Skills Data Array of Objects
const skillsData = [
    // --- Backend & Architecture ---
    { name: "Java", category: "Backend", icon: "bi bi-cup-hot-fill", color: "text-danger", level: "Core & Advanced" },
    { name: "Spring Boot", category: "Backend", icon: "bi bi-flower1", color: "text-success", level: "REST & MVC" },
    { name: "REST APIs", category: "Backend", icon: "bi bi-gear-wide-connected", color: "text-info", level: "API Architecture" },
    { name: "Hibernate / JPA", category: "Backend", icon: "bi bi-box-seam-fill", color: "text-primary", level: "ORM & Persistence" },
    { name: "Spring Security & JWT", category: "Backend", icon: "bi bi-shield-lock-fill", color: "text-warning", level: "Auth & Security" },
    { name: "PHP", category: "Backend", icon: "bi bi-filetype-php", color: "text-primary", level: "Backend Web" },
    { name: "Laravel", category: "Backend", icon: "bi bi-layers-fill", color: "text-danger", level: "MVC Framework" },

    // --- Databases & Caching ---
    { name: "MySQL", category: "Database", icon: "bi bi-database-fill", color: "text-warning", level: "Relational DB" },
    { name: "Redis", category: "Database", icon: "bi bi-lightning-charge-fill", color: "text-danger", level: "Caching & Sessions" },

    // --- Tools & DevOps ---
    { name: "Git", category: "Tools & API", icon: "bi bi-git", color: "text-danger", level: "Version Control" },
    { name: "GitHub", category: "Tools & API", icon: "bi bi-github", color: "text-light", level: "Collaboration" },
    { name: "Maven", category: "Tools & API", icon: "bi bi-feather", color: "text-danger", level: "Build Tool" },
    { name: "Postman", category: "Tools & API", icon: "bi bi-send-fill", color: "text-warning", level: "API Testing" },
    { name: "Docker", category: "Tools & API", icon: "bi bi-boxes", color: "text-info", level: "Containers" },
    { name: "CI / CD", category: "Tools & API", icon: "bi bi-arrow-repeat", color: "text-secondary", level: "Learning / In Progress" },

    // --- Frontend & UI ---
    { name: "HTML5", category: "Frontend", icon: "bi bi-filetype-html", color: "text-danger", level: "Semantic Markup" },
    { name: "CSS3", category: "Frontend", icon: "bi bi-filetype-css", color: "text-info", level: "Custom Properties & Flexbox" },
    { name: "JavaScript", category: "Frontend", icon: "bi bi-filetype-js", color: "text-warning", level: "ES6+ Vanilla JS" },
    { name: "Bootstrap 5", category: "Frontend", icon: "bi bi-bootstrap-fill", color: "text-primary", level: "Responsive Layouts" }
];

// 2. Featured Projects Data Array of Objects
const projectsData = [
    {
        id: "hirehub",
        title: "HireHub",
        subtitle: "Job Portal & Recruitment Platform",
        category: "Java / Spring Boot",
        description: "A centralized recruitment platform providing role-based APIs for job postings, candidate applications, resume tracking, and workflow management.",
        longDescription: "HireHub is a Java Spring Boot backend application engineered to streamline the hiring and recruitment lifecycle. It implements modular RESTful web endpoints for managing candidate profiles, recruiter postings, application submissions, and hiring pipeline statuses. Key technical highlights include structured relational data modeling in MySQL, data persistence through Spring Data JPA / Hibernate, layered Controller-Service-Repository architecture, and server-side request validation.",
        technologies: ["Java", "Spring Boot", "REST API", "Hibernate/JPA", "MySQL", "Maven", "Postman"],
        image: "assets/images/projects/hirehub-preview.svg",
        github: "https://github.com/anandkumar85810",
        demo: null,
        highlights: [
            "Role-based endpoints for recruiters and job applicants",
            "CRUD operations for jobs, applications, and applicant records",
            "Data validation using Hibernate Validator & custom error responses",
            "Layered architecture (Controller, Service, Repository, DTO)"
        ]
    },
    {
        id: "student-management",
        title: "Student Management System",
        subtitle: "Academic Records & Enrollment REST API",
        category: "Java / Spring Boot",
        description: "Enterprise backend REST API built with Java Spring Boot and MySQL for managing student academic records, course enrollments, and grading.",
        longDescription: "Student Management System is a backend solution developed with Java, Spring Boot, and MySQL. It provides structured RESTful web services to manage student demographics, academic courses, department allocations, and enrollment records. Features comprehensive database transactions, JPA entity relationships (One-to-Many, Many-to-Many), and structured JSON responses thoroughly tested through Postman.",
        technologies: ["Java", "Spring Boot", "MySQL", "Hibernate/JPA", "REST API", "Maven", "Postman"],
        image: "assets/images/projects/student-mgmt-preview.svg",
        github: "https://github.com/anandkumar85810",
        demo: null,
        highlights: [
            "Entity relationships managing students, courses, and department mapping",
            "Spring Data JPA repositories with derived query methods and pagination",
            "Centralized @ControllerAdvice global exception handling",
            "API documentation and verification using Postman test collections"
        ]
    },
    {
        id: "ecommerce-spring",
        title: "Spring Boot E-Commerce System",
        subtitle: "Scalable Catalog, Redis Caching & Docker",
        category: "Java / Spring Boot",
        description: "High-performance backend e-commerce architecture with MySQL relational storage, Redis caching for hot product catalogs, and Docker containerization.",
        longDescription: "A scalable backend system for e-commerce platforms engineered with Java and Spring Boot. It handles product catalog management, category filtering, cart operations, and order placement. Implements Redis caching to drastically reduce database read latency for frequently queried product listings. The service environment is containerized using Docker for consistent local and production deployment.",
        technologies: ["Java", "Spring Boot", "MySQL", "Redis", "Docker", "REST API", "Hibernate/JPA"],
        image: "assets/images/projects/ecommerce-preview.svg",
        github: "https://github.com/anandkumar85810",
        demo: null,
        highlights: [
            "High-speed Redis cache integration for product catalogs and inventory",
            "ACID-compliant MySQL transactional operations for order checkout",
            "Docker container configuration for reproducible microservices setup",
            "Structured DTO mappings with decoupled domain entities"
        ]
    },
    {
        id: "shopora",
        title: "Shopora",
        subtitle: "Jewelry E-Commerce Web Application",
        category: "PHP / Laravel",
        description: "Full-featured online jewelry e-commerce platform with product catalogs, shopping cart, customer authentication, and admin order management.",
        longDescription: "Shopora is an e-commerce web application developed using PHP, Laravel, and MySQL. It features an interactive product showcase with category filtering, customer cart management, user authentication, checkout workflows, and an administrative panel for catalog and order management. Demonstrates real-world full-stack web engineering and database design.",
        technologies: ["PHP", "Laravel", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
        image: "assets/images/projects/shopora-preview.svg",
        github: "https://github.com/anandkumar85810",
        demo: null,
        highlights: [
            "Product catalog with dynamic filtering and image galleries",
            "Shopping cart and session-based checkout processing",
            "Administrative dashboard for inventory and customer orders",
            "Responsive UI built with Bootstrap 5 and vanilla JavaScript"
        ]
    }
];

console.log("data.js loaded:", skillsData.length, "skills &", projectsData.length, "projects.");
