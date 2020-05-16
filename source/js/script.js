"use strict";

var mainNavButton = document.querySelector(".main-nav__toggle");
var mainNavItems = document.querySelectorAll(".site-menu__item");
var addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
var addToCartModal = document.querySelector(".modal");
var overlay =  document.querySelector(".overlay");

mainNavButton.classList.toggle("main-nav__toggle--open");
mainNavButton.classList.toggle("main-nav__toggle--close");

mainNavItems[1].classList.toggle("site-menu__item--shown");
mainNavItems[1].classList.toggle("site-menu__item--hidden");

mainNavItems[2].classList.toggle("site-menu__item--shown");
mainNavItems[2].classList.toggle("site-menu__item--hidden");

mainNavItems[3].classList.toggle("site-menu__item--shown");
mainNavItems[3].classList.toggle("site-menu__item--hidden");

mainNavItems[4].classList.toggle("site-menu__item--shown");
mainNavItems[4].classList.toggle("site-menu__item--hidden");

mainNavButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  mainNavButton.classList.toggle("main-nav__toggle--open");
  mainNavButton.classList.toggle("main-nav__toggle--close");

  mainNavItems[1].classList.toggle("site-menu__item--shown");
  mainNavItems[1].classList.toggle("site-menu__item--hidden");

  mainNavItems[2].classList.toggle("site-menu__item--shown");
  mainNavItems[2].classList.toggle("site-menu__item--hidden");

  mainNavItems[3].classList.toggle("site-menu__item--shown");
  mainNavItems[3].classList.toggle("site-menu__item--hidden");

  mainNavItems[4].classList.toggle("site-menu__item--shown");
  mainNavItems[4].classList.toggle("site-menu__item--hidden");
});

for (var addToCartButton of addToCartButtons) {
  addToCartButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    overlay.classList.remove("overlay--hidden");
    overlay.classList.add("overlay--shown");
    addToCartModal.classList.remove("modal--hidden");
    addToCartModal.classList.add("modal--shown");
  });
}

overlay.addEventListener("click", function(evt) {
    evt.preventDefault();
    overlay.classList.remove("overlay--shown");
    overlay.classList.add("overlay--hidden");
    addToCartModal.classList.remove("modal--shown");
    addToCartModal.classList.add("modal--hidden");
});
