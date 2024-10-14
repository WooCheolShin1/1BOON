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
