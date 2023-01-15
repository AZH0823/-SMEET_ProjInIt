// 登入檢查
function login_check(){    
    $.ajax({            
        method: "POST",
        url: "php/frontpage/login_check.php",
        data:{},            
        dataType: "text",
        success: function (response) {
            if(response == ""){
                //尚未登入->跳出會員登入畫面
                login_pop();
            }else{
                //已有登入的話 執行.....
                // 會員icon顯示
                let user_pop = document.querySelector('.user_pop');
                user_pop.classList.remove('none');
            }              
        },
        error: function(exception) {
            alert("數據載入失敗: " + exception.status);
        }
    });
}

//會員登入popup
function login_pop(){
    let login_bg = document.getElementById('login_bg');
    let login = document.getElementById('login');
    let body = document.querySelector('body');
    //打開popup
    login_bg.classList.remove("none");
    login.classList.remove("none");
    body.style.overflow = "hidden";
    //關掉popup
    login_bg.addEventListener('click',function(){
        login_bg.classList.add('none');
        body.style.overflow = "auto";
    })
    login.addEventListener('click',function(e){
        e.stopPropagation();
    })
}

//取得會員ID
function get_Member_ID(){
    $.ajax({            
        method: "POST",
        url: "php/frontpage/member_id.php",
        data:{},            
        dataType: "text",
        success: function (response) {                           
            // console.log(typeof(response));
            localStorage.setItem("member_ID", response);
        },
        error: function(exception) {
            alert("數據載入失敗: " + exception.status);
        }
    });
}