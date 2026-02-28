const menuIcon = document.getElementById('menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuIcon.classList.toggle('fa-bars'); 
    menuIcon.classList.toggle('fa-xmark'); 
});