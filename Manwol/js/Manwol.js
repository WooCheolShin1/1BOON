    let wheellist = document.getElementById("scrollList");
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
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });