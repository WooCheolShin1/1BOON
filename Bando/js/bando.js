$(function(){
  $(".list > ul > li").mouseover(function(e){
      e.preventDefault();
      $(".bg").css({"height": "330px"});
      $(".list > ul > li > a").css({"color": "#000"});
      $(".tail").css({"color": "#000"});
      $(".list").css({"background-color": "#fff"});
      $(".sub").css({"display": "block"});
      $(".head a img").attr("src", "images/bando_logo_hover.png");
      $(this).find("> a").css({"color": "#174a3a"});
  });

  $(".list > ul > li").mouseleave(function(e){
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
  effect:'fade',
  speed: 1000,
  observer: true,
  observeParents: true,
  freemode: true,
  navigation: {
    nextEl: '.arrowright',
    prevEl: '.arrowleft',
  },
  fadeEffect: {
    crossFade: true 
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction : false,
  },
})

const ani1 = gsap.timeline({
  defaults:{
    autoAlpha:0,
  },
  ease: "none",
});

const ani2 = gsap.timeline({
  defaults:{
    autoAlpha:0,
  },
  ease: "none"
});

const ani3 = gsap.timeline({
  defaults:{
    autoAlpha:0,
  },
  ease: "none"
});

const ani4 = gsap.timeline({
  defaults:{
    autoAlpha:0,
  },
  ease: "none",
});

const ani5 = gsap.timeline({
  defaults:{
    autoAlpha:0,
  },
  ease: "none"
});

const ani6 = gsap.timeline({
  defaults:{
    autoAlpha:0,
  },
  ease: "none"
});

const ani7 = gsap.timeline({
  defaults:{
    autoAlpha:0,
  },
  ease: "none"
});

const ani8 = gsap.timeline({
  defaults:{
    autoAlpha:0,
  },
  ease: "none"
});


ani1.from("#scrollbando",{
  y: -100,
})

ani2.from("#scrollbando2", {
  y: 100
})

ani3.from("#scrollbando3", {
  y: 100
})

ani4.from("#scrollbando4",{
  x: -200,
})

ani5.from("#scrollbando5", {
  x: 200
})

ani6.from("#scrollbando6", {
  x: 200
})

ani7.from("#scrollbando7", {
  x: -200
})

ani8.from("#scrollbando8", {
  x: 200
})

ScrollTrigger.create({
  animation: ani1,
  trigger:"#scrollmanwol",
  start:"+=500",
  end:"+=0",
  scrub: 5,
  anticipatePin: 1,
  markers: true,
})

ScrollTrigger.create({
  animation: ani2,
  trigger:"#scrollmanwol2",
  start:"+=500",
  end:"+=0",
  scrub: 5,
  anticipatePin: 1,
  opacity: 1,
})

ScrollTrigger.create({
  animation: ani3,
  trigger:"#scrollmanwol3",
  start:"+=500",
  end:"+=0",
  scrub: 5,
  anticipatePin: 1,
})

ScrollTrigger.create({
  animation: ani4,
  trigger:"#scrollmanwol4",
  start:"+=1300",
  end:"+=0",
  scrub: 5,
  anticipatePin: 1,
})

ScrollTrigger.create({
  animation: ani5,
  trigger:"#scrollmanwol5",
  start:"+=1500",
  end:"+=0",
  scrub: 5,
  anticipatePin: 1,
  opacity: 1,
})

ScrollTrigger.create({
  animation: ani6,
  trigger:"#scrollmanwol6",
  start:"+=1700",
  end:"+=0",
  scrub: 5,
  anticipatePin: 1,
})

ScrollTrigger.create({
  animation: ani7,
  trigger:"#scrollmanwol7",
  start:"+=2300",
  end:"+=0",
  scrub: 5,
  anticipatePin: 1,
  opacity: 1,
})

ScrollTrigger.create({
  animation: ani8,
  trigger:"#scrollmanwol8",
  start:"+=2300",
  end:"+=0",
  scrub: 5,
  anticipatePin: 1,
})