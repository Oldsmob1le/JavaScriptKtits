"use strict"

let navElems = document.querySelectorAll('.nav_elem');

navElems.forEach(navElem => {
    let subnav = navElem.querySelector('.subnav');
    let btn = navElem.querySelector('.nav_btn');

    navElem.addEventListener('mouseenter', function(){
        subnav.classList.add('active');
        btn.classList.add('active');
    } )

    navElem.addEventListener('mouseleave', function(){
        subnav.classList.remove('active');
        btn.classList.remove('active');
    } )
})