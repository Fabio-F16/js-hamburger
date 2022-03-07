// console.log('js ok');
const hamburgerMenu = document.querySelector('.hamburger-menu');

const menuOpen = document.querySelector('.header-right a i');
const menuClose = document.querySelector('.close');


menuOpen.addEventListener('click', function () {
    console.log('menu cliccato');
    hamburgerMenu.style.display = 'block'

})

menuClose.addEventListener('click', function () {
    console.log('menu ricliccato');
    hamburgerMenu.style.display = 'none'

})





