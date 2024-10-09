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