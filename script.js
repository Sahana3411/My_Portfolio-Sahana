// Active Link Toggle on Scroll
window.addEventListener('scroll', () => {
    let current = "";
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    document.querySelectorAll(".nav-links a").forEach((a) => {
        a.classList.remove("active");
        if (a.getAttribute("href").includes(current)) {
            a.style.color = "#6366f1";
        } else {
            a.style.color = "#334155";
        }
    });
});

// Advanced Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert("Please ensure all required fields are complete.");
        return;
    }

    // Dynamic Button Interaction
    const btn = this.querySelector('.submit-btn');
    btn.innerHTML = 'Sending Inquiry...';
    btn.style.opacity = '0.7';

    setTimeout(() => {
        alert(`Thank you, Sahana! Your message has been sent successfully.`);
        btn.innerHTML = 'Send Inquiry <i class="fas fa-paper-plane"></i>';
        btn.style.opacity = '1';
        this.reset();
    }, 1500);
});