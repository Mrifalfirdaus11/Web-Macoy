// let preveiwProfil = document.querySelector('.products-preview');
// let previewBox = preveiwProfil.querySelectorAll('.preview');

// document.querySelectorAll('.navbar .nav_right').forEach(nav_right =>{
// 	nav_right.onclick = () =>{
//     preveiwProfil.style.display = 'flex';
//     let name = Profil.getAttribute('data-name');
//     previewBox.forEach(preview =>{
//       let target = preview.getAttribute('data-target');
//       if(name == target){
//         preview.classList.add('active');
//       }
//     });
//   };
// });

// previewBox.forEach(close =>{
//   close.querySelector('.fa-times').onclick = () =>{
//     close.classList.remove('active');
//     preveiwProfil.style.display = 'none';
//   };
// });




// var dd_main = document.querySelector(".dd_main");

// 	dd_main.addEventListener("click", function(){
// 		this.classList.toggle("active");
// 	})




// // ABOUT US
 
// var swiper = new Swiper(".slide-content", {
//   slidesPerView: 3,
//   spaceBetween: 25,
//   loop: true,
//   centerSlide: 'true',
//   fade: 'true',
//   grabCursor: 'true',
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     dynamicBullets: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   breakpoints:{
//       0: {
//           slidesPerView: 1,
//       },
//       520: {
//           slidesPerView: 2,
//       },
//       950: {
//           slidesPerView: 3,
//       },
//   },
// });



// dropdownNavbar
document.addEventListener("DOMContentLoaded", function() {
  const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
  const dropdownMenu = document.querySelector("#uli");
  
  mobileMenuIcon.addEventListener("click", function() {
    dropdownMenu.classList.toggle("active");
  });
});


$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
      items:1,
      loop:true,
      nav:true,
      dots:true,
      autoplay:true,
      autoplaySpeed:1000,
      smartSpeed:1500,
      autoplayHoverPause:true
  });
});

// bg tranparent navbar
  // JavaScript code to add or remove classes on scroll
  window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbarr");
    const scrolled = window.scrollY > 0;
    navbar.classList.toggle("scrolled", scrolled);
  });
  
  // JavaScript code to toggle transparent class initially
  document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector(".navbarr");
    const scrolled = window.scrollY > 0;
    navbar.classList.toggle("transparent", !scrolled);
  });