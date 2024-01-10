let menu = document.querySelector('#menu_mobile');
let bg_menu = document.querySelector('#bg_menu');

function openMenu() {
    menu.classList.toggle('menu_hiddem')
    bg_menu.classList.toggle('menu_hiddem')
    document.querySelector('#body').classList.toggle('static')
}
