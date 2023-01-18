$(function () {
    $(window).scroll(function () {
        let slideforindex = document.getElementById("slideforindex");
        let scrollVal = $(this).scrollTop();
        // console.log(scrollVal);
        // $("span.qScrollTop").text(scrollVal);
        //160的高度 加class的時候
        console.log(slideforindex);
        if ((scrollVal >= 850) && $("#slideforindex").hasClass("slide_index")) {
            // console.log("aaa");
            $("#slideforindex").removeClass("slide_index")
            slideforindex.style.display = "block";
        }
        else {
            // console.log("www");
            $("#slideforindex").addClass("slide_index")
            slideforindex.style.display = "none";

        }
    });
});