// dropdown event
document.addEventListener('DOMContentLoaded', function () {

    window.addEventListener('load', setHeaderHeightVar);
    window.addEventListener('resize', setHeaderHeightVar);

    const logo = document.querySelector('.logo-wrapper');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    logo.addEventListener('click', () => {
        if(getWidth() <= 768) {
            dropdownMenu.classList.toggle('show');
            logo.classList.toggle('show');
        }
    })

    dropdownMenu.addEventListener('click', () => {
        if(getWidth() <= 768) {
            dropdownMenu.classList.toggle('show');
            logo.classList.toggle('show');
        }
    })
})

function getWidth() {
    return window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
}

function setHeaderHeightVar() {
    const header = document.querySelector('header');
    document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
}

// navigation bar change on scroll
const navigationBar = document.querySelector('.nav-bar-wrapper');
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
navigationBar.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
    navigationBar.classList.toggle('sticking', !entries[0].isIntersecting)
})

navObserver.observe(scrollWatcher);

// carousel

const slides = document.querySelector('.slides');
const total = document.querySelectorAll('.slide').length;
const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');

let current = 0;

function update() {
    slides.style.transform = `translateX(-${current * 100}%)`;
}

btnNext.addEventListener('click', () => {
    current = (current + 1) % total;
    update();
});

btnPrev.addEventListener('click', () => {
    current = (current - 1 + total) % total;
    update();
});