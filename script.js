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

        // 3. Mostra/Nasconde bottone "Torna su"
        const backToTop = document.getElementById("back-to-top");
        if (backToTop) {
            backToTop.style.display = window.scrollY > 300 ? "block" : "none";
        }
    });

    // 4. Animazione fade-in per immagini e progetti
    const osservati = document.querySelectorAll("img, .progetto");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    osservati.forEach(el => observer.observe(el));

    // 5. Bottone "Torna su"
    const backToTop = document.createElement("button");
    backToTop.id = "back-to-top";
    backToTop.innerHTML = "↑";
    document.body.appendChild(backToTop);
    backToTop.style.display = "none";
    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // 6. Effetto macchina da scrivere in homepage
    const titolo = document.querySelector("#home h1");
    const testo = "Benvenuto nel mio portfolio";
    let i = 0;
    function scriviTesto() {
        if (i < testo.length) {
            titolo.textContent += testo.charAt(i);
            i++;
            setTimeout(scriviTesto, 80);
        }
    }
    titolo.textContent = "";
    scriviTesto();

    // 7. Lightbox semplice per immagini portfolio
    const immagini = document.querySelectorAll("#portfolio img");
    const overlay = document.createElement("div");
    overlay.id = "lightbox-overlay";
    overlay.style.display = "none";
    const lightboxImg = document.createElement("img");
    overlay.appendChild(lightboxImg);
    document.body.appendChild(overlay);

    immagini.forEach(img => {
        img.style.cursor = "zoom-in";
        img.addEventListener("click", () => {
            lightboxImg.src = img.src;
            overlay.style.display = "flex";
        });
    });

    overlay.addEventListener("click", () => {
        overlay.style.display = "none";
    });
});


