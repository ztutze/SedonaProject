const mainNav = document.querySelector('.main-nav');
const openNav = document.querySelector('.main-nav__open');
const closeNav = document.querySelector('.main-nav__close');

mainNav.classList.remove('main-nav--nojs')
mainNav.classList.add('main-nav--closed')

openNav.addEventListener('click', function() {
    mainNav.classList.toggle('main-nav--closed');
})

closeNav.addEventListener('click', function() {
    mainNav.classList.toggle('main-nav--closed');
})
