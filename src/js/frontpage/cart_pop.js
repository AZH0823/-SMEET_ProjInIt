// 點擊header購物車icon 重新抓取localstorage渲染購物車popup
let _THAT = this
let header_cart = document.querySelector('.slide_cart');
header_cart.addEventListener('click', function () {
    cart_pop.get_data();
})
let cart_pop = Vue.createApp({
        data() {
            return {shop_data: [{}]}
        },
        mounted() {
            this.get_data();
        },
        methods: {
            // 按結帳 檢查登入狀況
            check_member() {
                $.ajax({
                    method: "POST",
                    url: "php/frontpage/login_check.php",
                    data: {},
                    dataType: "text",
                    success: function (response) {
                        if (response == "") {
                            //尚未登入->跳出會員登入畫面
                            login_pop();
                        } else {
                            //已有登入的話 執行..... 會員icon顯示
                            let user_pop = document.querySelector('.user_pop');
                            user_pop.classList.remove('none');
                            // 跳轉到購物車詳細頁
                            location.href = "cartDetail.html";
                        }
                    },
                    error: function (exception) {
                        alert("數據載入失敗: " + exception.status);
                    }
                });
            },
            // 415,426行參考

            get_data() {
                this.shop_data = JSON.parse(localStorage.getItem('shoppingData'));
                // console.log(a); console.log(this.shop_data)
            },
            //數量加
            dealPlus(item, key) {
                // console.log(item);
                item.qty++;
                // console.log(item.qty);
                // 把數量部分傳到data儲存
                this.shop_data[key].qty = item.qty
                // console.log(this.shop_data[key]);
                // 更新localStorage數量
                localStorage.setItem("shoppingData", JSON.stringify(this.shop_data));
            },
            //數量減
            dealMinus(item, key) {
                // console.log(item);
                if (item.qty > 1) {
                    item.qty--;
                    this.shop_data[key].qty = item.qty;
                    localStorage.setItem("shoppingData", JSON.stringify(this.shop_data));
                }
            },
            //刪除點選到的商品 ->垃圾桶
            dealDelete(index) {
                // console.log(index)
                // 刪除data資料
                this.shop_data.splice(index, 1);
                // 更新localStorage數量
                localStorage.setItem("shoppingData", JSON.stringify(this.shop_data));



                // ==================== 樹鈞的坑 ========================= //
                // 拿到shopMall & Detail 的 Vue.$data
                // console.log(vm_shopmall.$data.ShoppingCartList);
                // console.log(vm_shopmallDetail.$data.ShoppingCartList);

                // 拿到最新Storage
                const LSGetItem = JSON.parse(localStorage.getItem("shoppingData")) 

                // 判斷當前頁面，並同步Vue.$data.shoppingCarList
                if (document.location.href.includes('shopMallDetail.html')) {
                    console.log("shopmallDetail");
                    vm_shopmallDetail.$data.ShoppingCartList = LSGetItem;
                }else if(document.location.href.includes('shopMall.html')){
                    console.log("shopmall");
                    vm_shopmall.$data.ShoppingCartList = LSGetItem;
                }

                // 同步購物車 qty 數量
                this.ShoppingCartQty();
            },
            // ==================== 樹鈞的坑 ========================= //
            ShoppingCartQty(){
                let car_num = document.getElementById('car_num');
                let car_num2 = document.getElementById('car_num2');
                const LSGetItem = JSON.parse(localStorage.getItem("shoppingData")) 
                console.log(LSGetItem.length);
            
                // 如果 this.ShoppingCartList 有商品，就渲染購物車 icon
                if(LSGetItem == [] || LSGetItem == "" || LSGetItem == null){
                    car_num.innerHTML = "";
                    car_num2.innerHTML = "";
                    return ;
                }else{
                    // 判斷當前頁面，並同步Vue.$data.shoppingCarList
                    if (document.location.href.includes('index_home.html')) {
                        car_num2.classList.remove('none');
                        car_num2.innerHTML = LSGetItem.length;

                        car_num.classList.remove('none');
                        car_num.innerHTML = LSGetItem.length;
                    }else{
                        car_num.classList.remove('none');
                        car_num.innerHTML = LSGetItem.length;
                    }
                }
            },
            
        }
    })
    .mount('#cart_pop');
