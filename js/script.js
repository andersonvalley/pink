var container = document.querySelector('.header__container');
var button = document.querySelector('.burger-button');
var link = document.querySelector('.top-menu__nav-link');

button.addEventListener("click", function () {
   container.classList.toggle('header__container-active');
});

link.addEventListener("click", function (e) {
   e.preventDefault;
   console.log('h');
})