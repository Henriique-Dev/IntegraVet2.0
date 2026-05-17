const btnMobile = document.getElementById('btn-mobile');
const nav = document.getElementById('nav');
const menu = document.getElementById('menu');

function toggleMenu() {
    nav.classList.toggle('active');
}

// Fecha o menu ao clicar em um link
const links = document.querySelectorAll('#menu a');
links.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', (event) => {
    const isClickInsideNav = nav.contains(event.target);
    const isClickOnButton = btnMobile.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnButton && nav.classList.contains('active')) {
        nav.classList.remove('active');
    }
});

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
