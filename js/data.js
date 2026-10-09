/**
 * DATA.JS - ANAND KUMAR PORTFOLIO
 * Structured Data Store for Technical Skills & Featured Projects
 */

// 1. Technical Skills Data Array of Objects
const skillsData = [
    { name: "PHP", category: "Backend", icon: "bi bi-filetype-php", color: "text-primary" },
    { name: "Laravel", category: "Backend", icon: "bi bi-layers-fill", color: "text-danger" },
    { name: "MySQL", category: "Database", icon: "bi bi-database-fill", color: "text-warning" },
    { name: "Java", category: "Backend", icon: "bi bi-cup-hot-fill", color: "text-danger" },
    { name: "Spring Boot", category: "Backend", icon: "bi bi-cpu-fill", color: "text-success" },
    { name: "HTML5", category: "Frontend", icon: "bi bi-filetype-html", color: "text-danger" },
    { name: "CSS3", category: "Frontend", icon: "bi bi-filetype-css", color: "text-info" },
    { name: "JavaScript", category: "Frontend", icon: "bi bi-filetype-js", color: "text-warning" },
    { name: "Bootstrap", category: "Frontend", icon: "bi bi-bootstrap-fill", color: "text-primary" },
    { name: "REST APIs", category: "Tools & API", icon: "bi bi-gear-wide-connected", color: "text-info" },
    { name: "Hibernate/JPA", category: "Tools & API", icon: "bi bi-box-seam-fill", color: "text-primary" },
    { name: "Git", category: "Tools & API", icon: "bi bi-git", color: "text-danger" },
    { name: "GitHub", category: "Tools & API", icon: "bi bi-github", color: "text-white" },
    { name: "Postman", category: "Tools & API", icon: "bi bi-send-fill", color: "text-warning" }
];

// 2. Featured Projects Data Array of Objects (Phase 8 Extended with Stable String IDs)
const projectsData = [
    {
        id: "shopora",
        title: "Shopora",
        subtitle: "Jewelry E-Commerce Application",
        category: "PHP / Laravel",
        description: "A comprehensive jewelry e-commerce web platform featuring product catalog, shopping cart, authentication, order placement, and admin panel.",
        longDescription: "Shopora is a full-featured online jewelry e-commerce web application engineered with PHP, Laravel framework, and MySQL. It features a responsive product showcase with category filtering, customer cart management, secure user authentication, order processing, and an administrative control panel for managing inventory and customer orders.",
        technologies: ["PHP", "Laravel", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
        github: "#", // Replace with actual GitHub repository URL
        demo: "#"   // Replace with actual Live Demo URL
    },
    {
        id: "hotel-management",
        title: "Hotel Management System",
        subtitle: "Hospitality & Room Booking Web App",
        category: "PHP / Laravel",
        description: "A web hospitality system for hotel room reservations, guest check-in/out tracking, billing calculations, and room status management.",
        longDescription: "Hotel Management System is an automated web application developed to streamline hospitality operations. Built with Laravel and MySQL, it enables administrators to manage room availability, handle guest bookings, calculate billing statements, track room maintenance statuses, and generate operational summaries.",
        technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "JavaScript"],
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        github: "#", // Replace with actual GitHub repository URL
        demo: "#"   // Replace with actual Live Demo URL
    },
    {
        id: "student-management",
        title: "Student Management System",
        subtitle: "Academic Management Platform",
        category: "Java / Spring Boot",
        description: "Full stack enterprise application for managing student academic records, course enrollments, grade reports, and RESTful web services.",
        longDescription: "Student Management System is a robust backend and full-stack application built using Java, Spring Boot, MySQL, and Hibernate/JPA. It provides secure RESTful APIs for managing student demographics, course registrations, grade books, and academic transcripts with modular controller-service-repository architecture.",
        technologies: ["Java", "Spring Boot", "MySQL", "REST API", "Hibernate/JPA"],
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
        github: "#", // Replace with actual GitHub repository URL
        demo: "#"   // Replace with actual Live Demo URL
    }
];

console.log("data.js loaded:", skillsData.length, "skills &", projectsData.length, "projects.");
