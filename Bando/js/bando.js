$(function(){
  $(".list > ul").mouseover(function(e){
      e.preventDefault();
      $(".bg").css({"height": "330px"});
      $(".list > ul > li > a").css({"color": "#000"});
      $(".tail").css({"color": "#000"});
      $(".list").css({"background-color": "#fff"});
      $(".sub").css({"display": "block"});
      $(".head a img").attr("src", "images/bando_logo_hover.png");
  });

  $(".list > ul").mouseleave(function(e){
      e.preventDefault();
      $(".bg").css({"height": "0"});
      $(".list > ul > li > a").css({"color": "#fff"});
      $(".tail").css({"color": "#fff"});
      $(".list").css({"background-color": "transparent"});
      $(".sub").css({"display": "none"});
      $(".head a img").attr("src", "images/bando_logo.png");
  });
});

var swiper = new Swiper('.wrapimage .swiper', {
  slidesPerView: 1,
  loop: true,
  speed: 500,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  freemode: true,
  navigation: {
    nextEl: '.arrowright',
    prevEl: '.arrowleft',
  },
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction : false,
  // }
})