"use strict";

//DARK MODE JS START---->

document.querySelector('.switcher-btn').onclick = () => {
    document.querySelector('.color-switcher').classList.toggle('active');
};

const themeButtons = document.querySelectorAll('.theme-buttons');

themeButtons.forEach(color => {
    color.addEventListener('click', () => {
        let dataColor = color.getAttribute('data-color');
        document.querySelector(':root').style.setProperty('--bg', dataColor);
    });
});


//DARK MODE JS END---->

//SLIDESHOW JS START---->

const slideshowElements = document.querySelectorAll(".slideshow-element");

let countElement = 1;

setInterval(() => {

    countElement++;

    const currentElement = document.querySelector(".current");

    currentElement.classList.remove("current");

    if( countElement > slideshowElements.length ) {

        slideshowElements[0].classList.add("current");

        countElement = 1;

    } else {

        currentElement.nextElementSibling.classList.add("current");

    }

}, 2000)


//SLIDESHOW JS END---->


//MENU BUTTON JS START--->

const navBar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {

    navBar.classList.toggle('active');
    
}

window.onscroll = () => {

    navBar.classList.remove('active');

}


//MENU BUTTON JS END--->

//SLICK SLIDER JQUERY START--->

$(document).ready(function(){

    $('.banner-slider').slick({

        dots: true,
        infinite: true,
        arrows: true,
        autoplay : true,
        accessibility : true,
        autoplaySpeed: 3000,
        fade : true,
        speed: 1000,  
        cssEase: 'linear',
        prevArrow : '<div class="slick-arrow prev"><span class="fa fa-angle-left"></div>',
        nextArrow : '<div class="slick-arrow next"><span class="fa fa-angle-right"></div>',
    
    })
    
})

//SLICK SLIDER JQUERY END--->

// Catagory JS Start --->

$(document).ready(function() {
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 3000,
        smartSpeed: 850,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
    });
});


// Catagory JS End --->


// Chat box js start--->
function openForm() {
    const display = document.getElementById("week");
    display.style.display = "block";
}

function closeForm() {
    const display = document.getElementById("week");
    display.style.display = "none";
}



// Chat box js end--->