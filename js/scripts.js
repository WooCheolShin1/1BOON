const ani1 = gsap.timeline({
  defaults:{
  autoAlpha:0,
},
  ease: "none",
  duration: 0.3
});

const ani2 = gsap.timeline({
  defaults:{
  autoAlpha:0,
},
  ease: "none",
  duration: 0.4,
});

const ani3 = gsap.timeline({
  defaults:{
  autoAlpha:0,
},
  ease: "none",
  duration: 0.4,
});

const ani4 = gsap.timeline({
  defaults:{
  autoAlpha:0,
},
  ease: "none",
});

ani1.from("#scroll1",{
    y: -100,
})

ani2.from("#scroll2",{
  y: -100,
})

ani3.from("#scroll3",{
  x: -100,
})

ani4.from("#mousescroll",{
  y: -100,
})

ScrollTrigger.create({
  animation: ani4,
  start:"+=300",
  end:"+=0",
  scrub: 5,
  anticipatePin: 1,
})


$(".ottogi ul li:first-child").hover(function(e){
    e.preventDefault();
    $(".project_explain .project_explain1 p .span1").css("display", "block");
  })

$(".ottogi ul li:nth-child(2)").hover(function(e){
    e.preventDefault();
    $(".project_explain .project_explain1 p .span2").css("display", "block");
  })

$(".ottogi ul li:nth-child(3)").hover(function(e){
    e.preventDefault();
    $(".project_explain .project_explain1 p .span3").css("display", "block");
  })

$(".ottogi ul li:nth-child(4)").hover(function(e){
    e.preventDefault();
    $(".project_explain .project_explain1 p .span4").css("display", "block");
  })

  $(".ottogi ul li").mouseleave(function(e){
    e.preventDefault();
    $(".project_explain .project_explain1 p span").css("display", "none");
  })
