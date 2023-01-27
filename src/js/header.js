//slide購物車點擊開關
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

//index購物車點擊開關
$(function () {
    $(".indexslide_cart").on("click", function () {
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

document.getElementsByClassName("indexslide_ham").onclick = function () {
    document.getElementsByClassName("icon_x").setAttribute("disabled", "disabled");
};

// index頁漢堡點擊收合
let indexham_body = document.querySelector('body');
// console.log(ham_body);
$(".indexslide_ham").on("click", function () {
    // console.log("qwert");
    if ($("body").hasClass("ham_body")) {
        $("body").removeClass("ham_body")
        indexham_body.style.overflow = "auto";
    }
    else {
        $("body").addClass("ham_body")
        indexham_body.style.overflow = "hidden";
    }

    $(".indexheader_bar").toggleClass("--on");
    $(".indexuser_ham").toggleClass("--on");
    $("#indexham_bg").toggleClass("indexhide");
    $("#indexham_bg").toggleClass("indexn_none");

})
//index頁燈箱點擊收合

$("#indexham_bg").on("click", function () {
    $(".indexheader_bar").toggleClass("--on");
    $(".indexuser_ham").toggleClass("--on");
    $("#indexham_bg").toggleClass("indexhide");
    $("#indexham_bg").toggleClass("indexn_none");
    indexham_body.style.overflow = "auto";
    if ($("body").hasClass("ham_body")) {
        $("body").removeClass("ham_body")
        indexham_body.style.overflow = "auto";
    }
    else {
        $("body").addClass("ham_body")
        indexham_body.style.overflow = "hidden";
    }
})

// $(".ham_div").click(function () {
//     $("body").toggleClass(".slideoverflow");
//     console.log("aaa");
// });

// slide頁漢堡點擊收合
let slideham_body = document.querySelector('body');
// console.log(ham_body);
$(".slide_ham").on("click", function () {
    // console.log("qwert");
    if ($("body").hasClass("slideham_body")) {
        $("body").removeClass("slideham_body")
        slideham_body.style.overflow = "auto";
        slideham_body.style.overflow = "auto";
    }
    else {
        $("body").addClass("slideham_body")
        slideham_body.style.overflow = "hidden";
    }

    $(".header_bar").toggleClass("-on");
    $(".user_ham").toggleClass("-on");
    $("#ham_bg").toggleClass("hide");
    $("#ham_bg").toggleClass("n_none");

})
//slide頁燈箱點擊收合
//點擊背景時
$("#ham_bg").on("click", function () {
    //漢堡的div會執行關閉動作
    $(".header_bar").toggleClass("-on");
    $(".user_ham").toggleClass("-on");
    //同時bg會加入hide或n_none的css屬性
    $("#ham_bg").toggleClass("hide");
    $("#ham_bg").toggleClass("n_none");
    //宣告的body會加入以下屬性
    slideham_body.style.overflow = "auto";
    //如果有slideham_body或移除時會有屬性
    if ($("body").hasClass("slideham_body")) {
        $("body").removeClass("slideham_body")
        slideham_body.style.overflow = "auto";

    }
    else {
        //如果加入slideham_body時會有屬性
        $("body").addClass("slideham_body")
        slideham_body.style.overflow = "hidden";
    }
})

//漢堡與購物車的開關判斷


// $(function () {

//     $(".indexslide_ham").on("click", function () {
//         $(".indexheader_bar").toggleClass("--on")

//         $(".indexuser_ham").toggleClass("--on")
//     })
// })


//index購物車點擊開關
// $(function () {
//     $(".indexslide_cart").on("click", function () {
//         $(".cart_container").addClass("-carton")
//         setTimeout(function () {
//             $('.cart_bg').removeClass('none');
//         }, 500);
//         $("body").css("overflow", "hidden");
//     })
// })

// $(function () {
//     $(".icon_x").on("click", function () {
//         $(".cart_container").toggleClass("-closeon")
//         $(".cart_container").removeClass("-carton")
//         $(".cart_container").removeClass("-closeon")
//     })
// })

// $(document).mouseup(function (e) {
//     let _con = $('.ham_div'); // 就是你不希望被點到的 div
//     if (!_con.is(e.target) && _con.has(e.target).length === 0) {
//     }
// });

// slide頁漢堡點擊收合
// let ham_body = document.querySelector('body');
// // console.log(ham_body);
// $(".slide_ham").on("click", function () {
//     // console.log("qwert");
//     $(".header_bar").toggleClass("-on");
//     $(".user_ham").toggleClass("-on");
//     $("#ham_bg").toggleClass("hide");
//     $("#ham_bg").toggleClass("n_none");
//     ham_body.style.overflow = "hidden";


// })
//slide頁燈箱點擊收合

// $("#ham_bg").on("click", function () {
//     $(".header_bar").toggleClass("-on");
//     $(".user_ham").toggleClass("-on");
//     $("#ham_bg").toggleClass("hide");
//     $("#ham_bg").toggleClass("n_none");
//     ham_body.style.overflow = "auto";

// })
// function ham_pop() {
//     let ham_bg = document.getElementById('ham_bg');

//     ham_bg.classList.toggle("hide");
//     ham_bg.classList.toggle("n_none");
//     $(".header_bar").toggleClass("-on")
//     $(".user_ham").toggleClass("-on")
// }