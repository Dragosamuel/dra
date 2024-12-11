// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Handle form submission on the Contact Page
    const contactForm = document.querySelector("form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent the default form submission

            // Collect form data
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            // Validate the form
            if (!name || !email || !subject || !message) {
                alert("Please fill out all fields.");
                return;
            }

            // Display a success message (simulation of sending the message)
            alert(`Thank you, ${name}! Your message has been sent.`);
            contactForm.reset(); // Clear the form
        });
    }

    // Add smooth scrolling for anchor links (if needed)
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");
            if (targetId.startsWith("#")) {
                event.preventDefault();
                document.querySelector(targetId).scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Gallery page image hover effect (optional additional interaction)
    const images = document.querySelectorAll("img");
    images.forEach(img => {
        img.addEventListener("mouseover", function () {
            img.style.transform = "scale(1.1)";
        });
        img.addEventListener("mouseout", function () {
            img.style.transform = "scale(1)";
        });
    });
});
