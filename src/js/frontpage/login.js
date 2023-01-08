let users = [
    {
        id: 1,
        account: 'abc',
        pwd: '123456789'
    }, {
        id: 2,
        account: 'qwe',
        pwd: '123456789'
    }
]

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
    //生命週期
    created() {
        this.users = users;
    },
    computed: {},
    mounted() {
        //api
    },
    methods: {

        //tab切換-註冊會員
        add_tab() {
            let add_tab = this.$refs.add_tab;
            let enter_tab = this.$refs.enter_tab;
            let tab1 = this.$refs.tab1;
            let tab2 = this.$refs.tab2;
            let forget = this.$refs.forget;
            let or = this.$refs.or;
            let three = this.$refs.three;
            let tab = this.$refs.tab;
            tab
                .classList
                .remove('none');
            add_tab
                .classList
                .remove('none');
            enter_tab
                .classList
                .add('none');
            tab1
                .classList
                .add('tab_line');
            tab2
                .classList
                .remove('tab_line');
            forget
                .classList
                .add('none');
            or
                .classList
                .remove('none');
            three
                .classList
                .remove('none');
        },
        //tab切換-會員登入
        enter_tab() {
            let add_tab = this.$refs.add_tab;
            let enter_tab = this.$refs.enter_tab;
            let tab1 = this.$refs.tab1;
            let tab2 = this.$refs.tab2;
            let or = this.$refs.or;
            let three = this.$refs.three;
            let tab = this.$refs.tab;
            let forget = this.$refs.forget;
            tab
                .classList
                .remove('none');
            add_tab
                .classList
                .add('none');
            enter_tab
                .classList
                .remove('none');
            tab1
                .classList
                .remove('tab_line');
            tab2
                .classList
                .add('tab_line');
            forget
                .classList
                .add('none');
            or
                .classList
                .remove('none');
            three
                .classList
                .remove('none');
        },
        //input 驗證格式_密碼
        check_pwd(e) {
            // console.log(e.target.value.length);
            if(e.target.value !== ""){
                e.target.nextElementSibling.nextElementSibling.classList.remove('appear');
                if (e.target.value.length <= 16 && e.target.value.length >= 8) {} else {
                    console.log(e.target)
                    e
                        .target
                        .nextElementSibling
                        .nextElementSibling
                        .classList
                        .add('appear');
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
            return this.emailRule(e.target.value);  //true or false
        },
        //input 驗證格式_帳號
        check_acc(e) {},
        //眼睛icon
        eye_icon(e) {
            let pwd_type = e.target.previousSibling;
            console.log(pwd_type.type);
            e.stoppropagation;
            if (pwd_type.type == "password") {
                pwd_type.type = "text";
                e
                    .target
                    .classList
                    .remove('fa-eye-slash');
                e
                    .target
                    .classList
                    .add('fa-eye');
            } else {
                pwd_type.type = "password";
                e
                    .target
                    .classList
                    .add('fa-eye-slash');
                e
                    .target
                    .classList
                    .remove('fa-eye');
            }
        },
        //忘記密碼
        forget() {
            let add_tab = this.$refs.add_tab;
            let enter_tab = this.$refs.enter_tab;
            let or = this.$refs.or;
            let three = this.$refs.three;
            let forget = this.$refs.forget;
            let tab = this.$refs.tab;
            tab
                .classList
                .add('none');
            add_tab
                .classList
                .add('none');
            enter_tab
                .classList
                .add('none');
            or
                .classList
                .add('none');
            three
                .classList
                .add('none');
            forget
                .classList
                .remove('none');

        },

        //當立即加入按下
        member_add() {
            console.log(users);
            //把會員帳號密碼 資料寫到陣列
            this.user_add.id = new Date().getTime();
            this
                .users
                .push(this.user_add);
            this.user_add = {};
            // 1.確認都有填寫
            // 2.從資料庫撈資料比對有沒有一樣的帳號
            // 3.成功
            // 4.發送驗證信
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
            let account = document
                .getElementById('login_account')
                .value;
            let pwd = document
                .getElementById('login_pwd')
                .value;
            if (account == '') {
                return false;
            }
            if (pwd == '') {
                return false;
            }  

            $.ajax({
                method: "POST",
                url: "PHP/frontpage/login.php",
                data: {
                    account: account,
                    pwd: pwd
                },
                dataType: "text",
                success: function (response) {

                    if (response == "Y") {
                        // console.log('ttt');
                        location.href = 'member.html';
                    } else {
                        alert('帳號密碼錯誤');
                    }

                },
                error: function (exception) {
                    alert("發生錯誤: " + exception.status);
                }
            });

        },
        //會員註冊ajax
        join_ajax(){
            let account = document.getElementById('join_account').value;
            let pwd = document.getElementById('join_pwd').value;
            let pwd_again = document.getElementById('join_again').value;
            if (account == '') {
                return false;
            }
            if (pwd == '' || ( pwd.length<8 )) {
                return false;
            }
            if (pwd == pwd_again){
                $.ajax({
                    method: "POST",
                    url: "PHP/frontpage/join.php",
                    data: {
                        account: account,
                        pwd: pwd
                    },
                    dataType: "text", 
                    success: function (response) {

                        if (response == "Y") {
                            alert('登入成功');
                            location.href = 'member.html';   
                        } else {
                            alert('帳號密碼錯誤');
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
