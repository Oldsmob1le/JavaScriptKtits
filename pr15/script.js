'use strict';

let colorBox = document.getElementById('colorBox');
let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');

let colorInterval;

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function startColorChange() {
    colorInterval = setInterval(() => {
        colorBox.style.backgroundColor = getRandomColor();
    }, 500);
}

function stopColorChange() {
    clearInterval(colorInterval);
}

startBtn.addEventListener('click', startColorChange);
stopBtn.addEventListener('click', stopColorChange);
