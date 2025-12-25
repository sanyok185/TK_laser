import "./main.min.js";
import "./common.min.js";
$(".cabinet-slider").owlCarousel({
  items: 1,
  loop: true,
  nav: true,
  dots: true,
  navContainer: ".cabinet-controls",
  dotsContainer: ".cabinet-dots",
  navText: [
    '<span class="arrow arrow-prev"></span>',
    '<span class="arrow arrow-next"></span>'
  ]
});
