$(document).ready(function () {
  
  //下拉選單
  $(".dropdown").click(function (event)   {
    event.preventDefault();
    $(".dropdown").toggleClass("active");
    $(".dropdownOpen").slideToggle();
  });
  
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 1000
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination"
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
  
  //goToTop
  $(".goTop").click(function (e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: 0 }, 1000);
  });
  
  //jQuery 實現 hover 效果
  $(".pulse > li").mouseenter(function(event){
        $(this).addClass("animate__animated animate__pulse").siblings().removeClass("animate__animated animate__pulse");
    });
  
  
   
 });
