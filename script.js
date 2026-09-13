
// MENU MOBILE

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {

    menuBtn.addEventListener("click", function () {

        const aberto = menu.classList.toggle("aberto");

        menuBtn.setAttribute(
            "aria-label",
            aberto ? "Fechar menu" : "Abrir menu"
        );

        menuBtn.textContent = aberto ? "✕" : "☰";

    });

    menu.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {
            menu.classList.remove("aberto");
            menuBtn.textContent = "☰";
            menuBtn.setAttribute("aria-label", "Abrir menu");
        });

    });

}

// ANO AUTOMÁTICO

const ano = document.getElementById("ano");

if (ano) {
    ano.textContent = new Date().getFullYear();
}