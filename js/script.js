$(".drag").draggable(),$(".drop").droppable({drop:function(){$(".modal").animate({opacity:"hide"},500),$("header").animate({opacity:"show"},750),$("main").animate({opacity:"show"},750),$("footer").animate({opacity:"show"},750)}});