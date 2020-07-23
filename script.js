const buttonMenu = document.getElementById('hamburger');
const drawer = document.getElementById('drawer');
const main = document.getElementsByTagName('main')[0];

buttonMenu.addEventListener('click', event => {
    drawer.classList.toggle('open');
    event.stopPropagation();
})

main.addEventListener('click', event => {
    drawer.classList.remove('open');
    event.stopPropagation();
})
