"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const phoneBtn = document.querySelector(".phone");
    const saleSection = document.querySelector(".sale");

    if (phoneBtn && saleSection) {
        const observerOptions = {
            root: null,
            threshold: 0.5 
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    phoneBtn.classList.add("show");
                } else {
                    phoneBtn.classList.remove("show");
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        observer.observe(saleSection);
    }
});
