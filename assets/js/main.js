/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navMenuButton = document.getElementById('nav-menu-button');
const navClose = document.getElementById('nav-close');

// console.log(navMenu, navMenuButton, navClose);

if(navMenuButton){
    navMenuButton.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu');
    })
}

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav_link');

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    console.log(navMenu);
    navMenu.classList.remove('show-menu');
}

navLink.forEach((link)=>{
    link.addEventListener('click', linkAction)
})

/*=============== ADD BLUR TO HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header');
    this.scrollY>50 ? header.classList.add('scroll_header') : header.classList.remove('scroll_header');
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
