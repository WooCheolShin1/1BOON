window.onload = function(){
  setTimeout(function() {
    scrollTo(0,0);
  }, 100);
}

  let wheellist = document.getElementById("scrollList");
  let wheellist2 = document.getElementById("scrollList2");

  $(window).scroll(function() {
    let wheelscroll = $(document).scrollTop();
    if(wheelscroll == 0){
      wheellist.style.backgroundColor = "transparent";
      wheellist2.style.display = "none";
    }
    else if(wheelscroll > 0){
      wheellist.style.backgroundColor = "#000";
      wheellist2.style.display = "block";
    }
  });

  $('.btn_close').click(function(){
    $('.top_area').css('display', 'none');
    // $('ul.sub').css('height', '190px');
    // $('.login').css('top', '50%');
  });

  var swiper = new Swiper(".visualslide", {
    slidesPerView: 6,
    spaceBetween: 30,
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false
    },
    speed: 5000,
    allowTouchMove: false,
  });

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
    ease: "none",
  });
  
  const ani3 = gsap.timeline({
    defaults:{
      autoAlpha:0,
    },
    ease: "none",
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
    ease: "none",
  });
  
  const ani6 = gsap.timeline({
    defaults:{
      autoAlpha:0,
    },
    ease: "none",
  });
  
  const ani7 = gsap.timeline({
    defaults:{
      autoAlpha:0,
    },
    ease: "none",
  });
  
  const ani8 = gsap.timeline({
    defaults:{
      autoAlpha:0,
    },
    ease: "none",
  });
  
  const ani9 = gsap.timeline({
    defaults:{
      autoAlpha:0,
    },
    ease: "none",
  });
  
  const ani10 = gsap.timeline({
    defaults:{
      autoAlpha:0,
    },
    ease: "none",
  });
  
  const ani11 = gsap.timeline({
    defaults:{
      autoAlpha:0,
    },
    ease: "none",
  });
  
  const ani12 = gsap.timeline({
    defaults:{
      autoAlpha:0,
    },
    ease: "none",
  });
  
  ani1.from(".visual2_text",{
    y: -100,
  })
  
  ani2.from(".visual2_2_img",{
    y: -100,
  })
  
  ani3.from(".visual2_3 > p",{
    y: -100,
  })
  
  ani4.from(".visual2_3 > button",{
    y: -100,
  })
  
  ani5.from(".visual3 > p",{
    y: -100,
  })
  
  ani6.from(".visual3 > iframe",{
    x: 100,
  })
  
  ani7.from(".visual4 > p",{
    y: -100,
  })
  
  ani8.from(".visual4_img",{
    x: -100,
  })
  
  ani9.from(".visual4_text",{
    x: -100,
  })
  
  ani10.from(".visual5 > p",{
    y: -100,
  })
  
  ani11.from(".visual5_list",{
    x: -300,
  })
  
  ani12.from(".row",{
    x: -300,
  })
  
  ScrollTrigger.create({
    animation: ani1,
    start:"+=550",
    end:"+=0",
    scrub: 5,
    anticipatePin: 1,
  })
  
  ScrollTrigger.create({
    animation: ani2,
    start:"+=600",
    end:"+=0",
    scrub: 5,
    anticipatePin: 1,
  })
  
  ScrollTrigger.create({
    animation: ani3,
    start:"+=650",
    end:"+=0",
    scrub: 5,
    anticipatePin: 1,
  })
  
  ScrollTrigger.create({
    animation: ani4,
    start:"+=700",
    end:"+=0",
    scrub: 5,
    anticipatePin: 1,
  })
  
  ScrollTrigger.create({
    animation: ani5,
    start:"+=1400",
    end:"+=000",
    scrub: 5,
    anticipatePin: 1,
  })
  
  ScrollTrigger.create({
    animation: ani6,
    start:"+=1400",
    end:"+=0",
    scrub: 5,
    anticipatePin: 1,
  })
  
  ScrollTrigger.create({
    animation: ani7,
    start:"+=2500",
    end:"+=0",
    scrub: 5,
    anticipatePin: 1,
  })
  
  ScrollTrigger.create({
    animation: ani8,
    start:"+=2500",
    end:"+=0",
    scrub: 5,
    anticipatePin: 1,
  })
  
  ScrollTrigger.create({
    animation: ani9,
    start:"+=3000",
    end:"+=0",
    scrub: 5,
    anticipatePin: 1,
  })
  
  ScrollTrigger.create({
    animation: ani10,
    start:"+=3500",
    end:"+=0",
    scrub: 5,
    anticipatePin: 1,
  })
  
  ScrollTrigger.create({
    animation: ani11,
    start:"+=3500",
    end:"+=0",
    scrub: 5,
    anticipatePin: 1,
  })
  
  ScrollTrigger.create({
    animation: ani12,
    start:"+=4200",
    end:"+=0",
    scrub: 5,
    anticipatePin: 1,
  });
  
  $('.swiper-slide').on('mouseover', function(){
    swiper.autoplay.stop();
  });
  
  $('.swiper-slide').on('mouseout', function(){
    swiper.autoplay.start();
  });