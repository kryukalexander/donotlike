$(document).ready(function(){function e(){function e(e){$(".gallery-item").eq(e).animate({opacity:"show"},1e3)}function t(e){$(".gallery-item").eq(e).animate({opacity:"hide"},1e3)}function n(){o||(clearInterval(a),t(l),l++,l>$(".gallery-item").length-1&&(l=0),e(l),$(".ind").eq(l).prop("checked",!0),a=setInterval(n,7e3))}function i(){o||(clearInterval(a),t(l),l--,0>l&&(l=$(".gallery-item").length-1),e(l),$(".ind").eq(l).prop("checked",!0),a=setInterval(n,7e3))}var a,l=$(".ind:checked").index(".ind"),o=!1;e(l),a=setInterval(n,7e3),$("#minus").click(function(){$(this).animate({left:"-20px"}),$(this).animate({left:"0"}),i()}),$("#plus").click(function(){$(this).animate({right:"-20px"}),$(this).animate({right:"0"}),n()}),$(".ind").click(function(){clearInterval(a),t(l),l=$(this).index(".ind"),e(l),a=setInterval(n,7e3)}),$(".gallery-item").click(function(){var e=$(this).index(".gallery-item"),t=$(".vid-modal").eq(e),i=$(t).find("video");clearInterval(a),o=!0,$(t).css("display","flex"),i.get(0).play(),i.get(0).currentTime=0,$(t).click(function(){clearInterval(a),i.get(0).pause(),$(t).css("display","none"),o=!1,a=setInterval(n,7e3)})})}$(".drag").draggable(),$(".drop").droppable({drop:function(){$(".modal").animate({opacity:"hide"},500),$("header").animate({opacity:"show"},750),$("main").animate({opacity:"show"},750),$("footer").animate({opacity:"show"},750)}}),$(".wrong_drop").droppable({drop:function(){$(".drag").css("top","0px").css("left","0"),$(".instruction").hide(),$(".warning").show()}}),e(),$(".donate-form").submit(function(){function e(e,t){if(""!=e)var n="&"+t+"="+e;else n="";return n}var t,n,i,a,l,o="http://otkazniki.ru/donation/?dtype=regular&target=1";n=e($("#sum").val(),"sum"),i=e($("#tel").val(),"phone"),l=e($("#mail").val(),"email"),a=e($("#name").val(),"fio"),t=o+n+i+a+l,window.open(t)}),$(".volunteer").click(function(){window.open("http://otkazniki.ru/signup.php")})});