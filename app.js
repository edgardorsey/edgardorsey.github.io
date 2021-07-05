const menuContainer = document.querySelector('.menuContainer');
const menuAnimated = document.querySelector('.menuAnimated');
const closeMenu = document.querySelector('.closeMenu');
const bars = document.querySelector('.fa-bars');
const mainMenu = document.querySelector('.mainMenu');
const socialMedia = document.querySelector('.socialMedia');
let menuOpen = false;
let blackBars = false;

menuContainer.addEventListener('click', () => {
    if(!menuOpen) {
        menuAnimated.classList.add('open');
        bars.classList.add('black');
        menuOpen = true;
    }
})

closeMenu.addEventListener('click', () => {
    if(menuOpen) {
        menuAnimated.classList.remove('open');
        bars.classList.remove('black');
        menuOpen = false;
    }
})

mainMenu.addEventListener('click', () => {
    if(menuOpen) {
        menuAnimated.classList.remove('open');
        bars.classList.remove('black');
        menuOpen = false;
    }
})

socialMedia.addEventListener('click', () => {
    if(menuOpen) {
        menuAnimated.classList.remove('open');
        bars.classList.remove('black');
        menuOpen = false;
    }
})

// const header = document.querySelector('header')
// const sectionOne = document.querySelector('.home-intro')

// const sectionOneOptions = {
//     rootMargin: '-140px 0px 0px 0px'
// }

// const sectionOneObserver = new IntersectionObserver(
//     function (entries, sectionOneObserver) {
//         entries.forEach(entry => {
//             if (!entry.isIntersecting) {
//                 header.classList.add('nav-scrolled')
//             } else {
//                 header.classList.remove('nav-scrolled')
//             }
//         })
//     }, sectionOneOptions
// );

// sectionOneObserver.observe(sectionOne)








