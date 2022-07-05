var prevScrollpos = window.pageYOffset;
var mobileNavbarModal = document.querySelector('.mobile-navbar-modal');
var mobileBars = document.querySelector('.mobile-bars');
var mobileNavbarClose = document.querySelector('.mobile-navbar-close');
var mobileNavbarInner = document.querySelector('.mobile-navbar-inner');

window.onscroll = function() {
  if (window.getComputedStyle(mobileNavbarModal).display === "none") {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector("header").style.display = "block";
    } else {
      document.querySelector("header").style.display = "none";
    }
    prevScrollpos = currentScrollPos;
  }
}

$(document).ready(function() {
    $('.owl-carousel.banner').owlCarousel({
        items: 1,
        loop: true,
        autoheight: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: ("15" * 1000) || 7000,
    });

    $('.owl-carousel.store').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoheight: true,
        autoplayTimeout: ("15" * 1000) || 7000,
    });

    $('.store__img-slider').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoheight: true,
        autoplayTimeout: ("15" * 1000) || 7000,
    });
});

mobileBars.addEventListener('click', function(event) {
  mobileNavbarModal.classList.add('open');
});

mobileNavbarClose.addEventListener('click', function(event) {
  mobileNavbarModal.classList.remove('open');
});

mobileNavbarModal.addEventListener('click', function(event) {
  mobileNavbarModal.classList.remove('open');
});


mobileNavbarInner.addEventListener('click', function(event) {
  event.stopPropagation();
});