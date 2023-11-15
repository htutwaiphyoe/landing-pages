// Menu
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// Show Menu when toggle button is clicked
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

// hide menu when close button is clicked
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

// hide menu when each link is clicked
const navLinks = document.querySelectorAll(".nav__link");

function removeMenu() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}
navLinks.forEach((navLink) => navLink.addEventListener("click", removeMenu));

// change header background when scroll
function changeHeaderBackground() {
    const header = document.getElementById("header");
    if (this.scrollY >= 100) {
        header.classList.add("scroll-header");
    } else {
        header.classList.remove("scroll-header");
    }
}
window.addEventListener("scroll", changeHeaderBackground);

// swiper js
var swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
});

// video
const videoFile = document.getElementById("video-file");
const videoButton = document.getElementById("video-button");
const videoIcon = document.getElementById("video-icon");

function changeVideoState() {
    if (videoFile.paused) {
        // play video
        videoFile.play();

        // change play icon to pause icon
        videoIcon.classList.add("ri-pause-line");
        videoIcon.classList.remove("ri-play-line");
    } else {
        // pause icon
        videoFile.pause();

        //change pause icon to play icon
        videoIcon.classList.remove("ri-pause-line");
        videoIcon.classList.add("ri-play-line");
    }
}

videoButton.addEventListener("click", changeVideoState);

function endVideo() {
    // change pause icon to play icon when video is ended
    videoIcon.classList.remove("ri-pause-line");
    videoIcon.classList.add("ri-play-line");
}

videoFile.addEventListener("ended", endVideo);

// Scroll Up
function scrollToTop() {
    window.scrollTo(0, 0);
}
function scrollUp() {
    const scrollUpButton = document.getElementById("scrollup");
    if (this.scrollY > 500) {
        scrollUpButton.classList.add("show-scrollup");
        scrollUpButton.addEventListener("click", scrollToTop);
    } else {
        scrollUpButton.classList.remove("show-scrollup");
        scrollUpButton.removeEventListener("click", scrollToTop);
    }
}

window.addEventListener("scroll", scrollUp);

// ACTIVE NAV LINK

const sectionDOMs = document.querySelectorAll("section[id]"); // this selects only sections with id

function showActiveLink() {
    const currentPageYScroll = window.pageYOffset; // pageYOffset is equal to window.scrollY

    sectionDOMs.forEach((currentSection) => {
        const sectionHeight = currentSection.offsetHeight; // offsetHeight is equal to height of an element, including vertical padding and borders
        const sectionTop = currentSection.offsetTop - 48; // offsetTop is the distance of the outer border of the current element relative to the inner border of the top of the offsetParent node.
        const sectionId = currentSection.getAttribute("id");

        // select a link which href attribute contains #sectionId which is the children of .nav__menu
        const currentNavLink = document.querySelector(`.nav__menu a[href*="#${sectionId}"]`);

        // sectionTop + sectionHeight is equal to amount of currentPageYScroll to reach the end of current section
        if (currentPageYScroll > sectionTop && currentPageYScroll <= sectionTop + sectionHeight) {
            currentNavLink.classList.add("active-link");
        } else {
            currentNavLink.classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", showActiveLink);

// THEME
const themeButton = document.getElementById("theme-icon");
const sunIcon = "ri-sun-line";
const darkTheme = "dark-theme";

let theme = localStorage.getItem("venus-theme");

if (theme) {
    themeButton.classList[theme === "dark" ? "add" : "remove"](sunIcon);
    document.body.classList[theme === "dark" ? "add" : "remove"](darkTheme);
}

themeButton.addEventListener("click", () => {
    themeButton.classList.toggle(sunIcon);
    document.body.classList.toggle(darkTheme);

    theme = document.body.classList.contains(darkTheme) ? "dark" : "light";
    localStorage.setItem("venus-theme", theme);
});

// SCROLL REVEAL
const sr = ScrollReveal({
    distance: "60px",
    duration: 2800,
    // reset: true,
});

sr.reveal(
    `.home__data, .home__social-link, .home__info, .discover__container, .experience__data, 
    .experience__overlay, .place__card, .sponsor__content, .footer__data, .footer__rights`,
    {
        origin: "top",
        interval: 100,
    }
);

sr.reveal(`.about__data, .video__description, .subscribe__description`, {
    origin: "left",
});

sr.reveal(`.about__img-overlay, .video__content, .subscribe__form`, {
    origin: "right",
    interval: 100,
});
