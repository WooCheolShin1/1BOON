  let wheellist = document.getElementById("scrollList");

  $(window).scroll(function() {
    let wheelscroll = $(document).scrollTop();
    if(wheelscroll == 0){
      wheellist.style.backgroundColor = "transparent";
    }
    else if(wheelscroll > 0){
      wheellist.style.backgroundColor = "#000";
    }
  });