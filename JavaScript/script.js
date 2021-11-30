const menu = document.getElementById('menu');
const button = document.getElementById('dropBtn');
const nav = document.getElementById('dropNav');
const main = document.getElementById('main');
const navbar = document.getElementById('navbar');
let execute1 = false;

$('#menu').click(() => {
    console.log(!menu.classList.contains('dropBlock'))
    if (!menu.classList.contains('dropBlock')) {
        menu.classList.add('dropBlock');
    } else {
        menu.classList.remove('dropBlock');
    }
});

$('#about', '#works', '#contact').click(() => {
    menu.classList.remove('dropBlock');
});

window.onclick = e => {
    if (!e.target.matches('.bi') || menu.classList.contains('dropBlock') && execute) {
        menu.classList.remove('dropBlock');
        execute1 = false;
    } else if (e.target.matches('#dropBtn') || e.target.matches('.bi') || e.target.matches('#menu')) {
        console.log(e.target.matches('#dropBtn'))
        menu.classList.add('dropBlock');
        execute1 = true;
    }
}