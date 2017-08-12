var mySVG;

$(document).ready(function(){
    sizeCorrectly2();

    mySVG = $("svg").drawsvg({
        duration: 1000,
        easing: 'easeInOutExpo'
    });
})


$( window ).resize(function() {
    sizeCorrectly2();
});

function sizeCorrectly2() {
    $(".content").css("height", window.innerHeight)
    $("#sodaCanvas").css("height", window.innerHeight)
    height = 500;
    $(".centerbox").css({height: height, "margin-top": (window.innerHeight-height)/2, "margin-bottom": (window.innerHeight-height)/2})
    document.getElementById('sodaCanvas').setAttribute('width', window.innerWidth);
    document.getElementById('sodaCanvas').setAttribute('height', window.innerHeight);
}

var rolled = false;
$(window).scroll(function(){
    if(!rolled) {
        if(window.scrollY > $(".centerbox").position().top - 200) {
            $(document).ready(function(){
            mySVG.drawsvg('animate');
            rolled = true;
            });
        }
    }
})




$("#sodaCanvas").ready(function(){

    c = document.getElementById("sodaCanvas");
	frameRate = 60;
	ctx = c.getContext("2d");
	offset = {};
	offset.y = c.offsetTop;
    offset.x = c.offsetLeft;
    console.log(offset)
    
    var middleRect = new rect(window.innerWidth/2 - 250, window.innerHeight/2 - 250, 500, 500, 'white');
    
    sodaRect = new rect(100,100,100,100, "red") 
	sodaRect.clicked(() => sodaRect.animate({width:0, height:0}, easing.easeOutExpo, 1000));
    sodaRect.mouseOver(() => console.log('mouseOver'))
    

    middleRect.clicked(() => middleRect.animate({width:0, height:0}, easing.easeOutExpo, 1000));

    sodaLoop(middleRect.draw)
})


