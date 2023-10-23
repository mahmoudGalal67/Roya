// Navbar

let navbar = document.querySelector(".navbar");

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");

menuOpenBtn.onclick = function () {
  navLinks.style.left = "-20px";
};
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-121%";
};

// sidebar submenu open close js code
let HomepageArrow = document.querySelector(".Homepage-arrow");
HomepageArrow.onclick = function () {
  navLinks.classList.toggle("show1");
};
let moreArrow = document.querySelector(".test-more-arrow");
moreArrow.onclick = function () {
  navLinks.classList.toggle("show2");
};
let jsArrow = document.querySelector(".Slimming-more-arrow");
jsArrow.onclick = function () {
  navLinks.classList.toggle("show3");
};
let testArrow = document.querySelector(".Gynecology-more-arrow");
testArrow.onclick = function () {
  navLinks.classList.toggle("show4");
};

let moreTestArrow = document.querySelector(".Infertility-more-arrow");
moreTestArrow.onclick = function () {
  navLinks.classList.toggle("show5");
};
let moreOffer = document.querySelector(".offers-arrow");
moreOffer.onclick = function () {
  navLinks.classList.toggle("show6");
};

// Back to top button
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".back-to-top").fadeIn("slow");
  } else {
    $(".back-to-top").fadeOut("slow");
  }
});

// $(".back-to-top").click(function () {
//   $("html, body").animate(
//     {
//       scrollTop: 0,
//     },
//     1500,
//     "easeInOutExpo"
//   );
//   return false;
// });
