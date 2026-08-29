document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(
        ".content-card, .facility-card, .environment-card, .photo-card"
    );

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.style.animation =
                    "fadeUp 0.8s ease forwards";
            }

        });

    }, {
        threshold: 0.15
    });

    cards.forEach(function (card) {
        card.style.opacity = "0";
        observer.observe(card);
    });

});