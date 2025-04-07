// script.js

document.addEventListener("DOMContentLoaded", function () {
    console.log("🌟 Benvenuto nel portfolio di Aurora Cappai! 🌟");

    // 1. Scroll fluido per i link del menu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // 2. Evidenziazione del link attivo mentre scrolli
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("attivo");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("attivo");
            }
        });
    });

    // 3. Animazione fade-in per immagini e progetti
    const osservati = document.querySelectorAll("img, .progetto");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target); // animazione solo la prima volta
            }
        });
    }, {
        threshold: 0.2
    });

    osservati.forEach(el => observer.observe(el));
});


