
let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
    overlay.style.display = 'block'; // Exibindo o overlay quando o menu é aberto
});

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    overlay.style.display = 'none'; // Ocultando o overlay quando o menu é fechado
});

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    overlay.style.display = 'none'; // Ocultando o overlay quando clicado
});