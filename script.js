// script.js

document.addEventListener("DOMContentLoaded", function () {
    console.log("Benvenuto nel portfolio di Aurora Cappai!");

    // Esempio: evidenzia la sezione attiva al click nel menu
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function () {
            links.forEach(l => l.classList.remove("attivo"));
            this.classList.add("attivo");
        });
    });
});

