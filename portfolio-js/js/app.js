//Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('preloader--finished');
    document.querySelector('body').classList.add('popupshow');
    setTimeout(() => {
        preloader.remove();
        document.querySelector('body').classList.remove('popupshow');
    },1000);

});

//nav toggle
const nav = document.querySelector('.nav__button');
const content = document.querySelector('.nav__content');
nav.parentElement.addEventListener('click',() => {
    nav.classList.toggle('nav__active');
    content.classList.toggle('nav__content--active');
    document.querySelector('main').classList.toggle('slide');
    document.querySelector('header').classList.toggle('slide');
    document.querySelector('footer').classList.toggle('slide');

})

//dark mode toggle
let state = false;
let darkMode = localStorage.getItem('darkMode');


const darkModeToggle = document.querySelector('.dark-mode');
darkModeToggle.addEventListener('click',() => {
    darkMode = localStorage.getItem('darkMode');
    if(darkMode !== "enabled"){
        enabledDarkMode();
    }
    else{
        disabledDarkMode();
    }
    
})
const enabledDarkMode = () => {
    state = true;
    localStorage.setItem('darkMode','enabled');
    document.body.classList.add('darkmode');
    document.querySelector('.nav__box').classList.add('lightmode');
    document.querySelector('.nav__content').classList.add('lightmode');
    const btns = document.querySelectorAll('.btn');
    Array.from(btns).forEach(btn => {
        btn.classList.add('lightmode');
    })

   
   
  
    document.querySelector(`.dark-mode use`).setAttribute('href',`img/SVG/symbol-defs.svg#icon-toggle-on`);
    document.querySelector(`.dark-mode-text`).textContent = "Dark Theme On";
    document.querySelector('.current-slide').classList.add('current-slide-toggle');
    document.querySelector('.current-slide-toggle').classList.remove('current-slide');


    

}
const disabledDarkMode = () => {
    state = false;
    localStorage.setItem('darkMode',null);
    document.body.classList.remove('darkmode');
 
    document.querySelector('.nav__box').classList.remove('lightmode');
    document.querySelector('.nav__content').classList.remove('lightmode');
    const btns = document.querySelectorAll('.btn');
    Array.from(btns).forEach(btn => {
        btn.classList.remove('lightmode');
    })
    
  
    document.querySelector(`.dark-mode use`).setAttribute('href',`img/SVG/symbol-defs.svg#icon-toggle-off`);
    document.querySelector(`.dark-mode-text`).textContent = "Dark Theme Off";

    document.querySelector('.current-slide-toggle').classList.add('current-slide');
    document.querySelector('.current-slide').classList.remove('current-slide-toggle');   
    


}
if(darkMode === "enabled"){
    enabledDarkMode();
}


// Carousel
let track = document.querySelector('.hobbies__track');
let dotNav = document.querySelector('.hobbies__nav');
let slides = Array.from(track.children);
let dots = Array.from(dotNav.children);
// const width = slides[0].getBoundingClientRect().width;
const width = 200; 
slides.forEach((curr,index) => {
    curr.setAttribute('data-width',width * index);
    // curr.style.left = width * index + 'px';
})
dotNav.addEventListener('click', (e) => {
    const targetDot = e.target.closest('div');
    const targetIndex = dots.findIndex((dot) => dot === targetDot);
    const targetSlide = slides[targetIndex];
    const currentSlide = track.querySelector('.active');
    if(!state){
        const currentDot = dotNav.querySelector('.current-slide');
        currentDot.classList.remove('current-slide');
        currentDot.classList.remove('current-slide-toggle');
        targetDot.classList.remove('current-slide-toggle');
        targetDot.classList.add('current-slide');
    }
    else{
        
        const currentDot = dotNav.querySelector('.current-slide-toggle');
        currentDot.classList.remove('current-slide');
        currentDot.classList.remove('current-slide-toggle');
      
        targetDot.classList.remove('current-slide');
        targetDot.classList.add('current-slide-toggle');
    }
 
    currentSlide.classList.remove('active');
    targetSlide.classList.add('active');

    track.style.transform = `translateX(-${targetSlide.dataset.width}%)`;
    // track.style.transform = `translateX(-${targetSlide.style.left}%)`;


})


//popup
const gallery = document.querySelector('.gallary__box');
const popupBox = document.querySelector('.popup__box');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
gallery.addEventListener('click',(e) => {
   
    let imageURL = e.target.getAttribute('src');
    let imageTitle = e.target.getAttribute('alt');
    if(imageURL && imageTitle){
        let image = `<img src="${imageURL}" alt="${imageTitle}" class="popup__image">`;
        popup.classList.add('popup__show');
        document.querySelector('body').classList.add('popupshow');
        popupBox.insertAdjacentHTML('beforeend',image);
    }
   
});
popupClose.addEventListener('click',() => {
    popup.classList.remove('popup__show');
    document.querySelector('body').classList.remove('popupshow');
    popupBox.innerHTML = '';
});


//scroll animation
$('.js--home').click(function(){
    $('html,body').animate({scrollTop:$('.js--header').offset().top},100);
})
$('.js--about').click(function(){
    $('html,body').animate({scrollTop:$('.js--section--about').offset().top},100);
})
$('.js--skills').click(function(){
    $('html,body').animate({scrollTop:$('.js--section--skill').offset().top},100);
})
$('.js--gallery').click(function(){
    $('html,body').animate({scrollTop:$('.js--section--gallery').offset().top},100);
})
$('.js--hobbies').click(function(){
    $('html,body').animate({scrollTop:$('.js--section--hobbies').offset().top},100);
})
$('.js--contact').click(function(){
    $('html,body').animate({scrollTop:$('.js--section--contact').offset().top},100);
})