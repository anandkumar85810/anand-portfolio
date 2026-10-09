/**
 * CONTACT.JS - ANAND KUMAR PORTFOLIO
 * Dedicated Frontend Form Validation and Live Character Counter Engine
 */

/**
 * Initializes contact form validation and live character counter listeners.
 */
function initContactForm() {
    const contactForm = document.getElementById("contact-form");
    const messageInput = document.getElementById("message");
    const messageCounter = document.getElementById("message-counter");
    const formFeedback = document.getElementById("form-feedback");

    if (!contactForm) return;

    // 1. Live Character Counter Listener for Message Textarea
    if (messageInput && messageCounter) {
        messageInput.addEventListener("input", () => {
            const currentLength = messageInput.value.length;
            const maxLength = 500;

            // Update counter textContent
            messageCounter.textContent = `${currentLength} / ${maxLength} characters`;

            // Change counter text color if approaching or reaching limit
            if (currentLength >= maxLength) {
                messageCounter.classList.add("text-danger");
                messageCounter.classList.remove("text-muted");
            } else if (currentLength < 10) {
                messageCounter.classList.add("text-warning");
                messageCounter.classList.remove("text-danger", "text-muted");
            } else {
                messageCounter.classList.add("text-muted");
                messageCounter.classList.remove("text-danger", "text-warning");
            }
        });
    }

    // 2. Form Submit Event Listener with Frontend Validation
    contactForm.addEventListener("submit", function (event) {
        // Prevent default browser form submission / page refresh
        event.preventDefault();

        // Get Input Element References
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const subjectInput = document.getElementById("subject");

        // Extract and trim whitespace from input values
        const nameVal = nameInput ? nameInput.value.trim() : "";
        const emailVal = emailInput ? emailInput.value.trim() : "";
        const subjectVal = subjectInput ? subjectInput.value.trim() : "";
        const messageVal = messageInput ? messageInput.value.trim() : "";

        // Email Regular Expression Pattern
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let isValid = true;

        // --- Validate Name Field (Required, min 2 chars) ---
        if (nameVal.length < 2) {
            setInvalid(nameInput, "Please enter your name (at least 2 characters).");
            isValid = false;
        } else {
            setValid(nameInput);
        }

        // --- Validate Email Field (Required, valid email format) ---
        if (!emailVal || !emailRegex.test(emailVal)) {
            setInvalid(emailInput, "Please enter a valid email address (e.g., name@example.com).");
            isValid = false;
        } else {
            setValid(emailInput);
        }

        // --- Validate Subject Field (Required, min 3 chars) ---
        if (subjectVal.length < 3) {
            setInvalid(subjectInput, "Please enter a subject (at least 3 characters).");
            isValid = false;
        } else {
            setValid(subjectInput);
        }

        // --- Validate Message Field (Required, min 10 chars) ---
        if (messageVal.length < 10) {
            setInvalid(messageInput, "Message must be at least 10 characters long.");
            isValid = false;
        } else {
            setValid(messageInput);
        }

        // If any field failed validation, stop submission
        if (!isValid) {
            if (formFeedback) {
                formFeedback.innerHTML = `
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <i class="bi bi-exclamation-triangle-fill me-2"></i>
                        Please correct the highlighted errors above before submitting.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                `;
            }
            return;
        }

        // --- SUCCESS CASE ---
        if (formFeedback) {
            formFeedback.innerHTML = `
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <i class="bi bi-check-circle-fill me-2"></i>
                    <strong>Thank you!</strong> Your message has been validated successfully. 
                    <small class="d-block mt-1 text-success-emphasis">(Note: Form validated successfully. Backend email sending is not connected yet.)</small>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            `;
        }

        // Reset form inputs and remove Bootstrap validation classes
        contactForm.reset();
        [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
            if (input) {
                input.classList.remove("is-valid", "is-invalid");
            }
        });

        // Reset character counter
        if (messageCounter) {
            messageCounter.textContent = "0 / 500 characters";
            messageCounter.className = "text-end small text-muted mt-1";
        }
    });
}

/**
 * Helper function to mark an input element as INVALID with Bootstrap classes.
 */
function setInvalid(inputElement, errorMessage) {
    if (!inputElement) return;
    inputElement.classList.add("is-invalid");
    inputElement.classList.remove("is-valid");

    // Find or create .invalid-feedback container next to the input
    let feedbackDiv = inputElement.nextElementSibling;
    if (!feedbackDiv || !feedbackDiv.classList.contains("invalid-feedback")) {
        // If the immediate sibling is the character counter, look for feedbackDiv
        const parent = inputElement.parentElement;
        feedbackDiv = parent.querySelector(".invalid-feedback");
    }
    if (feedbackDiv) {
        feedbackDiv.textContent = errorMessage;
    }
}

/**
 * Helper function to mark an input element as VALID with Bootstrap classes.
 */
function setValid(inputElement) {
    if (!inputElement) return;
    inputElement.classList.add("is-valid");
    inputElement.classList.remove("is-invalid");
}
