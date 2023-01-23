$(function () {
    $(window).scroll(function () {
        let slideforindex = document.getElementById("slideforindex");
        let indexforslide = document.getElementById("indexforslide");
        let scrollVal = $(this).scrollTop();
        // console.log(scrollVal);
        // $("span.qScrollTop").text(scrollVal);
        //160的高度 加class的時候
        // console.log(slideforindex);
        if ((scrollVal >= 850)) {
            // console.log("aaa");
            $("#slideforindex").removeClass("slide_index")
            // slideforindex.style.display = "block";
            // indexforslide.style.display = "none";
            slideforindex.classList.remove('hide')
            indexforslide.classList.add('hide')

            // indexforslide.classList.add('hide')
        }
        else {
            // console.log("www");
            $("#slideforindex").addClass("slide_index")
            // slideforindex.style.display = "none";
            // indexforslide.style.display = "flex";
            slideforindex.classList.add('hide')

            // indexforslide.classList.add('show')

            indexforslide.classList.remove('hide')



        }
    });
});