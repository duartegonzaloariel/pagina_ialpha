document.querySelector('.menu-btn').addEventListener('click',() =>{
    document.querySelector('.nav-menu').classList.toggle('show');
});
document.querySelector('.menu-btn2').addEventListener('click',() =>{
    document.querySelector('.nav-menu2').classList.toggle('show2');
});
ScrollReveal().reveal('.nav-main',{delay:200});
ScrollReveal().reveal('.showcase',{delay:300});
ScrollReveal().reveal('.nav-main2',{delay:400});
ScrollReveal().reveal('.baner-one',{delay:600});
ScrollReveal().reveal('.news-card',{delay:300});
ScrollReveal().reveal('.social',{delay:400});
ScrollReveal().reveal('.footer-links',{delay:500});