const RootComponent  = {
    data(){
        return{
            // 控制流程
            workFlow:{
                step:4,
            },
            // 使用者訂單建立
            inputData:{
                // step 1 user Data
                // 第一階段使用者所有的資訊(已經LocalStroage 儲存完畢)
                // 以下唯接收的資料型態
                agress:true,
                sets:1,
                peoCount:5,
                date:new Date().toISOString().slice(0,10),
                orderTime:2,
                chefTeam:"c",


                // step 2 user Data
                // 將資料儲存於APIDATA
                
                // step 3 user Data

                // step 4 user Data
                name:'',
                phone:'',
                email:'',
                addr:'',
                note:''
            },
            APIData:{
                // 訂餐時間
                orderTime:[
                    {id:1,txt:'午餐',time:'11:00-14:00'},
                    {id:2,txt:'下午茶',time:'11:00-14:00'},
                    {id:3,txt:'晚餐',time:'18:00-21:00'},
                ], 
                // 套餐資料
                sets:[
                    {
                        id:1,setName:'名物 私套餐',
                        setprice:1800, // 每人單價
                        imgUrl:'img/reserve_img/reserve_set01.jpg',
                        dish:{
                            "湯物":[
                                {id:1,dishName:'奶香牛肝菌野菇濃湯-A',qty:0,dishType:'湯物'},
                                {id:2,dishName:'石斑海鮮清湯-A',qty:0,dishType:'湯物'},
                            ],
                            "前菜":[
                                {id:3,dishName:'燻鮭魚番茄佐優格醬-A',qty:0,dishType:'前菜'},
                                {id:4,dishName:'深海魚皮野蔬沙拉佐醋醬-A',qty:0,dishType:'前菜'},
                            ],
                            "刺身":[
                                {id:5,dishName:'大間本鮪中腹、秋鮭、貝類、牡丹蝦-A',qty:0,dishType:'刺身'},
                            ],
                            "主食":[
                                {id:6,dishName:'嫩煎干貝佐松露菲力-A',qty:0,dishType:'主食'},
                                {id:7,dishName:'日本小田和牛壽喜燒-A',qty:0,dishType:'主食'},
                                {id:8,dishName:'龍蝦佐鮑魚海鮮拼盤-A',qty:0,dishType:'主食'},
                            ],
                            "甜點":[
                                {id:9,dishName:'抹茶布丁搭配綿密金時紅豆-A',qty:0,dishType:'甜點'},
                                {id:10,dishName:'栗子羊羹-A',qty:0,dishType:'甜點'},
                                {id:11,dishName:'抹茶海鹽奶蓋-A',qty:0,dishType:'甜點'},
                            ],
                            "飲品":[
                                {id:12,dishName:'春手毬和菓子-A',qty:0,dishType:'飲品'},
                                {id:13,dishName:'烘焙曼巴咖啡-A',qty:0,dishType:'飲品'},
                                {id:14,dishName:'烘焙曼巴咖啡-A',qty:0,dishType:'飲品'},                                
                                {id:15,dishName:'高山金萱茶-A',qty:0,dishType:'飲品'},                                
                                {id:16,dishName:'檸檬海鹽氣泡飲-A',qty:0,dishType:'飲品'},
                            ]                              
                        }
                        
                    },
                    {
                        id:2,setName:'極上 會席套餐',
                        setprice:3200, // 每人單價
                        imgUrl:'img/reserve_img/reserve_set02.jpg',
                        dish:{
                            
                            '湯物':[
                                {id:17,dishName:'奶香牛肝菌野菇濃湯-B',qty:0,dishType:'湯物'},
                                {id:18,dishName:'石斑海鮮清湯-B',qty:0,dishType:'湯物'},
                            ],
                            '前菜':[
                                {id:19,dishName:'燻鮭魚番茄佐優格醬-B',qty:0,dishType:'前菜'},
                                {id:20,dishName:'深海魚皮野蔬沙拉佐醋醬-B',qty:0,dishType:'前菜'},
                            ],
                            '刺身':[
                                {id:21,dishName:'大間本鮪中腹、秋鮭、貝類、牡丹蝦-B',qty:0,dishType:'刺身'},
                            ],
                            '主食':[
                                {id:22,dishName:'嫩煎干貝佐松露菲力-B',qty:0,dishType:'主食'},
                                {id:23,dishName:'日本小田和牛壽喜燒-B',qty:0,dishType:'主食'},
                                {id:24,dishName:'龍蝦佐鮑魚海鮮拼盤-B',qty:0,dishType:'主食'},
                            ],
                            '甜點':[
                                {id:25,dishName:'抹茶布丁搭配綿密金時紅豆-B',qty:0,dishType:'甜點'},
                                {id:26,dishName:'栗子羊羹-B',qty:0,dishType:'甜點'},
                                {id:27,dishName:'抹茶海鹽奶蓋-B',qty:0,dishType:'甜點'},
                            ],
                            '飲品':[
                                {id:28,dishName:'春手毬和菓子-B',qty:0,dishType:'飲品'},
                                {id:29,dishName:'烘焙曼巴咖啡-B',qty:0,dishType:'飲品'},
                                {id:30,dishName:'烘焙曼巴咖啡-B',qty:0,dishType:'飲品'},                                
                                {id:31,dishName:'高山金萱茶-B',qty:0,dishType:'飲品'},                                
                                {id:32,dishName:'檸檬海鹽氣泡飲-B',qty:0,dishType:'飲品'},
                            ]                                       
                        }
                    },
                    {
                        id:3,setName:'苑 春堂套餐',
                        setprice:4600 , // 每人單價
                        imgUrl:'img/reserve_img/reserve_set03.jpg',
                        dish:{
                            '湯物':[
                                {id:33,dishName:'奶香牛肝菌野菇濃湯-C',qty:0,dishType:'湯物'},
                                {id:34,dishName:'石斑海鮮清湯-C',qty:0,dishType:'湯物'},
                            ],
                            
                            '前菜':[
                                {id:35,dishName:'燻鮭魚番茄佐優格醬-C',qty:0,dishType:'前菜'},
                                {id:36,dishName:'深海魚皮野蔬沙拉佐醋醬-C',qty:0,dishType:'前菜'},
                            ],

                            '刺身':[
                                {id:37,dishName:'大間本鮪中腹、秋鮭、貝類、牡丹蝦-C',qty:0,dishType:'刺身'},
                            ],

                            '主食':[
                                {id:38,dishName:'嫩煎干貝佐松露菲力-C',qty:0,dishType:'主食'},
                                {id:39,dishName:'日本小田和牛壽喜燒-C',qty:0,dishType:'主食'},
                                {id:40,dishName:'龍蝦佐鮑魚海鮮拼盤-C',qty:0,dishType:'主食'},
                            ],
                            
                            '甜點':[
                                {id:41,dishName:'抹茶布丁搭配綿密金時紅豆-C',qty:0,dishType:'甜點'},
                                {id:42,dishName:'栗子羊羹-C',qty:0,dishType:'甜點'},
                                {id:43,dishName:'抹茶海鹽奶蓋-C',qty:0,dishType:'甜點'},
                            ],

                            '飲品':[
                                {id:44,dishName:'春手毬和菓子-C',qty:0,dishType:'飲品'},
                                {id:45,dishName:'烘焙曼巴咖啡-C',qty:0,dishType:'飲品'},
                                {id:46,dishName:'烘焙曼巴咖啡-C',qty:0,dishType:'飲品'},                                
                                {id:47,dishName:'高山金萱茶-C',qty:0,dishType:'飲品'},                                
                                {id:48,dishName:'檸檬海鹽氣泡飲-C',qty:0,dishType:'飲品'}, 
                            ],                             
                        }
                    }
                ],
                // 廚師團隊
                chefTeam:[
                    {id:1,team:'a',name:'麗燕山'},
                    {id:2,team:'b',name:'吳寶劍'},
                    {id:3,team:'c',name:'陳平安'}
                ],

                // 單點菜品
                otherDish:[
                    {id:46,dishName:'黑鮪刺身',price:1000,qty:0,dishType:'單品'},
                    {id:47,dishName:'廣島牡蠣釜飯',price:750,qty:0,dishType:'單品'},
                    {id:48,dishName:'蘆筍蝦手捲',price:600,qty:0,dishType:'單品'},                                
                    {id:49,dishName:'大閘蟹握壽司',price:650,qty:0,dishType:'單品'},                                
                    {id:50,dishName:'和牛蕈菇釜飯',price:700,qty:0,dishType:'單品'}, 
                ],
                
                // 租借及服務
                servies:[
                    {id:1,title:'廚具',desc:'盤子、餐具、餐巾(必選)',checked:true,price:300},
                    {id:2,title:'炊具',desc:'鍋碗瓢盆(必選)',checked:true,price:300},
                    {id:3,title:'餐盤',desc:'餐盤&拼盤',checked:false,price:400},
                    {id:4,title:'服務人員',desc:'全程服務及售後清潔',checked:false,price:500},
                ],

                // 套餐詳細選項(舊版Data 先備份)
                setsDetail:{
                    setA:{
                        dish:[
                            // {id:1,dishName:'奶香牛肝菌野菇濃湯-A',qut:0,dishType:'湯物'},
                            // {id:2,dishName:'石斑海鮮清湯-A',qut:0,dishType:'湯物'},
                            // {id:3,dishName:'燻鮭魚番茄佐優格醬-A',qut:0,dishType:'前菜'},
                            // {id:4,dishName:'深海魚皮野蔬沙拉佐醋醬-A',qut:0,dishType:'前菜'},
                            // {id:5,dishName:'大間本鮪中腹、秋鮭、貝類、牡丹蝦-A',qut:0,dishType:'刺身'},
                            // {id:6,dishName:'嫩煎干貝佐松露菲力-A',qut:0,dishType:'主食'},
                            // {id:7,dishName:'日本小田和牛壽喜燒-A',qut:0,dishType:'主食'},
                            // {id:8,dishName:'龍蝦佐鮑魚海鮮拼盤-A',qut:0,dishType:'主食'},
                            // {id:9,dishName:'抹茶布丁搭配綿密金時紅豆-A',qut:0,dishType:'甜點'},
                            // {id:10,dishName:'栗子羊羹-A',qut:0,dishType:'甜點'},
                            // {id:11,dishName:'抹茶海鹽奶蓋-A',qut:0,dishType:'甜點'},
                            // {id:12,dishName:'春手毬和菓子-A',qut:0,dishType:'飲品'},
                            // {id:13,dishName:'烘焙曼巴咖啡-A',qut:0,dishType:'飲品'},
                            // {id:14,dishName:'烘焙曼巴咖啡-A',qut:0,dishType:'飲品'},                                
                            // {id:15,dishName:'高山金萱茶-A',qut:0,dishType:'飲品'},                                
                            // {id:16,dishName:'檸檬海鹽氣泡飲-A',qut:0,dishType:'飲品'},                                
                        ]
                    },
                   
                },
            }
        }
    },
    methods:{
        changeStep(val){                    
            // step 1 檢查套餐及套及數量
            if(this.workFlow.step === 1){
                // 使用者點選餐點
                let setID = this.inputData.sets - 1
                // 訂餐人數
                const count = this.inputData.peoCount

                // 儲存種類使否有符合總人數  data = [true,true,false....]
                let checkDishTypeVail = []

                let set = this.APIData.sets[setID].dish
       
                for (const key in set){
                    let dishTypetotal = 0 //ex : [湯品],[菜品]..總數
                    // console.log(set[key])
                    for (let j = 0; j < set[key].length; j++) {                        
                        dishTypetotal += set[key][j].qty                            
                    }
                    // 若人數符合種類餐點總和
                    if(dishTypetotal === count){
                            // console.log(`${set[key]}資料OK`)
                            checkDishTypeVail.push(true)
                    }else{
                        // console.log(`${set[key]}資料不OK`)
                        checkDishTypeVail.push(false)
                    }
                }
                // console.log(checkDishTypeVail)
                checkDishTypeVail = checkDishTypeVail.find(el=>!el)
                if(checkDishTypeVail === false)return alert('請選取相對應人數的餐點')
            }


            if(this.workFlow.step == 4){
                console.log(`step 4 confrim`)
                this.$refs.comfirm.innerHTML=`完成填寫`
                // console.log()
            }
            this.workFlow.step += val;
            
        },
        changeOrederViewImg(e){
            // 小圖換大圖
            this.$refs.oderVeiwPic.src = e.imgUrl;
            this.inputData.sets = e.id;
            // this.resetDataInput()
        },
        setclickCount(item,stauts,setID,dishType){
            // 商品, 點擊(+ , - ),套餐編號,餐點類型
            if(stauts ==='minus'){
                // 假如點擊的是 - 商品的話
                item.qty <= 0 ?  0 : item.qty--;
            }else{
                    // 當一種類若超過人數 
                    let totalNum = this.APIData.sets[setID].dish[`${dishType}`]
                                        .map((el)=>el.qty).reduce((a,b)=>a+b);
                    if(totalNum >= this.inputData.peoCount ) return
                    // 若沒有超過人數，可以增加餐點
                    item.qty >= this.inputData.peoCount ?  this.inputData.peoCount: item.qty++;
            }
        },
        otherItemCount(item,stauts){
            if(stauts ==='minus'){
                // 假如點擊的是 - 商品的話
                item.qty <= 0 ?  0 : item.qty--;
            }else{
                item.qty ++;
            }
        },
        dishTypeisOver(){


        },
        resetDataInput(){
            // event 當切換人數全部菜餐清除
            // console.log(`清空資料套餐及單品及服務的數量`);               
            for(let i=0; i<3; i++){
                let set = this.APIData.sets[i].dish
                for (const key in set){
                    for (let j = 0; j < set[key].length; j++) {
                        // 清空套餐菜品數量
                        set[key][j].qty = 0
                    }
                    
                }
            }
        },
        // 確認種類是否有符合人數
        setKind(setID,dishType){
            let totalNum = this.APIData.sets[setID].dish[`${dishType}`]
                                        .map((el)=>el.qty).reduce((a,b)=>a+b);
            
            return totalNum !== this.inputData.peoCount                                               
        },
        phoneRule(str){
            // this.inputData.phone.replace(/\D/g, "");
            let phoneRule =  new RegExp("^09\\d{8}$");
            return phoneRule.test(str)
        },
        emailRule(str){
            let emailRule =  new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
            return emailRule.test(str);
        }

    },
    computed:{

        // 套餐內容
        // workflow step 1
        chefTeamName(){
            let orderTeamName = this.APIData.chefTeam.find(el=>el.team === this.inputData.chefTeam)
            return {...orderTeamName}.name
        },
        setName(){
            let orderSetName = this.APIData.sets.find(el=>el.id===this.inputData.sets)
            return {...orderSetName}.setName
        },

        // 套餐加購總金額計算
        setPrice(){
            let setPrice = {...this.APIData.sets.find(el=>el.id===this.inputData.sets)}.setprice
            let setPeo = this.inputData.peoCount
           
            return `$ ${(setPrice * setPeo).toLocaleString()}`
        },

        // 單品加購總金額計算
        otherPrice(){
            let otherDish = this.APIData.otherDish.map(item=>{
                 if(item.qty > 0){
                    return item.qty * item.price;
                 }else return 0;
            }).reduce((a,b)=>a+b)
            
            return otherDish
        },

        // orderview 總金額計算
        totalPrice(){
            // 訂單人數
            const count = this.inputData.peoCount
            
            // 套餐金額
            let setPrice = {...this.APIData.sets.find(el=>el.id===this.inputData.sets)}.setprice
            let setTotal = count * setPrice

            // 單點金額
            let otherDish = 0
            let otherServies = 0
            if(this.workFlow.step == 2){
                otherDish = this.APIData.otherDish.map(item=>{
                    //  console.log(item.price,item.qty)
                     if(item.qty > 0){
                        return item.qty * item.price;
                     }else return 0;
                }).reduce((a,b)=>a+b);

                otherServies = this.APIData.servies.map(serve=>{
                    if(serve.checked === true){
                        console.log(serve.title)
                        return serve.price;
                    }else return 0
                }).reduce((a,b)=>a+b)
                // console.log(otherServies)
                otherServies = otherServies * count
                // console.log(otherServies)
            }
            return `$ ${(setTotal + otherDish + otherServies).toLocaleString()}`;
        },

        // workFlow step 3
        displayOrederTime(){
            // let timeString = 
            // console.log(this.APIData.orderTime)
            let displayTime = this.APIData.orderTime.find((el)=>{
                if(el.id ===this.inputData.orderTime){
                    return el.time
                }
            })
            // console.log(displayTime.time)
            return displayTime.time;
        },

        // workFlow step 4
        // 格式驗證
        checkPhoneNum(){
            // 手機驗證格式
            return this.phoneRule(this.inputData.phone);
        },
        checkEmail(){
            // 電子信箱驗證格式
            return this.emailRule(this.inputData.email);
        },
      
       
    },
    watch:{
        'workFlow.step'(newValue){
            // 限制控制流程1(套餐選擇),2(單品選擇),3(細項列表),4(填寫資料), 5(還沒做Sumit Form 表單)
            if(newValue < 1){
                this.workFlow.step = 1
            }else if(newValue > 4){
                this.workFlow.step = 4
            }
        }
    },
    mounted(){
        // 把Local Stroage 給讀出來並渲染在網頁畫面上
        this.inputData = JSON.parse(localStorage.getItem('reseverOrder'))
    },
   
}

const vm = Vue.createApp(RootComponent).mount('#myWorkFlow')