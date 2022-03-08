// console.log('js ok');
const hamburgerMenu = document.querySelector('.hamburger-menu');

const menuOpen = document.querySelector('.open');
const menuClose = document.querySelector('.close');


menuOpen.addEventListener('click', function () {
    console.log('menu cliccato');
    hamburgerMenu.style.display = 'block'

   // hamburgerMenu.classList.add('active') alternativa valida

})

menuClose.addEventListener('click', function () {
    console.log('menu ricliccato');
    hamburgerMenu.style.display = 'none'

    // hamburgerMenu.classList.remove('active') alternativa valida

    
})





