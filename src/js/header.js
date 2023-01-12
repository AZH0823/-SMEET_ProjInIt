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

$(function () {
    $(".slide_user").on("click", function () {
        console.log("yyy");

    })
})

// $(function () {
//     $(".abouttab_a").on("click", function () {
//         console.log("www");
//         $(".abouttab").attr("border-bottom: 1px solid #000");
//         console.log("aaa")
//     })
// })

function html_border() {
    let activeNav = document.querySelector('.navtab.active');
    // var activeTab = document.querySelector('.tab.active');
    // console.log(this);
    let currentNav = this;
    // let currentTab = document.querySelector(this.getAttribute('href'));

    // activeNav.classList.remove('active');
    // activeTab.classList.remove('active');
    // currentNav.classList.add('active');
    // currentTab.classList.add('active');

    // let border = document.querySelector('.navtab');
    // border.style.border = "1px solid black";
    // console.log(border);
    // box.style.outline = "3px solid blue";
}
html_border();



// var navTabs = document.querySelectorAll('.nav-tab');
// for (var i = 0; i < navTabs.length; i++) {
//     navTabs[i].addEventListener('click', activeTabHandler)
// }