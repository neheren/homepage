$(document).ready(function(){
    sizeCorrectly2();
})
$( window ).resize(function() {
    sizeCorrectly2();
});

function sizeCorrectly2() {
    $(".content").css("height", window.innerHeight)
    $("#sodaCanvas").css("height", window.innerHeight)
    $(".centerbox").attr( "height", window.innerHeight )
    document.getElementById('sodaCanvas').setAttribute('width', window.innerWidth);
    document.getElementById('sodaCanvas').setAttribute('height', window.innerHeight);
}



$("#sodaCanvas").ready(function(){

    c = document.getElementById("sodaCanvas");
	ctx = c.getContext("2d");
	frameRate = 60;
	offset = {};
	offset.y = c.offsetTop;
    offset.x = c.offsetLeft;
    
    middleRect = new rect(window.innerWidth/2 - 250, window.innerHeight/2 - 250, 500, 500, 'white');
    sodaLoop(middleRect.draw)

})
