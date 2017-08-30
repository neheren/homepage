var mySVG;

$(document).ready(function(){
    sizeCorrectly2();

    mySVG = $("svg").drawsvg({
        duration: 1000,
        easing: 'easeInOutExpo'
    });

    $(".thumbnail").click(function(){
        console.log(this)
        $(".exit").animate({opacity:1}, 1000, "easeOutExpo")
        var link = "iframe/" + $(this).attr("article")
        $("#iframe-content").remove()
        $(".portfolio-content").animate({height:180*3+4 +"px", opacity:1}, 1000, "easeOutExpo", function() {
            $(".portfolio-content").append('<iframe id="iframe-content" width="100%" height="100%" src="'+link+'" frameborder="0" allowfullscreen></iframe>')
            $("#iframe-content").append('<div id="loader" style="color:white">loading</div>')
        })
    })

    $(".exit").click(function(){
        $(".exit").animate({opacity:0}, 1000, "easeOutExpo")
        $(".portfolio-content").animate({height:0 +"px", opacity:0}, 1000, "easeOutExpo", function() {
            $("#iframe-content").remove()
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
})


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
    if(!rolled) {
        if(window.scrollY > $("#projekter").position().top - 200) {
            console.log("!")
            $(document).ready(function(){
                animateMenu()
                rolled = true;
            });
        }
    }
})

function animateMenu(){
    var menuIndex = 0;
    setInterval(()=>{
        $($(".thumbnail")[menuIndex]).animate({opacity:1}, 2000, "easeInOutExpo")
        menuIndex ++;
    },200)
}



// $("#sodaCanvas").ready(function(){

//     c = document.getElementById("sodaCanvas");
// 	frameRate = 60;
// 	ctx = c.getContext("2d");
// 	offset = {};
// 	offset.y = c.offsetTop;
//     offset.x = c.offsetLeft;
//     console.log(offset)
    
//     var middleRect = new rect(window.innerWidth/2 - 250, window.innerHeight/2 - 250, 500, 500, 'white');
    
//     sodaRect = new rect(100,100,100,100, "red") 
// 	sodaRect.clicked(() => sodaRect.animate({width:0, height:0}, easing.easeOutExpo, 1000));
//     sodaRect.mouseOver(() => console.log('mouseOver'))
    

//     middleRect.clicked(() => middleRect.animate({width:0, height:0}, easing.easeOutExpo, 1000));

//     sodaLoop(middleRect.draw)
// })


