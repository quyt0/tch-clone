var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("header").style.display = "block";
  } else {
     document.querySelector("header").style.display = "none";
  }
  prevScrollpos = currentScrollPos;
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