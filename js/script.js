document.addEventListener("DOMContentLoaded", function () {
    // Contact Form Submission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        let name = document.getElementById('name').value.trim();
        let email = document.getElementById('email').value.trim();
        let message = document.getElementById('message').value.trim();
        let responseMessage = document.getElementById('response-message');

        if (name === "" || email === "" || message === "") {
            responseMessage.textContent = "Please fill in all fields.";
            responseMessage.style.color = "#f00";
            return;
        }

        responseMessage.textContent = "Thank you for your message! I'll get back to you soon.";
        responseMessage.style.color = "#0f0";
        document.getElementById('contact-form').reset();
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLink = document.querySelectorAll(".nav-link");

    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }

    hamburger.addEventListener("click", mobileMenu);
    navLink.forEach((n) => n.addEventListener("click", closeMenu));

    // Theme Switcher
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
        }
    }

    toggleSwitch.addEventListener("change", switchTheme, false);

    // Load Saved Theme
    const currentTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : null;
    if (currentTheme) {
        document.documentElement.setAttribute("data-theme", currentTheme);
        if (currentTheme === "dark") {
            toggleSwitch.checked = true;
        }
    }

    // Count Up Animation
    function countUp() {
        const counters = document.querySelectorAll(".count");
        const speed = 200; 

        counters.forEach((counter) => {
            const updateCount = () => {
                const target = +counter.getAttribute("data-target");
                const count = +counter.innerText;
                const inc = target / speed;
                
                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    }

    // Intersection Observer for Count Up
    const techStatsSection = document.querySelector("#tech-stats");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                countUp();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 1 });

    observer.observe(techStatsSection);

    // Add Current Year
    let myDate = document.querySelector("#datee");
    myDate.innerHTML = new Date().getFullYear();
});
