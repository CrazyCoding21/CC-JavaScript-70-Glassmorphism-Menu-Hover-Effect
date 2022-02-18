const hoverBlock = document.getElementById('hover-block');
const item = document.querySelectorAll('.main-menu__item a');

function indicator(e){
    hoverBlock.style.left = e.offsetLeft+'px';
    hoverBlock.style.width = e.offsetWidth+'px';
}
item.forEach(link => {
    link.addEventListener('mousemove', (e) => {
        indicator(e.target);
    });
});