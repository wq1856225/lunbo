/**
 * Created by wq1856225 on 17-1-16.
 */
$(function () {


var t=$(".o");
var a=t.addClass("l");
var o=0;
a.find("li").eq(0).addClass("b");

 // setInterval(ac,1000);
    function ac () {
        var $u=$(".u");
        var $f=$u.find("li:first");
        var w=$f.width();





        $f.animate({marginLeft:-w+"px"}, 1000, function () {
            o++;
            if (o>=a.find("li").length)
            {
                o=0;
            }

            a.find("li").eq(o).addClass("b").siblings().removeClass("b")

            $f.css({marginLeft:0}).appendTo($u);




        })


    }
    setInterval(ac,2000);
})