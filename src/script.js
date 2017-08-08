$(".frontpage-text").ready(function(){
	var contentHeight = $(".floater").height();
	$(".frontpage-text").css("top", window.innerHeight/2 - contentHeight/2 + "px")
})


$(".frontpage-text").css("top", window.innerHeight + "px")