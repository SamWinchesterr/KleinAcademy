$("#btn-navbar").on("click", function () {
    var colapsedMenu = $("#colapsed-menu");

    if (colapsedMenu.is('.colapsed-none')) {
        colapsedMenu.removeClass("colapsed-none").addClass("colapsed-true");
        $(".hc ").css("transform", "rotate(45deg)");
        $(".hb ").css("transform", "rotate(130deg)").css("margin", "-7px");
        $(".ht ").css("opacity", "0");

    } else {
        colapsedMenu.addClass("colapsed-none").removeClass("colapsed-true");
        $(".hc ").css("transform", "rotate(0deg)");
        $(".hb ").css("transform", "rotate(0)").css("margin", "5px");
        $(".ht ").css("opacity", "1");
        
    }
});