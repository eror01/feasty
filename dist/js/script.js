const header = document.querySelector('.header');
const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', () =>{
    header.classList.toggle('change');
});