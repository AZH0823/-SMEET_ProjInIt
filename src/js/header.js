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
        $(".indexheader_bar").toggleClass("indexham_div --on")
        
        $(".indexuser_ham").toggleClass("indexham_div --on")
    })
})