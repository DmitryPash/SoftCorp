const D = document;
const body = D.querySelector('body')


//Toggler menu
let toggler = D.querySelector('.menu-toggler'),
    headerMenu = D.querySelector('.header-menu');
function openMenu() {
    this.classList.toggle('opened')
    headerMenu.classList.toggle('opened-menu');
    body.classList.toggle('overflow-h')
}
toggler.addEventListener('click', openMenu);