import $ from "../core.js";

$.prototype.menu = function() {
    let menuToggle = document.querySelector('.menuToggle');
    let header = document.querySelector('header');
    menuToggle.onclick = function() {
        header.classList.toggle('active');
    }
}

$('.menuToggle').menu();