// $(function () {

//     $(".indexslide_ham").on("click", function () {
//         $(".indexheader_bar").toggleClass("--on")

//         $(".indexuser_ham").toggleClass("--on")
//     })
// })

$(function () {
    $(".slide_cart").on("click", function () {
        // console.log("ttt");
        $(".cart_container").addClass("-carton")
        // console.log("sss");
        setTimeout(function () {
            $('.cart_bg').removeClass('none');
        }, 500);
        $("body").css("overflow", "hidden");
    })
    // 點背景關掉popup
    $('.cart_bg').on('click', function () {
        $('.cart_bg').addClass('none');
        $("body").css("overflow", "auto");
        $(".cart_container").toggleClass("-closeon")
        $(".cart_container").removeClass("-carton")
        $(".cart_container").removeClass("-closeon")
    })
})

$(function () {
    $(".icon_x").on("click", function () {
        // console.log("uuu");
        $(".cart_container").toggleClass("-closeon")
        $(".cart_container").removeClass("-carton")
        $(".cart_container").removeClass("-closeon")
        // console.log("sss");
        $('.cart_bg').addClass('none');
        $("body").css("overflow", "auto");

    })
})

$(function () {
    $(".indexslide_cart").on("click", function () {
        $(".cart_container").addClass("-carton")
    })
})

$(function () {
    $(".icon_x").on("click", function () {
        $(".cart_container").toggleClass("-closeon")
        $(".cart_container").removeClass("-carton")
        $(".cart_container").removeClass("-closeon")
    })
})

$(document).mouseup(function (e) {
    let _con = $('.ham_div'); // 就是你不希望被點到的 div
    if (!_con.is(e.target) && _con.has(e.target).length === 0) {
        // $('#header_bar').removeClass('.-on');
        // console.log("www");
    }
});


$(".ham_div").click(function () {
    $(body).toggleClass(".slideoverflow");
});

let my_block = document.getElementById("logo_block");

window.addEventListener("scroll", function () {

    //console.log( my_block.getBoundingClientRect().top );
    // if (my_block.getBoundingClientRect().top <= 0) {
    //     // my_block.addClass("slide_header");
    //     // console.log('hi');
    // }
});

// slide頁漢堡點擊收合
let ham_body = document.querySelector('body');
// console.log(ham_body);
$(".slide_ham").on("click", function () {
    // console.log("qwert");
    $(".header_bar").toggleClass("-on");
    $(".user_ham").toggleClass("-on");
    $("#ham_bg").toggleClass("hide");
    $("#ham_bg").toggleClass("n_none");
    ham_body.style.overflow = "hidden";


})
//slide頁燈箱點擊收合

$("#ham_bg").on("click", function () {
    $(".header_bar").toggleClass("-on");
    $(".user_ham").toggleClass("-on");
    $("#ham_bg").toggleClass("hide");
    $("#ham_bg").toggleClass("n_none");
    ham_body.style.overflow = "auto";

})
function ham_pop() {
    let ham_bg = document.getElementById('ham_bg');
    // let login = document.getElementById('login');
    // let body = document.querySelector('body');
    //打開popup
    // console.log("sss");


    ham_bg.classList.toggle("hide");
    ham_bg.classList.toggle("n_none");
    $(".header_bar").toggleClass("-on")
    $(".user_ham").toggleClass("-on")
}



// index頁漢堡點擊收合
let indexham_body = document.querySelector('body');
// console.log(ham_body);
$(".indexslide_ham").on("click", function () {
    // console.log("qwert");
    indexham_body.style.overflow = "auto";

    $(".indexheader_bar").toggleClass("--on");
    $(".indexuser_ham").toggleClass("--on");
    $("#indexham_bg").toggleClass("indexhide");
    $("#indexham_bg").toggleClass("indexn_none");
    // let indexhamSlide = $(".indexslide_ham");
    // console.log(e.target)
    // if (e.target === indexhamSlide[0] || e.target == "ii_ham") {
    //     console.log(e.target.style.overflow);
    //     if (e.target.style.overflow == "auto") {
    //         indexham_body.style.overflow = "hidden";
    //     } else {
    //         $(indexhamSlide).removeAttr("overflow", "hidden");
    //         // indexham_body.style.overflow = "";
    //     }
    // }
    // if(e.target){

    // }

    // if ("") "xxx" else{"xxx"}; 

})
$("indexslide_ham").on("click", function () {

})
//index頁燈箱點擊收合

$("#indexham_bg").on("click", function () {
    $(".indexheader_bar").toggleClass("--on");
    $(".indexuser_ham").toggleClass("--on");
    $("#indexham_bg").toggleClass("indexhide");
    $("#indexham_bg").toggleClass("indexn_none");
    indexham_body.style.overflow = "auto";
})