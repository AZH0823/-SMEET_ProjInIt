// 網頁版 會員icon
let indexslide_user = document.querySelector('.indexslide_user');
// 網頁版 會員中心hover
let user_pop_index = document.querySelector('.user_pop_index');
// 會員登入hover的收藏的右上角紅圈圈數字
let cart_num_index = document.getElementById('cart_num_index');
let cart_num_ham_index = document.getElementById('cart_num_ham_index');
indexslide_user.addEventListener('click',function(e){
    e.preventDefault();
    login_check();
})

let timeoutId;
// hover
indexslide_user.addEventListener('mouseover',function(){
    // // 清除上一次的 timeout
    // clearTimeout(timeoutId);
    //hover 不跳彈窗
    $.ajax({            
        method: "POST",
        url: "php/frontpage/login_check.php",
        data:{},            
        dataType: "text",
        success: function (response) {
            if(response == ""){
                //尚未登入->跳出會員登入畫面
                // login_pop();
            }else{
                //已有登入的話 執行.....
                // 會員icon顯示
                user_pop_index.classList.remove('none');
                // ==========在select一次收藏===========
                let collect_s_mID = localStorage.getItem("member_ID");
                $.ajax({            
                    method: "POST",
                    url: "php/frontpage/member/collect_s.php",
                    data:{
                        member_ID:collect_s_mID,
                    },            
                    dataType: "json",
                    success: function (response) {
                        if(response == "無資料"){
                            return;
                        }else{
                            // console.log(response.length);
                            cart_num_index.classList.remove('none');
                            cart_num_index.innerHTML = response.length;
                            cart_num_ham_index.classList.remove('none');
                            cart_num_ham_index.innerHTML = response.length;
                        }
                    },
                    error: function(exception) {
                        alert("數據載入失敗: " + exception.status);
                    }
                });
                // ====================================
            }              
        },
        error: function(exception) {
            alert("數據載入失敗: " + exception.status);
        }
    });
})
user_pop_index.addEventListener('mouseleave',function(){
    // 延遲一段時間後執行 mouseleave 事件
    timeoutId = setTimeout(function() {
        user_pop_index.classList.add('none');
    }, 300);
})

// 網頁版登出
let userpop_log_index = document.querySelector('.userpop_log_index');
// 手機板登出登入
let indexlog_ham = document.querySelector('.indexlog_ham');
userpop_log_index.addEventListener('click',function(e){
    e.preventDefault();
    e.stopPropagation();
    $.ajax({            
        method: "POST",
        url: "php/frontpage/logout.php",
        data:{},            
        dataType: "text",
        success: function (response) {
            // alert("登出成功"); 
            document.querySelector('.logout_pop_index').classList.remove('none');
            setTimeout(function(){
                document.querySelector('.logout_pop_index').classList.add('none');
            },2000);
            localStorage.removeItem('member_ID');
            indexlog_ham.innerHTML = "登入";
            // localStorage.clear();
            location=location;
        },
        error: function(exception) {
            alert("數據載入失敗: " + exception.status);
        }
      });
    });

// 手機板登入登出
indexlog_ham.addEventListener('click',function(e){
    e.preventDefault();
    e.stopPropagation();
    // 登入
    if(indexlog_ham.innerHTML == "登入"){
        login_pop();
    }else{
        // 登出
        $.ajax({            
            method: "POST",
            url: "php/frontpage/logout.php",
            data:{},            
            dataType: "text",
            success: function (response) {
                // alert("登出成功"); 
                document.querySelector('.logout_pop_index').classList.remove('none');
                setTimeout(function(){
                    document.querySelector('.logout_pop_index').classList.add('none');
                },2000);
                localStorage.removeItem('member_ID');
                indexlog_ham.innerHTML = "登入";
                // localStorage.clear();
                location=location;
            },
            error: function(exception) {
                alert("數據載入失敗: " + exception.status);
            }
        });
    }
    
});

let member_li_1_index = document.querySelector('.member_li_1_index');
let member_li_2_index = document.querySelector('.member_li_2_index');
let member_li_3_index = document.querySelector('.member_li_3_index');
let member_li_4_index = document.querySelector('.member_li_4_index');

