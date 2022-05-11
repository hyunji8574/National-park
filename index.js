
$(function () {
    // 슬라이더---------------------------------------------
    function mainSlider(target, index) {
        var i = index;
        if (i > $(target).length-1) {
            i = 0;
        } else if (i < 0) {i = $(target).length-1}
        $(target).removeClass("on");
        $(target).eq(i).addClass("on");
        if (target == "#slider li") {
            $("#slider_nav li").removeClass("on");
            $("#slider_nav li").eq(i).addClass("on");
        }
    }

    $(".btn_slider .right").click(function () {
        mainSlider("#slider li", $("#slider li.on").index()+1);
    });

    $(".btn_slider .left").click(function () {
        mainSlider("#slider li", $("#slider li.on").index()-1);
    });

    $("#slider_nav li").click(function () {
        mainSlider("#slider li", $(this).index());
    });

    var autoSlider = setInterval(function () {
        $(".btn_slider .right").trigger("click");
    }, 3000);

    $(".btn_slider .play").css({display: "none"});

    $(".btn_slider .pause").click(function () {
        $(this).css({display: "none"});
        $(".btn_slider .play").css({display: "block"});
        clearInterval(autoSlider);
    });
    $(".btn_slider .play").click(function () {
        $(this).css({display: "none"});
        $(".btn_slider .pause").css({display: "block"});
        autoSlider = setInterval(function () {
            $(".btn_slider .right").trigger("click");
        }, 3000);
    });

    $(".btn_week.left").click(function () {
        mainSlider("#week_slider li", $("#week_slider li.on").index()-1);
    });
    $(".btn_week.right").click(function () {
        mainSlider("#week_slider li", $("#week_slider li.on").index()+1);
    });

    // 공지사항-------------

    $("#news_menu li.list a").click(function () {
        $("#news_menu li").removeClass("on");
        $(this).parent("li").addClass("on");
        $("#news_content > li").removeClass("on");
        $("#news_content > li").eq($(this).parent("li").index()).addClass("on");
        return false;
    });

});