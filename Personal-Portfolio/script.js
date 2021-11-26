const menu = document.getElementById('menu');
const button = document.getElementById('dropBtn');
const nav = document.getElementById('dropNav');
const main = document.getElementById('main');
const navbar = document.getElementById('navbar');

$('#dropBtn').click(() => {
    if (!menu.classList.contains('dropBlock')) {
        menu.classList.add('dropBlock');
    } else {
        menu.classList.remove('dropBlock');
    }
});

nav.addEventListener('mouseleave', e => menu.classList.remove('dropBlock'));
main.addEventListener('mouseleave', e => menu.classList.remove('dropBlock'));


