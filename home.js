document.addEventListener("DOMContentLoaded", function () {
    // Alternar menu no mobile
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("ativo");
    });

    // Carrossel de destaques
    let slides = document.querySelectorAll(".slide");
    let index = 0;

    function mostrarSlide(i) {
        slides.forEach(slide => slide.classList.remove("ativo"));
        slides[i].classList.add("ativo");
    }

    document.querySelector(".next").addEventListener("click", function () {
        index = (index + 1) % slides.length;
        mostrarSlide(index);
    });

    document.querySelector(".prev").addEventListener("click", function () {
        index = (index - 1 + slides.length) % slides.length;
        mostrarSlide(index);
    });

    mostrarSlide(index); // Mostrar o primeiro slide
});
