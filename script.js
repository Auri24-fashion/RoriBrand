document.addEventListener("DOMContentLoaded", () => {
    console.log("🌟 Benvenuto nel portfolio di Aurora Cappai! 🌟");

    // ✂️ Scroll fluido tra le sezioni
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            if (target) target.scrollIntoView({ behavior: "smooth" });
        });
    });

    // 🎯 Evidenziazione del link attivo durante lo scroll
    const sezioni = document.querySelectorAll("section");
    const menuLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {
        let sezioneAttiva = "";
        sezioni.forEach(sez => {
            if (scrollY >= sez.offsetTop - 60) {
                sezioneAttiva = sez.id;
            }
        });
        menuLinks.forEach(link => {
            link.classList.toggle("attivo", link.getAttribute("href") === `#${sezioneAttiva}`);
        });

        // ⬆️ Mostra/Nascondi bottone “Torna su”
        const btnTornaSu = document.getElementById("back-to-top");
        if (btnTornaSu) {
            btnTornaSu.style.display = scrollY > 300 ? "block" : "none";
        }
    });

    // 💫 Animazione di comparsa (fade-in)
    const osservati = document.querySelectorAll("img, .progetto");
    const osservatore = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                osservatore.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    osservati.forEach(el => osservatore.observe(el));

    // 🔝 Bottone “Torna su”
    const tornaSu = document.createElement("button");
    tornaSu.id = "back-to-top";
    tornaSu.textContent = "↑";
    tornaSu.style.display = "none";
    document.body.appendChild(tornaSu);
    tornaSu.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    // 🎬 Effetto macchina da scrivere in homepage
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
    if (titolo) {
        titolo.textContent = "";
        scriviTesto();
    }

    // 🖼️ Lightbox per immagini del portfolio
    const overlay = document.createElement("div");
    overlay.id = "lightbox-overlay";
    overlay.style.display = "none";
    const imgZoom = document.createElement("img");
    overlay.appendChild(imgZoom);
    document.body.appendChild(overlay);

    document.querySelectorAll("#portfolio img").forEach(img => {
        img.style.cursor = "zoom-in";
        img.addEventListener("click", () => {
            imgZoom.src = img.src;
            overlay.style.display = "flex";
        });
    });
    overlay.addEventListener("click", () => overlay.style.display = "none");

    // 🎠 Carousel per gallerie
    document.querySelectorAll('.carousel').forEach(carousel => {
        const images = carousel.querySelector('.carousel-images');
        const imgs = images.querySelectorAll('img');
        let index = 0;

        carousel.querySelector('.next')?.addEventListener('click', () => {
            index = (index + 1) % imgs.length;
            images.style.transform = `translateX(-${index * 100}%)`;
        });

        carousel.querySelector('.prev')?.addEventListener('click', () => {
            index = (index - 1 + imgs.length) % imgs.length;
            images.style.transform = `translateX(-${index * 100}%)`;
        });
    });
});


