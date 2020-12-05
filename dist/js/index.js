/*! challenge-insure-landing-page-master v0.0.1 | (c) 2020 Nicole | MIT License | https://github.com/nicoleortizga/ */
const navToggle = document.querySelector('.cmp-nav-toggle');
const navList = document.querySelector('.cmp-nav-list');

navToggle.onclick = function () {
    navToggle.classList.toggle('active');
    navList.classList.toggle('list-expand');

    document.body.classList.toggle('scroll-hidden');
};