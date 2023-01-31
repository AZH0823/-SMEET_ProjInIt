//取得會員id
let member_ID = localStorage.getItem("member_ID");
let login_app = Vue.createApp({
    data() {
        return {
            //帳號、密碼格式
            format: {
                error_acc: "*格式錯誤",
                error_pwd: "*請填寫正確"
            },
            //儲存會員註冊資料
            users: [],
            //會員註冊
            user_add: {
                account: "",
                pwd: ""
            },
            //會員登入
            user_enter: {
                account: "",
                pwd: ""
            },
            Email_token:{}
        }
    },
    computed: {},
    mounted() {},
    methods: {
        //tab切換-註冊會員
        add_tab() {
            this.$refs.join_ok.classList.add('none');
            this.$refs.tab.classList.remove('none');
            this.$refs.add_tab.classList.remove('none');
            this.$refs.enter_tab.classList.add('none');
            this.$refs.tab1.classList.add('tab_line');
            this.$refs.tab2.classList.remove('tab_line');
            this.$refs.forget.classList.add('none');
            // this.$refs.or.classList.remove('none');
            // this.$refs.three.classList.remove('none');
            this.$refs.forget_change.classList.add('none');
            this.$refs.update_ok.classList.add('none');
        },
        //tab切換-會員登入
        enter_tab() {
            this.$refs.join_ok.classList.add('none');
            this.$refs.tab.classList.remove('none');
            this.$refs.add_tab.classList.add('none');
            this.$refs.enter_tab.classList.remove('none');
            this.$refs.tab1.classList.remove('tab_line');
            this.$refs.tab2.classList.add('tab_line');
            this.$refs.forget.classList.add('none');
            // this.$refs.or.classList.remove('none');
            // this.$refs.three.classList.remove('none');
            this.$refs.forget_change.classList.add('none');
            this.$refs.update_ok.classList.add('none');
        },
        //input 驗證格式_密碼
        check_pwd(e) {
            // console.log(e.target.value.length);
            if(e.target.value !== ""){
                e.target.nextElementSibling.nextElementSibling.classList.remove('appear');
                if (e.target.value.length <= 16 && e.target.value.length >= 8) {} else {
                    console.log(e.target)
                    e.target.nextElementSibling.nextElementSibling.classList.add('appear');
                }
            }
        },
        //確認email格式
        emailRule(str){
            let emailRule =  new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
            return emailRule.test(str);
        },
        checkEmail(e){
            // 電子信箱驗證格式
            // console.log(this.emailRule(e.target.value));
            if(e.target.value !== ""){
                e.target.nextElementSibling.classList.remove('appear');
                if (this.emailRule(e.target.value) == true) {
                }else{
                    e.target.nextElementSibling.classList.add('appear');
                }
            }
            return this.emailRule(e.target.value);  //true or false
        },
        checkEmail_join(str){
            // 電子信箱驗證格式
            // console.log(this.emailRule(e.target.value));
            let a = this.emailRule(str);
            // console.log(a);
            return a;  //true or false
        },
        //input 驗證格式_帳號
        //眼睛icon
        eye_icon(e) {
            let pwd_type = e.target.previousSibling;
            // console.log(pwd_type.type);
            e.stopPropagation();
            if (pwd_type.type == "password") {
                pwd_type.type = "text";
                e.target.classList.remove('fa-eye-slash');
                e.target.classList.add('fa-eye');
            } else {
                pwd_type.type = "password";
                e.target.classList.add('fa-eye-slash');
                e.target.classList.remove('fa-eye');
            }
        },
        //忘記密碼
        forget_tab() {
            this.$refs.join_ok.classList.add('none');
            this.$refs.tab.classList.add('none');
            this.$refs.add_tab.classList.add('none');
            this.$refs.enter_tab.classList.add('none');
            // this.$refs.or.classList.add('none');
            // this.$refs.three.classList.add('none');
            this.$refs.forget.classList.remove('none');
            this.$refs.forget_change.classList.add('none');
            this.$refs.update_ok.classList.add('none');
        },

        //當立即加入按下
        member_add() {
            console.log(users);
            //把會員帳號密碼 資料寫到陣列
            this.user_add.id = new Date().getTime();
            this.users.push(this.user_add);
            this.user_add = {};
            // 1.確認都有填寫
            // 2.從資料庫撈資料比對有沒有一樣的帳號
            // 3.成功
            // 4.發送驗證信(重新登入)
            // 5.成為會員(跳下個畫面)
            // 6.關掉POP
        },
        // 當會員登入按下
        member_enter() {
            // 1.確認都有填寫
            // 2.資料庫比較
            // 3.登入成功畫面→關掉pop
            // 3.帳號或密碼錯誤訊息跳出
        },

        //input 擋掉% 
        // 會員登入AJAX
        login_ajax() {
            let account = document.getElementById('login_account');
            let pwd = document.getElementById('login_pwd');
            let login_bg = document.getElementById('login_bg');
            let login = document.getElementById('login');
            let body = document.querySelector('body');
            let login_ok_popup = document.getElementById('login_ok_popup');
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
                        login_ok_popup.classList.remove('none');
                        setTimeout(function(){
                            login_ok_popup.classList.add('none');
                        },2000);
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
                                            let cart_num = document.getElementById('cart_num');
                                            let cart_num_ham = document.getElementById('cart_num_ham');
                                            cart_num.classList.remove('none');
                                            cart_num.innerHTML = response.length;
                                            cart_num_ham.classList.remove('none');
                                            cart_num_ham.innerHTML = response.length;
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
                        // indexlog_ham.innerHTML = "登出";
                        // // 可以點擊會員中心的連結
                        // member_li_1_index.addEventListener('click',function(){
                        //     location.href="member.html#member";
                        // })
                        // member_li_2_index.addEventListener('click',function(){
                        //     location.href="member.html#list";
                        // })
                        // member_li_3_index.addEventListener('click',function(){
                        //     location.href="member.html#collection";
                        // })
                        // member_li_4_index.addEventListener('click',function(){
                        //     location.href="member.html#faq";
                        // })
                        // history.go(0);
                        
                        // ==========在select一次收藏===========
                        
                    } else {
                        account.nextElementSibling.classList.add('appear');
                        pwd.nextElementSibling.nextElementSibling.classList.add('appear');
                    }

                },
                error: function (exception) {
                    alert("發生錯誤: " + exception.status);
                }
            });
        },
        //註冊成功畫面
        join_success(){
            this.$refs.join_ok.classList.remove('none');
            this.$refs.tab.classList.add('none');
            this.$refs.add_tab.classList.add('none');
            this.$refs.enter_tab.classList.add('none');
            // this.$refs.or.classList.add('none');
            // this.$refs.three.classList.add('none');
            this.$refs.forget.classList.add('none');
            this.$refs.forget_change.classList.add('none');
            this.$refs.update_ok.classList.add('none');

        },
        //重置密碼成功畫面
        update_ok(){
            this.$refs.join_ok.classList.add('none');
            this.$refs.tab.classList.add('none');
            this.$refs.add_tab.classList.add('none');
            this.$refs.enter_tab.classList.add('none');
            // this.$refs.or.classList.add('none');
            // this.$refs.three.classList.add('none');
            this.$refs.forget.classList.add('none');
            this.$refs.forget_change.classList.add('none');
            this.$refs.update_ok.classList.remove('none');
        },
        //註冊成功點擊確定關掉popup
        add_ok(){
            let login_bg = document.getElementById('login_bg');
            let login = document.getElementById('login');
            let body = document.querySelector('body');
            //關掉popup
            // login_bg.classList.add('none');
            // body.style.overflow = "auto";
            // 重新登入打開Login
            this.enter_tab();
            
        },
        //會員註冊ajax
        join_ajax(){
            let account = document.getElementById('join_account').value;
            let pwd = document.getElementById('join_pwd').value;
            let pwd_again = document.getElementById('join_again').value;
            let login_news_yes2 = document.getElementById('login_news_yes2');
            let login_news_yes2_p = document.getElementById('login_news_yes2_p');
            let that = this ;
            if( login_news_yes2.checked == false){
                login_news_yes2_p.classList.add('nocheck');
                return false;
            }
            if( login_news_yes2.checked ){
                login_news_yes2_p.classList.remove('nocheck');
            }
            if (account == '') {
                return false;
            }
            //驗證信箱格式
            if(this.checkEmail_join(account) == false){
                return false;
            };
            
            if (pwd == '' || ( pwd.length<8 )) {

                return false;
            }
            if (pwd == pwd_again){
                $.ajax({
                    method: "POST",
                    url: "php/frontpage/join.php",
                    data: {
                        account: account,
                        pwd: pwd
                    },
                    dataType: "text", 
                    success: function (response) {
                        if (response == "N") {
                            //帳號不重複
                            // alert('註冊成功');
                            
                            that.join_success();
                        } else {
                            // 帳號重複
                            // console.log("帳號重複");
                            document.getElementById('join_account').nextElementSibling.classList.add('appear');
                        }
                    },
                    error: function (exception) {
                        alert("發生錯誤: " + exception.status);
                    }
                });
            }
        },
        // 忘記密碼=====================
        // 傳送驗證碼
        send_token(){
            // 先驗證信箱是否存在
            // 有存在就update multiLogin 欄位 塞一筆隨機token進去 response回傳token 寄email 給驗證碼
            // 不存在就跳錯誤訊息
            let email = document.getElementById('forget_acc').value;
            let token = "";
            if(email == ""){
                return;
            }
            $.ajax({
                method: "POST",
                url: "php/frontpage/forget_check_email.php",
                data: {
                    Email: email
                },
                dataType: "text", 
                success: (response) => {
                    if (response == "N") {
                        //沒有此帳號
                        alert('沒有此帳號');
                        return ;
                    } else {
                        // 有此帳號
                        // 回傳token
                        // 寄email
                        token = response ; 
                        // console.log(token);
                        Email.send({
                            Host : "smtp.elasticemail.com",
                            Username : "smeettgd103@gmail.com",
                            Password : "29703297B074F7EC73E724DC5D0F064FD0EF",
                            To : email,
                            From : "SMEET驗證碼<smeettgd103@gmail.com>",
                            Subject : "SMEET驗證碼",
                            Body : "<h6>驗證碼:</h6><p>"+token+"</p>"
                        }).then(
                            message => alert(message)
                        );
                    }
                },
                error: function (exception) {
                    alert("發生錯誤: " + exception.status);
                }
            });
            
        },
        check_token(){
            // 檢查驗證碼 token 
            // 通過跳重製密碼畫面
            let that = this;
            let email = document.getElementById('forget_acc').value;
            let input_token = document.getElementById('input_token').value;
            if(email == ""){
                return ;
            }
            if(input_token == ""){
                return ; 
            }
            $.ajax({
                method: "POST",
                url: "php/frontpage/forget_check_email.php",
                data: {
                    Email: email
                },
                dataType: "text", 
                success: (response) => {
                    if (response == "N") {
                        //沒有此帳號
                        alert('沒有此帳號');
                        return ;
                    } else {
                        // 有此帳號
                        // 比較token
                        if(input_token !== response){
                            alert('請輸入正確的驗證碼');
                        }else{
                            // alert('輸入正確');
                            that.update_pwd_tab();
                        }
                    }
                },
                error: function (exception) {
                    alert("發生錯誤: " + exception.status);
                }
            });

        },
        update_forget_pwd(){
            let change = true ;
            // 重置密碼(忘記密碼)
            let email = document.getElementById('forget_acc');
            let update_account = document.getElementById('update_account');
            let update_pwd = document.getElementById('update_pwd');
            let update_again = document.getElementById('update_again');
            if(email.value !== update_account.value){
                update_account.nextElementSibling.classList.add('appear');
                change = false ;
            };
            if(update_pwd.value !== update_again.value){
                update_pwd.nextElementSibling.nextElementSibling.classList.add('appear');
                update_again.nextElementSibling.nextElementSibling.classList.add('appear');
                change = false ;
            }
            if(update_pwd.value == "" || update_again.value == ""){
                update_pwd.nextElementSibling.nextElementSibling.classList.add('appear');
                update_again.nextElementSibling.nextElementSibling.classList.add('appear');
                change = false ;
            }
            if(change){
                //更改密碼
                let that = this ;
                $.ajax({
                    method: "POST",
                    url: "php/frontpage/forget_change_pwd.php",
                    data: {
                        email:update_account.value,
                        update_pwd: update_pwd.value
                    },
                    dataType: "text",
                    success: function (response) {
                        // alert('修改成功,請重新登入');
                        that.update_ok()
                        // that.enter_tab();
                        // 修改完成popup
                        // that.$refs.updateOK.classList.remove('none');
                        //       setTimeout(function(){
                        //           that.$refs.updateOK.classList.add('none');
                        //       },2000);
                      },
                    error: function (exception) {
                        alert("發生錯誤: " + exception.status);
                    }
                });
              }else{
                return false;
  
              }
        },
        // 重置密碼的tab
        update_pwd_tab(){
            this.$refs.join_ok.classList.add('none');
            this.$refs.tab.classList.add('none');
            this.$refs.add_tab.classList.add('none');
            this.$refs.enter_tab.classList.add('none');
            // this.$refs.or.classList.add('none');
            // this.$refs.three.classList.add('none');
            this.$refs.forget.classList.add('none');
            this.$refs.forget_change.classList.remove('none');
            this.$refs.update_ok.classList.add('none');
        }
    }
});
login_app.mount("#login");
// ======會員icon 登入
// 點擊
// 網頁版部分
let user_pop = document.querySelector('.user_pop');
let user_icon = document.querySelector('.slide_user');
let userpop_log = document.querySelector('.userpop_log');

