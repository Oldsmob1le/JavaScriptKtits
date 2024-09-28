"use strict";

document.addEventListener('DOMContentLoaded', () => {
    let tabButtons = document.querySelectorAll('.tab-button');
    let tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            tabContents.forEach(content => content.classList.remove('active'));
            tabContents[index].classList.add('active');
        });
    });
});
