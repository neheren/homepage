var menuHeight;
function sizeCorrectly() {
	var contentHeight = $(".floater").height();
	menuHeight = window.innerHeight/2 - contentHeight/2;
	$(".frontpage-text").css("top", menuHeight + "px")
}

function videoHeight() {
	$(".video").css("height", window.innerHeight);
}

$(".frontpage-text").ready(function(){
	sizeCorrectly();
	videoHeight();
})

$( window ).resize(function() {
	sizeCorrectly();
	videoHeight();
});


$(".frontpage-text").css("top", window.innerHeight + "px")

puls = true;

function pulse(obj){
	if(puls){
		$(obj).stop()
		$(obj).animate({opacity:0}, 1500, "easeInOutExpo", function(){
			$(obj).animate({opacity:1}, 1500, "easeInOutExpo", function(){
				pulse(obj)
			});
		});
	}
}


function scrollLink(linkObj, scrollToObj){
	$(linkObj).click(function() {
		hideMenu()
		$('html, body').animate({
			scrollTop: $(scrollToObj).position().top
		}, 1000, "easeInOutExpo");
	});
}


function hideMenu(){
	$("#ball").stop()
	$("#ball").animate({opacity:1, left:"70", top:"-60px", height:"8px"}, 300, "easeOutExpo")
	$(".menu").stop()
	$(".menu").animate({opacity: 0, top:"-30px" }, 1000, "easeInOutExpo");
}




$(document).ready(function(){
	$("#ball").animate({left:"130px", top:"-65px", height:"12px", opacity:1}, 0, "easeInOutExpo")
	puls = true;
	pulse("#ballimg");

	$(".floater").hover(function(){

		//ball:
		$("#ballimg").stop()
		$("#ballimg").animate({opacity:1}, 500)
		puls = false;
		
		$("#ball").stop()
		$("#ball").animate({opacity:1, left:"70", top:"-60px", height:"8px"}, 1200, "easeOutExpo")
		//menu:
		$(".menu").stop()
		$(".menu").animate({opacity: 1, top:"0px" }, 1000, "easeOutExpo");

		//logo:
		$("#slyt").stop()
		$("#slyt").animate({width: "120px", top:"-50px" }, 1000, "easeOutExpo");

	}, function(){


		//logo:
		if(window.scrollY < menuHeight){
			//ball:
			$("#ball").stop()
			$("#ball").animate({left:"130px", top:"-65px", height:"12px"}, 1000, "easeInOutExpo")
			puls = false;

			$("#slyt").stop()
			$("#slyt").animate({width: "230px", top:"0px" }, 1000, "easeInOutExpo");
		}else{
			//ball:		
			$("#ball").stop()
			$("#ball").animate({opacity:1, left:"70", top:"-60px", height:"8px"}, 1200, "easeOutExpo")

			puls = true;
			pulse("#ballimg");

			//menu:

		}
			$(".menu").stop()
			$(".menu").animate({opacity: 0, top:"-30px" }, 1000, "easeInOutExpo");

	})




	$(".menu-item").hover(function(){
		var item = $(this).position().left + ($(this).width()/2) - 2 ;
		$("#ball").stop()
		$("#ball").animate({opacity:1, left: item-(window.innerWidth/2) + "px", top:"0px"}, 500, "easeOutExpo")
	})

	scrollLink("#fullstacklink", ".centerbox")

	$(window).scroll(function(){
		if(window.scrollY > menuHeight){
			$(".frontpage-text").css({top: window.scrollY})

			$("#ball").stop()
			$("#ball").animate({opacity:1, left:"70", top:"-60px", height:"8px"}, 1200, "easeOutExpo")
			$("#slyt").stop()
			$("#slyt").animate({width: "120px", top:"-50px" }, 1000, "easeOutExpo");

		}else{
			$(".frontpage-text").css({top: menuHeight+ "px"})
			$("#slyt").stop()
			$("#slyt").animate({width: "230px", top:"0px" }, 1000, "easeInOutExpo");
			$("#ball").stop()
			$("#ball").animate({left:"130px", top:"-65px", height:"12px"}, 1000, "easeInOutExpo")
		}
	})
	
})




