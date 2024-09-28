"use strict"

//Задание 1
let btnOne = document.getElementById('btnOne');
btnOne.addEventListener('click', function () {
    btnOne.style.background = '#e3e3e3';
})


let btnTwo = document.getElementById('btnTwo');
btnTwo.addEventListener('mouseenter', function () {
    btnTwo.style.background = '#e3e3e3';
})

btnTwo.addEventListener('mouseleave', function () {
    btnTwo.style.background = 'transparent';
})


let btnTree = document.getElementById('btnTree');
btnTree.addEventListener('mouseleave', function () {
    btnTree.style.background = '#e3e3e3';
})

btnTree.addEventListener('mouseenter', function () {
    btnTree.style.background = 'transparent';
})


//Задание 2
let btnColor = document.getElementById('btnColor');
btnColor.addEventListener('keydown', function (event) {
    if (event.key.toLowerCase() === 'r') {
        btnColor.style.background = '#e85e5e';
    } else if (event.key.toLowerCase() === 'b') {
        btnColor.style.background = '#6480f0';
    } else if (event.key.toLowerCase() === 'g') {
        btnColor.style.background = '#91e680';
    }
})

btnColor.addEventListener('keyup', function (event) {
    btnColor.style.background = 'transparent';
})

//Задание 3
let square = document.getElementById('square');
let position = {
    x: 50,
    y: 50
};

function moveSquare() {
    square.style.left = position.x + 'vw';
    square.style.top = position.y + 'vh';
}

window.addEventListener('keydown', function (event) {
    switch (event.key.toLowerCase()) {
        case 'w':
            position.y -= 0.1;
            break;
        case 's':
            position.y += 0.1;
            break;
        case 'a':
            position.x -= 0.1;
            break;
        case 'd':
            position.x += 0.1;
            break;
    }
    moveSquare();
});