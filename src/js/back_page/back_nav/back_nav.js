// ============  back_Nav accrodion ============ //
let chevron_down = document.querySelectorAll(".chevron_down");
let chevron_up = document.querySelectorAll(".chevron_up");
let on = document.querySelectorAll(".side_nav_wrap_text");
let slideContent = $(".side_subNav_wrap");

// console.log(slideContent);
// console.log(on);
// console.log(chevron_down);
// console.log(chevron_up);

for (let i = 0; i < chevron_down.length; i++) {
    on[i].addEventListener("click", function (e) {
        e.preventDefault();
        console.log(i);
        chevron_down[i]
            .classList
            .toggle("-on");
        chevron_up[i]
            .classList
            .toggle("-on");
        // slideContent[i].slideToggle()
        if (i == 2) {
            $(slideContent[0]).slideToggle()
        } else if (i == 5) {
            $(slideContent[1]).slideToggle()
        } else if (i == 6) {
            $(slideContent[2]).slideToggle()
        }
    });
}