// 手機板部分
let member_li = document.querySelectorAll('.member_li');  //陣列
let log_ham = document.querySelector('.log_ham'); //手機的登出登入
let slide_ham = document.querySelector('.slide_ham'); //手機的漢堡

// 手機板的會員登出
let member_li_1 = document.querySelector('.member_li_1');
let member_li_2 = document.querySelector('.member_li_2');
let member_li_3 = document.querySelector('.member_li_3');
let member_li_4 = document.querySelector('.member_li_4');

// 會員中心的icon點擊
user_icon.addEventListener('click',function(e){
    // console.log('qqq')
    // e.preventDefault();
    login_check();
})
// 手機的漢堡線點擊  但不跳彈窗
slide_ham.addEventListener('click',function(e){
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
                member_li_1.addEventListener('click',function(){
                    login_pop();
                })
                member_li_2.addEventListener('click',function(){
                    login_pop();
                })
                member_li_3.addEventListener('click',function(){
                    login_pop();
                })
                member_li_4.addEventListener('click',function(){
                    login_pop();
                })
            }else{
                // 已有登入的話 執行.....
                // 會員icon顯示
                let user_pop = document.querySelector('.user_pop');
                user_pop.classList.remove('none');
                // 手機版登入變登出
                log_ham.innerHTML = "登出";
                // 可以點擊會員中心的連結
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
                            cart_num.classList.remove('none');
                            cart_num.innerHTML = response.length;
                            cart_num_ham.classList.remove('none');
                            cart_num_ham.innerHTML = response.length;
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

// 會員登入hover的收藏的右上角紅圈圈數字
let cart_num = document.getElementById('cart_num');
let cart_num_ham = document.getElementById('cart_num_ham');
// hover
user_icon.addEventListener('mouseover',function(){
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
                let user_pop = document.querySelector('.user_pop');
                user_pop.classList.remove('none');
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
                            cart_num.classList.remove('none');
                            cart_num.innerHTML = response.length;
                            cart_num_ham.classList.remove('none');
                            cart_num_ham.innerHTML = response.length;
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

user_icon.addEventListener('mouseleave',function(){
    user_pop.classList.add('none');
})


//登出
//電腦版
userpop_log.addEventListener('click',function(e){
    e.preventDefault();
    e.stopPropagation();
    $.ajax({            
        method: "POST",
        url: "php/frontpage/logout.php",
        data:{},            
        dataType: "text",
        success: function (response) {
            // alert("登出成功"); 
            document.querySelector('.logout_pop').classList.remove('none');
            setTimeout(function(){
                document.querySelector('.logout_pop').classList.add('none');
            },2000);
            localStorage.removeItem('member_ID');
            log_ham.innerHTML = "登入";
            // localStorage.clear();
            location=location;
            history.go(0);
        },
        error: function(exception) {
            alert("數據載入失敗: " + exception.status);
        }
      });
    });
// 手機板登入登出
log_ham.addEventListener('click',function(e){
    e.preventDefault();
    e.stopPropagation();
    // 登入
    if(log_ham.innerHTML == "登入"){
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
                document.querySelector('.logout_pop').classList.remove('none');
                setTimeout(function(){
                    document.querySelector('.logout_pop').classList.add('none');
                },2000);
                localStorage.removeItem('member_ID');
                log_ham.innerHTML = "登入";
                // localStorage.clear();
                // location=location;
                history.go(0);
            },
            error: function(exception) {
                alert("數據載入失敗: " + exception.status);
            }
        });
    }
    
});

// 購物車有商品就會渲染紅色 QTY
// window.addEventListener('DOMContentLoaded', (event) => {
    function ShoppingCartQty(index){
        let car_num = document.getElementById('car_num');
        
        const LSGetItem = JSON.parse(localStorage.getItem("shoppingData")) 
        // console.log(LSGetItem.length);
        // 如果 this.ShoppingCartList 有商品，就渲染購物車 icon
        if(LSGetItem == [] || LSGetItem == "" || LSGetItem == null){
            car_num.innerHTML = "";
        }else{
            // 判斷當前頁面，並同步Vue.$data.shoppingCarList
            if (document.location.href.includes('index_home.html')) {
                let car_num2 = document.getElementById('car_num2');
                car_num2.classList.remove('none');
                car_num2.innerHTML = LSGetItem.length;

                car_num.classList.remove('none');
                car_num.innerHTML = LSGetItem.length;
            }else{
                car_num.classList.remove('none');
                car_num.innerHTML = LSGetItem.length;
            }
        }
    };
    // 同步購物車 qty 數量
    ShoppingCartQty();
// });

