$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    dots: true,
    appendDots: ".slider-dots",
    dotsClass: "dots",
  });
  let hamberger = document.querySelector(".hamberger");
  let times = document.querySelector(".times");
  let mobileNav = document.querySelector(".mobile-nav");

  hamberger.addEventListener("click", function () {
    mobileNav.classList.add("open");
  });
  times.addEventListener("click", function () {
    mobileNav.classList.remove("open");
  });
});
/* will add this afterwards
Testimonials 
Recommendations: "Endorsements from professors and mentors highlighting my skills and character."


Responsive Design: 
"My site is optimized for all devices, ensuring a seamless experience."

Additional Media :
Video Introductions: "Watch a brief video introduction to learn more about me and my work."
Gallery: "Browse through images of my projects, events, and achievements."
*/
