    let wheellist = document.getElementById("scrollList");
    const video = document.getElementById("video1");
    
    $(window).scroll(function() {
      let wheelscroll = $(document).scrollTop();
      if(wheelscroll == 0){
        wheellist.style.backgroundColor = "transparent";
      }
      else if(wheelscroll > 0){
        wheellist.style.backgroundColor = "#0e0c23";
      }
    });

    var swiper = new Swiper(".manwolswiper", {
      slidesPerView: 1,
      effect: "fade",
      speed: 1000,
      loop: true,
      navigation: {
        nextEl: ".arrowright",
        prevEl: ".arrowleft",
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction : false,
      },
      on: {
        slideChange: function(){        
          if(this.realIndex == 1){
            video.currentTime = 0;
          }
       },
    }
  });

    window.onload = function(){
      setTimeout(function() {
        scrollTo(0,0);
      }, 100);
    }

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

    const ani4 = gsap.timeline({});
    const ani5 = gsap.timeline({});

    ani1.from("#scrollmanwol",{
      x: -100,
    })

    ani2.from("#scrollmanwol2", {

    })
    
    ani3.from("#scrollmanwol3", {
      y: 100
    })

    ani4.from("#scrollmanwol4",{
      x: -50,
    })
    
    ani5.from("#scrollmanwol5", {
      x: 50
    })
    
    
    ScrollTrigger.create({
      animation: ani1,
      trigger:"#scrollmanwol",
      start:"-=500",
      end:"+=0",
      scrub: 5,
      anticipatePin: 1,
	  })

    ScrollTrigger.create({
      animation: ani2,
      trigger:"#scrollmanwol2",
      start:"-=600",
      end:"+=0",
      scrub: 5,
      anticipatePin: 1,
      opacity: 1,
	  })

    ScrollTrigger.create({
      animation: ani3,
      trigger:"#scrollmanwol3",
      start:"-=500",
      end:"+=0",
      scrub: 5,
      anticipatePin: 1,
	  })

    ScrollTrigger.create({
      animation: ani4,
      trigger:"#scrollmanwol4",
      start:"-=800",
      end:"+=0",
      scrub: 5,
	  })

    ScrollTrigger.create({
      animation: ani5,
      trigger:"#scrollmanwol5",
      start:"-=800",
      end:"+=0",
      scrub: 5,
	  })