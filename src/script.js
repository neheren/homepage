function sizeCorrectly() {
	var contentHeight = $(".floater").height();
	$(".frontpage-text").css("top", window.innerHeight/2 - contentHeight/2 + "px")
}


$(".frontpage-text").ready(function(){
sizeCorrectly()
})

$( window ).resize(function() {
sizeCorrectly()
});



$(".frontpage-text").css("top", window.innerHeight + "px")


$(document).ready(function(){
	$(".floater").hover(function(){
		//menu:
		$(".menu").stop()
		$(".menu").animate({opacity: 1, top:"0px" }, 1000, "easeOutExpo");

		//logo:
		$("#slyt").stop()
		console.log('test')
		$("#slyt").animate({width: "120px", top:"-50px" }, 1000, "easeOutExpo");
	}, function(){
		//menu:
		$(".menu").stop()
		$(".menu").animate({opacity: 0, top:"-30px" }, 1000, "easeInOutExpo");

		//logo:
		$("#slyt").stop()
		$("#slyt").animate({width: "230px", top:"0px" }, 1000, "easeInOutExpo");

	})
	
})

