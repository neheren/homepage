var menuHeight;
var menuDown;
function sizeCorrectly() {
	var contentHeight = $(".floater").height();
	menuHeight = window.innerHeight/2 - contentHeight/2;
	$(".frontpage-text").css("top", menuHeight + "px")
	$("body").css("width", window.innerWidth)
	$(".frontpage-text").css("width", window.innerWidth)
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
		if(menuDown) {
			hideMenu();
			$('html, body').animate({
				scrollTop: $(scrollToObj).position().top
			}, 1000, "easeInOutExpo");
			menuDown = false;
		}
	});
}




function hideMenu(){
	$("#ball").stop().animate({opacity:1, left:"70", top:"-65px", height:"8px"}, 300, "easeOutExpo")
	$(".menu").stop().animate({opacity: 0, top:"-30px" }, 1000, "easeInOutExpo");
}

$(document).ready(function(){
	$("#ball").animate({left:"130px", top:"-70px", height:"12px", opacity:1}, 0, "easeInOutExpo")
	puls = true;
	pulse("#ballimg");

	$(".floater").hover(function(){
		//ball:
		$("#ballimg").stop().animate({opacity:1}, 500)
		puls = false;
		$("#ball").stop().animate({opacity:1, left:"70px", top:"-70px", height:"8px"}, 1200, "easeOutExpo")
		//menu:
		$(".menu").stop().animate({opacity: 1, top:"0px" }, 1000, "easeOutExpo", function(){
			menuDown = true;
		});
		//logo:
		$("#slyt").stop().animate({width: "120px", top:"-50px" }, 1000, "easeOutExpo");

	}, function(){
		menuDown = false;
		//logo:
		if(window.scrollY < menuHeight){
			//ball:
			$("#ball").stop().animate({left:"130px", top:"-70px", height:"12px"}, 1000, "easeInOutExpo")
			puls = false;
			$("#slyt").stop().animate({width: "230px", top:"0px" }, 1000, "easeInOutExpo");
		}else{
			//ball:		
			$("#ball").stop().animate({opacity:1, left:"70", top:"-65px", height:"8px"}, 1200, "easeOutExpo")
			puls = true;
			pulse("#ballimg");
		}
		$(".menu").stop().animate({opacity: 0, top:"-30px" }, 1000, "easeInOutExpo");
	})

	$(".menu-item").hover(function(){
		var item = $(this).position().left + ($(this).width()/2) - 2 ;
		$("#ball").stop().animate({opacity:1, left: item-(window.innerWidth/2) + "px", top:"0px"}, 500, "easeOutExpo")
	})

	scrollLink("#projekterlink", "#projekter")
	scrollLink("#erfaringlink", "#erfaring")
	scrollLink("#musiklink", "#musik")

	$(window).scroll(function(){
		if(window.scrollY > menuHeight){
			$(".frontpage-text").css({top: window.scrollY})
			$("#ball").stop().animate({opacity:1, left:"70", top:"-70px", height:"8px"}, 1200, "easeOutExpo")
			$("#slyt").stop().animate({width: "120px", top:"-50px" }, 1000, "easeOutExpo");

			/*ADD CLASS TO WITH ANIMATION IMITING */

		}else{
			$(".frontpage-text").css({top: menuHeight+ "px"})
			$("#slyt").stop().animate({width: "230px", top:"0px" }, 1000, "easeInOutExpo");
			$("#ball").stop().animate({left:"130px", top:"-70px", height:"12px"}, 1000, "easeInOutExpo")
		}
	})
	
})




