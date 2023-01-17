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
            }
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
            this.$refs.or.classList.remove('none');
            this.$refs.three.classList.remove('none');

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
            this.$refs.or.classList.remove('none');
            this.$refs.three.classList.remove('none');
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
        forget() {
            this.$refs.join_ok.classList.add('none');
            this.$refs.tab.classList.add('none');
            this.$refs.add_tab.classList.add('none');
            this.$refs.enter_tab.classList.add('none');
            this.$refs.or.classList.add('none');
            this.$refs.three.classList.add('none');
            this.$refs.forget.classList.remove('none');
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
                        get_Member_ID();
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
        },
        //註冊成功畫面
        join_success(){
            this.$refs.join_ok.classList.remove('none');
            this.$refs.tab.classList.add('none');
            this.$refs.add_tab.classList.add('none');
            this.$refs.enter_tab.classList.add('none');
            this.$refs.or.classList.add('none');
            this.$refs.three.classList.add('none');
            this.$refs.forget.classList.add('none');
        },
        //註冊成功點擊確定關掉popup
        add_ok(){
            let login_bg = document.getElementById('login_bg');
            let login = document.getElementById('login');
            let body = document.querySelector('body');
            //關掉popup
            login_bg.classList.add('none');
            body.style.overflow = "auto";
            // 重新登入打開Login
            this.enter_tab();
        },
        //會員註冊ajax
        join_ajax(){
            let account = document.getElementById('join_account').value;
            let pwd = document.getElementById('join_pwd').value;
            let pwd_again = document.getElementById('join_again').value;
            let that = this ;
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
        }
    }
});
login_app.mount("#login");

// ======會員icon 登入
// 點擊
let user_pop = document.querySelector('.user_pop');
let user_icon = document.querySelector('.slide_user');
let userpop_log = document.querySelector('.userpop_log');
user_icon.addEventListener('click',function(e){
    // console.log('qqq')
    e.preventDefault();
    login_check();
})

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
            // storage.clear();
            // history.go(0); 
        },
        error: function(exception) {
            alert("數據載入失敗: " + exception.status);
        }
      });
    });
    