let indexslide_ham = document.querySelector('.indexslide_ham');
// 手機的漢堡線點擊  但不跳彈窗
indexslide_ham.addEventListener('click',function(e){
    // console.log('qqq')
    // e.preventDefault();
    // login_check();
    $.ajax({            
        method: "POST",
        url: "php/frontpage/login_check.php",
        data:{},            
        dataType: "text",
        success: function (response) {
            if(response == ""){
                // 尚未登入
                // 取消點擊會員中心的連結 跳出會員登入視窗
                member_li_1_index.addEventListener('click',function(){
                    login_pop();
                })
                member_li_2_index.addEventListener('click',function(){
                    login_pop();
                })
                member_li_3_index.addEventListener('click',function(){
                    login_pop();
                })
                member_li_4_index.addEventListener('click',function(){
                    login_pop();
                })
            }else{
                // 已有登入的話 執行.....
                // 會員icon顯示
                let user_pop_index = document.querySelector('.user_pop');
                user_pop_index.classList.remove('none');
                // 手機版登入變登出
                indexlog_ham.innerHTML = "登出";
                // 可以點擊會員中心的連結
                member_li_1_index.addEventListener('click',function(){
                    location.href="member.html#member";
                })
                member_li_2_index.addEventListener('click',function(){
                    location.href="member.html#list";
                })
                member_li_3_index.addEventListener('click',function(){
                    location.href="member.html#collection";
                })
                member_li_4_index.addEventListener('click',function(){
                    location.href="member.html#faq";
                })
                // ==========在select一次收藏===========
                let collect_s_mID = localStorage.getItem("member_ID");
                $.ajax({            
                    method: "POST",
                    url: "php/frontpage/member/collect_s.php",
                    data:{
                        member_ID:collect_s_mID,
                    },            
                    dataType: "json",
                    success: function (response) {
                        if(response == "無資料"){
                            return;
                        }else{
                            // console.log(response.length);
                            cart_num_index.classList.remove('none');
                            cart_num_index.innerHTML = response.length;
                            cart_num_ham_index.classList.remove('none');
                            cart_num_ham_index.innerHTML = response.length;
                        }
                    },
                    error: function(exception) {
                        alert("數據載入失敗: " + exception.status);
                    }
                });
            }              
        },
        error: function(exception) {
            alert("數據載入失敗: " + exception.status);
        }
    });
})

// 讓首頁的登入時 手機板也會改變狀態
let login_ajax = document.getElementById('login_ajax');

login_ajax.addEventListener('click',function(){
    let account = document.getElementById('login_account');
    let pwd = document.getElementById('login_pwd');
    let login_bg = document.getElementById('login_bg');
    let login = document.getElementById('login');
    let body = document.querySelector('body');
    account.nextElementSibling.classList.remove('appear');
    pwd.nextElementSibling.nextElementSibling.classList.remove('appear');
    if (account.value == '') {
        return false;
    }
    if (pwd.value == '') {
        return false;
    }  
    $.ajax({
        method: "POST",
        url: "php/frontpage/login.php",
        data: {
            account: account.value,
            pwd: pwd.value
        },
        dataType: "text",
        success: function (response) {

            if (response == "Y") {
                // console.log('ttt');
                login_bg.classList.add('none');
                body.style.overflow = "auto";
                //取得會員ID
                $.ajax({            
                    method: "POST",
                    url: "php/frontpage/member_id.php",
                    data:{},            
                    dataType: "text",
                    success: function (response) {                           
                        // console.log(typeof(response));
                        localStorage.setItem("member_ID", response);
                        let collect_s_mID = response;
                        $.ajax({            
                            method: "POST",
                            url: "php/frontpage/member/collect_s.php",
                            data:{
                                member_ID:collect_s_mID,
                            },            
                            dataType: "json",
                            success: function (response) {
                                if(response == "無資料"){
                                    return;
                                }else{
                                    // console.log('ggg');
                                    // console.log(response.length);
                                    let cart_num_index = document.getElementById('cart_num_index');
                                    let cart_num_ham_index = document.getElementById('cart_num_ham_index');
                                    cart_num_index.classList.remove('none');
                                    cart_num_index.innerHTML = response.length;
                                    cart_num_ham_index.classList.remove('none');
                                    cart_num_ham_index.innerHTML = response.length;
                                }
                            },
                            error: function(exception) {
                                alert("數據載入失敗: " + exception.status);
                            }
                        });
                    },
                    error: function(exception) {
                        alert("數據載入失敗: " + exception.status);
                    }
                });
                // 手機版登入變登出
                log_ham.innerHTML = "登出";
                member_li_1.addEventListener('click',function(){
                    location.href="member.html#member";
                })
                member_li_2.addEventListener('click',function(){
                    location.href="member.html#list";
                })
                member_li_3.addEventListener('click',function(){
                    location.href="member.html#collection";
                })
                member_li_4.addEventListener('click',function(){
                    location.href="member.html#faq";
                })
                // 首頁的手機板變登出
                indexlog_ham.innerHTML = "登出";
                // 可以點擊會員中心的連結
                member_li_1_index.addEventListener('click',function(){
                    location.href="member.html#member";
                })
                member_li_2_index.addEventListener('click',function(){
                    location.href="member.html#list";
                })
                member_li_3_index.addEventListener('click',function(){
                    location.href="member.html#collection";
                })
                member_li_4_index.addEventListener('click',function(){
                    location.href="member.html#faq";
                })
                // history.go(0);
            } else {
                account.nextElementSibling.classList.add('appear');
                pwd.nextElementSibling.nextElementSibling.classList.add('appear');
            }

        },
        error: function (exception) {
            alert("發生錯誤: " + exception.status);
        }
    });
});