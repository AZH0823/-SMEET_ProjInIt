$(function () {

    $(".slide_ham").on("click", function () {
        console.log("qwert");
        $(".header_bar").toggleClass("-on")
        $(".user_ham").toggleClass("-on")
    })
})
$(function () {

    $(".indexslide_ham").on("click", function () {
        console.log("ttt");
        $(".indexheader_bar").toggleClass("--on")

        $(".indexuser_ham").toggleClass("--on")
    })
})

$(function () {
    $(".slide_cart").on("click", function () {
        console.log("ttt");
        $(".cart_container").addClass("-carton")
        console.log("sss");
    })
})

$(function () {
    $(".icon_x").on("click", function () {
        console.log("uuu");
        $(".cart_container").toggleClass("-closeon")
        $(".cart_container").removeClass("-carton")
        $(".cart_container").removeClass("-closeon")
        console.log("sss");
    })
})

$(function () {
    $(".indexslide_cart").on("click", function () {
        console.log("ttt");
        $(".cart_container").addClass("-carton")
        console.log("sss");
    })
})

$(function () {
    $(".icon_x").on("click", function () {
        console.log("uuu");
        $(".cart_container").toggleClass("-closeon")
        $(".cart_container").removeClass("-carton")
        $(".cart_container").removeClass("-closeon")
        console.log("sss");
    })
})