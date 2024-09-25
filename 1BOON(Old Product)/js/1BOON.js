    //===============================헤더 부분===================================//
    let wheellist = document.getElementById("scrollList");

    $(window).scroll(function() {
      let wheelscroll = $(document).scrollTop();
      if(wheelscroll == 0){
        wheellist.style.backgroundColor = "transparent";
      }
      else if(wheelscroll > 0){
        wheellist.style.backgroundColor = "#fff";
      }
    });

    $('.btn_close').click(function(){
      $('.top_area').css('display', 'none');
      $('ul.sub').css('height', '190px');
      $('.login').css('top', '50%');
     });
    //=========================================================================//

    //===============================로그인 부분================================//
    $("input[id='autologin']").change(function(){
      var text = $("input[id='autologin']:checked").val();
      if(confirm("자동로그인을 사용하시면 다음부터 회원아이디와 비밀번호를 입력하실 필요가 없습니다.\n\n공공장소에서는 개인정보가 유출될수 있으니 사용을 자제하여 주십시오.\n\n자동로그인을 사용하시겠습니까?") == true){
        $("#autologin").prop("checked", true);
      }
      else{
        $("#autologin").prop("checked", false);
      }
    })
    //========================================================================//

    //===============================회원가입 동의================================//
    $('#allcheck').click(function(){
    let checked = $('#allcheck').is(':checked');
    if(checked){
      $('#check1').prop('checked', true);
      $('#check2').prop('checked', true);
      //모든 체크박스에 적용할 시 푸터쪽의 체크박스까지 찍히는 현상이 발생한다.
    }else{
      $('#check1').prop('checked', false);
      $('#check2').prop('checked', false);
    }
  });

  $('#newpeople').click(function(e){
    e.preventDefault();
    var check1 = $('#check1').is(':checked');
    var check2 = $('#check2').is(':checked');
    if(check1 && check2){
      location.href = "joinmembership.html";
    }
    else{
      alert("회원가입약관의 내용에 동의하셔야 회원가입 하실 수 있습니다.");
      return false;
    }
  });

   //==========================================================================//

   //=========================푸터 고정형 ㅇㅇ==================================//

  //  window.addEventListener('scroll', () => { 
  //   if(window.scrollY > 2500) {
  //     $('#foot').css('position', 'static');
  //   }
  //   else{
  //     $('#foot').css('position', 'fixed');
  //   }
  // });

  //==========================================================================//

    let btn = document.querySelectorAll(".wrap .button li");
    let ilboonmenu = document.querySelectorAll(".wrap .wrapimage .swiper .swiper-wrapper");
    let sil = document.querySelector(".wrap .wrapimage");
    let arrowleft = document.querySelector(".arrowleft");
    let arrowright = document.querySelector(".arrowright");
    btn[0].querySelector("a").classList.add("on");
    ilboonmenu[0].classList.add("on");

    btn.forEach(function(v,k){
      v.onclick = function(e){
        e.preventDefault();
        buttondelete();
        btn[k].querySelector("a").classList.add("on");
        imagedelete();
        ilboonmenu[k].classList.add("on");
        // console.log(ilboonmenu[k].childElementCount);

        if(ilboonmenu[k].childElementCount < 5){
          arrowleft.classList.add("off");
          arrowright.classList.add("off");
          //종류가 4개 미만일경우 화살표 사라짐.
        }
        else{
          arrowleft.classList.remove("off");
          arrowright.classList.remove("off");
        }
      }
    })

    function buttondelete(){
      btn.forEach(function(v,k){
        v.querySelector("a").classList.remove("on");
      })
    }

    function imagedelete(){
      ilboonmenu.forEach(function(v,k){
        v.classList.remove("on");
      })
    }

    var swiper = new Swiper('.wrapimage .swiper', {
      slidesPerView: 4,
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
      autoplay: {
        delay: 3000,
        disableOnInteraction : false,
      },

      // breakpoints: {
      //   1320: {
      //     slidesPerView : 3,
      //   }
      // }
    });
    
    var swiper = new Swiper(".mySwiper2", {
      spaceBetween: 30,
      effect: "fade",
      loop: true,
      navigation: {
        nextEl: ".arrowleft2",
        prevEl: ".arrowright2",
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction : false,
      }
    });
    
    window.onload = function(){
      setTimeout(function() {
        scrollTo(0,0);
      }, 100);
    }

  //  let options = 'width=400, height=400'
  //  window.open('popup.html', '_blank', options)
