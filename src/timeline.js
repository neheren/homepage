var $doc, $win, $svg, p;


$(document).ready(function(){
    $doc = $(document);
    $win = $(window);
    $svg = $('#timeline').drawsvg({easing:"easeInOutCubic"});
    // $offset svg. 
    max = $doc.height() - $win.height();
    
    $win.on('scroll', function() {
        p = Math.max(0, $win.height() + $win.scrollTop() - $svg.position().top)/ ($win.height() + $svg.height());
        console.log(p)
        //p = $win.scrollTop() / max;
        $svg.drawsvg('progress', p);
    });

})
