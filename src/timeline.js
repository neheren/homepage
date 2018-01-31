var $doc, $win, $svg, p;


$(document).ready(function(){
    $doc = $(document);
    $win = $(window);
    $svg = $('#timeline').drawsvg({easing:"easeInOutCubic"});
    // $offset svg. 
    max = $doc.height() - $win.height();
    $timelines = $(".timeline-text-date");


    $win.on('scroll', function() {
        p = Math.max(0, $win.height() + $win.scrollTop() - $svg.position().top)/ ($win.height() + $svg.height() - 200);
        $svg.drawsvg('progress', p);
        
        var incr = Math.floor(p * $timelines.length*1.8);
        
        $timelines.css({opacity: 0});
        
        for(i = 0; i < incr; i++){
            $($timelines[i]).css({opacity: 1});

        }

    });

})
