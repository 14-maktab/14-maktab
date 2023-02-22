var swiper = new Swiper(".home-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  grabCursor: true,
});

var swiper = new Swiper(".fanlar_block", {
  // loop: true,
  grabCursor: true,
});

var swiper = new Swiper(".swiper-container_14", {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    // autoplay: true,  
    // autoplayTimeout: 1000,
    // autoplayHoverPause: true,
    items: 4,
    loop: false,
    center: true,
    rewind: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    freeDrag: false,
    margin: 0,
    stagePadding: 0,
    merge: false,
    mergeFit: true,
    autoWidth: false,
    startPosition: 0,
    rtl: false,
    smartSpeed: 250,
    fluidSpeed: false,
    dragEndSpeed: false,
    responsive: {
      0: {
        items: 1,
        // nav: true
      },
      480: {
        items: 1,
        nav: false,
      },
      768: {
        items: 2,
        nav: false,
        loop: false,
      },
      992: {
        items: 4,
        nav: false,
        loop: false,
      },
    },
  });
});

// $(document).ready(function () {

//   function toggleSidebar() {
//     $(".button").toggleClass("active");
//     $("main").toggleClass("move-to-left");
//     $(".sidebar-item").toggleClass("active");
//   }

//   $(".button").on("click tap", function () {
//     toggleSidebar();
//   });

//   $(document).keyup(function (e) {
//     if (e.keyCode === 27) {
//       toggleSidebar();
//     }
//   });

// });

const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  modeToggle = document.querySelector(".dark-light"),
  searchToggle = document.querySelector(".searchToggle"),
  sidebarOpen = document.querySelector(".sidebarOpen"),
  siderbarClose = document.querySelector(".siderbarClose");

// let getMode = localStorage.getItem("mode");
// if (getMode && getMode === "dark-mode") {
//   body.classList.add("dark");
// }

// js code to toggle dark and light mode
// modeToggle.addEventListener("click", () => {
//   modeToggle.classList.toggle("active");
//   body.classList.toggle("dark");

//   // js code to keep user selected mode even page refresh or file reopen
//   if (!body.classList.contains("dark")) {
//     localStorage.setItem("mode", "light-mode");
//   } else {
//     localStorage.setItem("mode", "dark-mode");
//   }
// });

// js code to toggle search box
// searchToggle.addEventListener("click", () => {
//   searchToggle.classList.toggle("active");
// });

//   js code to toggle sidebar
sidebarOpen.addEventListener("click", () => {
  nav.classList.add("active");
  // body.style.overflow = "hidden"
});

siderbarClose.addEventListener('click', () => {
  // body.style.overflow = "inherit"
})

body.addEventListener("click", (e) => {
  let clickedElm = e.target;

  if (
    !clickedElm.classList.contains("sidebarOpen") &&
    !clickedElm.classList.contains("menu")
  ) {
    nav.classList.remove("active");
  }
  // body.style.overflow = "inherit"
});
