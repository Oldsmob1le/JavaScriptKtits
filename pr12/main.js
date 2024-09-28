"use strict";

document.querySelector('.faq').addEventListener('click', function (event) {
    let target = event.target.closest('.faq_item');
    if (!target) return;
    target.classList.toggle('active');
    let p = target.querySelector('p');
    if (target.classList.contains('active')) {
        p.style.height = p.scrollHeight + 'px';
    } else {
        p.style.height = '';
    }
});
