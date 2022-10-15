/***------------------ Show Menu --------------------***/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/***-------------- Remove Menu Mobile ---------------***/
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/***------------ Change Background Header -----------***/

function scrollHeader() {
    const header = document.getElementById("header");
    if (this.scrollY >= 50) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/**---------- Theme Dark ------------**/
const themeButton = document.getElementById("theme-btn");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

if (selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
    );
    themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
        iconTheme
    );
}

themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});

/**---------- Portfolio ------------**/

/** SimpleLightbox **/
let lightboxPortfolio = new SimpleLightbox(".portfolio-content .image", {});

/** Mix Skills **/
let mixerSkills = mixitup(".portfolio-content", {
    selectors: {
        target: ".portfolio-item",
    },
    animation: {
        duration: 300,
    },
});

const portfolio = document.querySelectorAll(".filter-item");

function activeLink() {
    portfolio.forEach((p) => p.classList.remove("active"));
    this.classList.add("active");
}

portfolio.forEach((p) => p.addEventListener("click", activeLink));

/***------------ ScrollUp ------------***/
const scrollUp = document.querySelector(".scrollup");

window.addEventListener("scroll", checkHeight);

function checkHeight() {
    if (window.scrollY > 200) {
        scrollUp.style.display = "block";
    } else {
        scrollUp.style.display = "none";
    }
}

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

/**----- Typing Strings -----**/
var typed = new Typed(".typing", {
    strings: ["Web Developer", "Developer FullStack", "Designer Digital"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});

var typed = new Typed(".typing-about", {
    strings: ["Web Developer", "Developer FullStack", "Designer Digital"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});

/**------------ Accordion Skills ------------**/
const skillsContent = document.getElementsByClassName("skills-content");
const skillsHeader = document.querySelectorAll(".skills-header");

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = "skills-content skills-close";
    }

    if (itemClass === "skills-content skills-close") {
        this.parentNode.className = "skills-content skills-open";
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener("click", toggleSkills);
});

/**---------- Qualification Tabs ------------**/
const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContent) => {
            tabContent.classList.remove("qualification-active");
        });
        target.classList.add("qualification-active");

        tabs.forEach((tab) => {
            tab.classList.remove("qualification-active");
        });
        tab.classList.add("qualification-active");
    });
});

/**---------- Portfolio Swiper ------------**/
let swiperTestimonial = new Swiper(".testimonial-swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});
