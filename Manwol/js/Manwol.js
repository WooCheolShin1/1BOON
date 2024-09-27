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

