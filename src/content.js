var mySVG;
var contentOpen = false;

$(document).ready(function(){
    $("video").get(0).play()
    sizeCorrectly2();

    mySVG = $("svg").drawsvg({
        duration: 1000,
        easing: 'easeInOutExpo'
    });

    $(".thumbnail").click(function(){
        console.log(this)
        var article = $(this).attr("article");
        $(".exit").animate({opacity:1}, 1000, "easeOutExpo")
        var link = "/iframe/" + article
        $("#iframe-content").remove()
        $(".portfolio-content").animate({height:180*3+4 +"px", opacity:1}, 1000, "easeOutExpo", function() {
            $(".portfolio-content").append('<iframe id="iframe-content" width="100%" height="100%" src="'+link+'" frameborder="0" allowfullscreen></iframe>')
            $("#iframe-content").append('<div id="loader" style="color:white">loading</div>')
            switchPage('/projects/'+ article, article);
            contentOpen = true;        
        })
    })

    $(".exit").click(function(){
        switchPage('/', 'home');
        $(".exit").animate({opacity:0}, 1000, "easeOutExpo")
        $(".portfolio-content").animate({height:0 +"px", opacity:0}, 1000, "easeOutExpo", function() {
            $("#iframe-content").remove()
            contentOpen = false;
        })
    })

    var svgIndex = 0;
    setInterval(()=> {
        var svgs = $(".animatingIcon");
        var l = svgs.length;
        var current = $(".animatingIcon")[svgIndex];
        $(current).animate({width: "100px", opacity: 1}, 1000, "easeOutExpo", function(){
            $(current).animate({width: "0px", opacity: 0}, 500, "easeInOutExpo")
        })
        svgIndex++;
        
        if(svgIndex >= l){
            svgIndex = 0;
        }
    },1500)

    $("body").click(closeContent);
})

function closeContent(){
    console.log(contentOpen)
    if(contentOpen){
        $('.exit').click();
    }
}


$( window ).resize(function() {
    sizeCorrectly2();
});

function sizeCorrectly2() {
    $(".content").css("height", window.innerHeight)
    $("#sodaCanvas").css("height", window.innerHeight)
    height = 540;
    $(".centerbox").css({height: height, "margin-top": (window.innerHeight-height)/2, "margin-bottom": (window.innerHeight-height)/2})
}

var rolled = false;
$(window).scroll(function(){
    if(window.scrollY > $("#projekter").position().top - 200) {
        if(!rolled) {
            console.log("!")
            $(document).ready(function(){
                animateMenu()
                rolled = true;  
            });
        }
    }else{
        closeContent();
    }
})


function animateMenu(){
    var menuIndex = 0;
    setInterval(()=>{
        $($(".thumbnail")[menuIndex]).animate({opacity:1}, 2000, "easeInOutExpo")
        menuIndex ++;
    },200)
}

function switchPage(url, page) {
    window.history.pushState(page, 'Title', url);
}

window.onpopstate = function(event) {
    console.log(event.state);
};

function scrollNow(scrollToObj){
	hideMenu()
	$('html, body').animate({
		scrollTop: $(scrollToObj).position().top
	}, 1000, "easeInOutExpo");
}

function openPortfolio(id){
    console.log('id:')
    console.log(id)
	$($('.thumbnail')[id]).click()
}