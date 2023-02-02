const RootComponent  = {
    data(){
        return{
            // 控制流程
            workFlow:{
                step:1,
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
                chefTeam:1,

                // step 2 user Data
                // 將資料儲存於APIDATA

                detailDishList:[

                ],
                member:{
                }, 
                // 預約資料
                name:'',
                phone:'',
                email:'',
                addr:'',
                note:'',
                point:0,

                // 信用卡
                cardName:'',
                cardDate:'',
                cardCode:'',

                cards:[
                    {},
                    {},
                    {},
                    {}
                ],
            },
            APIData_in:{
                // 訂餐時間
                orderTime:[
                    {id:1,txt:'午餐',time:'11:00-14:00'},
                    {id:2,txt:'下午茶',time:'14:30-16:00'},
                    {id:3,txt:'晚餐',time:'18:00-21:00'},
                ], 
                
                // 套餐資料
                sets:[
                    {   
                        dish:{
                            "湯物":[],"前菜":[],"刺身":[],
                             "主食":[],"甜點":[],"飲品":[]                              
                        } 
                    },
                    {
                        dish:{
                            "湯物":[],"前菜":[],"刺身":[],
                             "主食":[],"甜點":[],"飲品":[]                              
                        } 
                    }, {
                        dish:{
                            "湯物":[],"前菜":[],"刺身":[],
                             "主食":[],"甜點":[],"飲品":[]                              
                        } 
                    },
                ],
                // 廚師團隊
                chefTeam:[],
                // 單點菜品
                otherDish:[],
                // 租借及服務
                servies:[],
                // 會員資訊 進入第 4 流程會取得此資料
                member:{
                    // id:3,point:330,isLogin:true
                }, 
            },
        }
    },
    methods:{        
        // GET API
        initAPI(){
            this.getTeam();
            this.getSetPrice();
            this.getOtherDish();
            this.getServier();
            this.getSetdishDetail();
        },
        // 取得會員點數
        getMemberPoint(_id){
            // fetch
            const that = this;
            const url = 'php/frontpage/member/member_point.php';
            $.ajax({
                method: "POST",
                url: url,
                data: {
                    member_ID : _id,
                },
                dataType: "text",
                success: function (res) {
                // console.log(`會員資料`,res)
                  const merberPoint = res;
                  that.APIData_in["member"].point = merberPoint;
                  that.APIData_in["member"].id = _id;
                },
                error: function (exception) {
                    alert("發生錯誤: " + exception.status);
                }
            });
        },
        // 取得套餐細部資訊
        getSetPrice(){
            fetch('php/reserveAPI/getSetPriceAPI.php')
            .then(response =>{
                return response.json();
            })
            .then( data =>{
                // 將套餐資訊放入APIData (圖片,售價,ID...)
                for(let i = 0;i < this.APIData_in.sets.length;i++){
                    for(let type in data[i]){
                        this.APIData_in.sets[i][`${type}`] = data[i][`${type}`];
                    } 
                } 
            }).catch(err=>{
                console.log(err)
            })
        },
        // 取得套餐內商品資訊
        getSetdishDetail(){
            fetch('php/reserveAPI/setAPI.php')
            .then(function(response) {
                return response.json();
            })
            .then((res)=>{
                // 塞A,B,C 套餐資訊
                res.forEach(data => {
                        let dishType = data.dishType
                        // 初始化數量
                        data.qty = 0;
                        // Dish依照SetID 分類放進相對應的套餐
                        for(let i =0; i < 3; i++){
                            if(data.SetID == 1 && i == 0 ){
                                    this.APIData_in.sets[i].dish[dishType].push(data);
                            }else if(data.SetID == 2  && i == 1){
                                this.APIData_in.sets[i].dish[dishType].push(data);
                            }else if(data.SetID == 3  && i == 2){
                                this.APIData_in.sets[i].dish[dishType].push(data);
                            }
                        }
                    })
            }).catch(error=>{
                alert(error)
            });


        },
        // 取得單點商品資訊
        getOtherDish(){
            fetch('php/reserveAPI/otherAPI.php')
                .then(response =>{
                    return  response.json();
                })
                .then( data =>{
                    data.forEach((data_el)=>{  
                        // console.log(data_el.price)
                        let obj={
                            id:data_el.id,
                            dishName:data_el.disName,
                            dishType:data_el.dishType,
                            price:parseInt(data_el.price),
                            qty:0
                        }
                        this.APIData_in.otherDish.push(obj);
                    })
                }).catch(err=>{
                    console.log(err)
                })
        },
        // 取得所有服務的資訊
        getServier(){
            fetch('php/reserveAPI/servesAPI.php')
            .then(response =>{
                return  response.json();
            })
            .then( data =>{
                // servies
                data.forEach((servie,idx)=>{                  
                    // init checked = false
                    // 第1,2 為必填對象故 強制True
                    // console.log(servie)
                    if(servie.title === '廚具' || servie.title === "炊具"){
                        servie.checked = true;   
                    }else servie.checked = false;
                    
                    this.APIData_in.servies.push(servie);
                })      
            }).catch(err=>{
                console.log(err);
            })
        },
        // 取得團隊資訊
        getTeam(){
            fetch('php/reserveAPI/getTeamAPI.php')
            .then(response =>{
                return  response.json();
            })
            .then( datalist =>{
                datalist.forEach(data=>{
                    this.APIData_in.chefTeam.push(data);
                })
            }).catch(err=>{
                console.log(err);
            })
        },
        // 刷新會員點數
        updateMemberPoint(){
            const _that = this;
            let _updatePoint = parseInt(this.APIData_in.member.point) - parseInt(this.inputData.point);
            // console.log(`現在:${this.APIData_in.member.id}會員,點數為:${_updatePoint}` )
            $.ajax({
                method: "POST",
                url: "php/frontpage/member/memberPointUpdate.php",
                data: {
                    point:_updatePoint,
                    memberID :_that.APIData_in.member.id
                },
                dataType: "text",
                success: function (response) {

                },
                error: function (exception) {
                    alert("發生錯誤: " + exception.status);
                }
            });

        },
        //post 訂單送出
        postoderAPI(data){
            let userInput = data
            // console.log(userInput)
            let _this = this
            const url = 'php/reserveAPI/postOrder.php'
            $.ajax({
                method: "POST",
                url: url,
                data: {
                    AppointmentDate:userInput.date,
                    Name:userInput.name,
                    Count:userInput.peoCount,
                    Scheduled:userInput.Scheduled,
                    Address:userInput.addr,
                    TotalPrice:userInput.TotalPrice,
                    notes:userInput.note,
                    SetID:userInput.sets,
                    point:userInput.point,
                    Phone:userInput.phone,
                    Email:userInput.email,
                    MemberID:_this.APIData_in.member.id,
                    TeamID:userInput.chefTeam,
                    detailDishies:userInput.detailDishList,
                },
                dataType: "text",
                success: function (response) {
                    if(response === 'orderBulidFail'){
                        alert('訂單有問題,請聯繫管理員');
                        document.location.href="reserve01.html";
                        // localStorage.removeItem('reseverOrder');
                    }else if(response ==='sameOrder'){
                        // alert('訂單有重複，請重新下單');
                        _this.workFlow.step += 1 ;
                        // document.location.href="reserve01.html";
                        // localStorage.removeItem('reseverOrder');
                    }else{
                        // console.log(`訂單編號為: ${response}`);
                        _this.workFlow.step += 1 ;
                        _this.APIData_in.orderID = response;
                        _this.updateMemberPoint();
                    }
                    localStorage.removeItem('reseverOrder');
                },
                error: function (exception) {
                    alert("發生錯誤: " + exception.status);
                    document.location.href="reserve01.html";
                    localStorage.removeItem('reseverOrder');
                }
            });

        },

        // WorkFlow 流程邏輯
        changeStep(val,e){                    
            let vaildStep = false;//若有False 將不進入下一個流程
            if(this.workFlow.step == 1 && e.target.className.includes('prev_btn btn')){
                // 返回上一頁
                // console.log(`返回上一頁`)
                window.scrollTo({ top: 0, behavior: 'smooth' });
                document.location.href="reserve01.html";
            }else if(this.workFlow.step === 1){
                // step 1 檢查套餐及套及數量
                // 使用者點選餐點
                let setID = this.inputData.sets - 1;
                // 訂餐人數
                const count = this.inputData.peoCount;
                // 儲存種類使否有符合總人數  data = [true,true,false....]
                let checkDishTypeVail = [];

                let set = this.APIData_in.sets[setID].dish;
                
                // 流程逐一檢驗套餐是否有符合人數
                for (const key in set){
                    let dishTypetotal = 0; //ex : [湯品],[菜品]..總數
                    // console.log(set[key])
                    for (let j = 0; j < set[key].length; j++) {  
                        // console.log(set[key][j])          
                        dishTypetotal += set[key][j].qty;
                        // this.setsList.push(set[key])                            
                    }
                    // 若人數符合種類餐點總和
                    if(dishTypetotal === count){
                        // console.log(`${set[key]}資料OK`)
                        checkDishTypeVail.push(true);
                    }else{
                        // console.log(`${set[key]}資料不OK`)
                        checkDishTypeVail.push(false);
                    }
                }
                // 檢查所有湯品...是否符人數
                checkDishTypeVail = checkDishTypeVail.find(el=>!el);
                if(checkDishTypeVail === false)return alert('請選取相對應人數的餐點');
                
                vaildStep = true;
            }else if(this.workFlow.step == 2){
                // 第二流程不做數量判斷
                vaildStep = true;
            }else if(this.workFlow.step == 3){
                const btn = e.target;
                
                //若按下的是下一步進入第三流程檢核
                if(btn.className.includes('next_btn')){
                    // 模擬會員登錄
                    const member_ID = localStorage.getItem("member_ID");
                    // console.log(member_ID)
                    // 未登入 
                    if(member_ID === null){
                        login_pop();
                    }else{
                    // 會員有登入
                        // get MeberAPI 已登錄
                        this.getMemberPoint(member_ID);
                        this.inputData.isLogin = !this.inputData;
                        // 打包所有菜單細項
                        this.packageAllDishDetail(this.inputData.sets - 1);
                        vaildStep = true;
                    }
                }else{
                    // 返回上一頁
                    vaildStep = true;
                }  
            }else if(this.workFlow.step == 4){
                // console.log(`step 4 confrim`)
                // 拿取會員資料 API 
                // 驗證格式
                let btn = e.target;
                if(btn.className.includes('next_btn')){
                    // 模擬會員登錄
                    let c = confirm('是否要送出訂單');
                    if(c){
                        //name phone email addr note point 
                        // 信用卡 cardName cardDate cardCode
                      
                        let alertMsg = ''; // 記錄錯誤內容
                        let vaild = [];    // 紀錄驗證True or False

                        // 檢驗所有第四流程 填寫資料的表格
                        for (const [key, value] of Object.entries(this.inputData)) {
                           
                            switch(key) {
                                case 'name':
                                    // console.log(key)
                                    if(value.trim().length !== 0 && this.nameRule(this.inputData.name)){
                                        // console.log('姓名驗證成功')
                                        this.inputData.name = this.inputData.name.trim();
                                        vaild.push(true);
                                    }else{
                                        // console.log('驗證失敗')
                                        alertMsg +=`姓名請輸入英文或中文，請修正\n`;
                                        vaild.push(false);
                                    }
                                    break;
                                case 'phone':
                                    // console.log(key)
                                    if(this.phoneRule(this.inputData.phone)){
                                        vaild.push(true);
                                        // console.log('手機驗證成功')
                                    }else{
                                        // console.log('驗證失敗')
                                        alertMsg +=`不符合手機格式，請修正\n`;
                                        vaild.push(false);
                                    }
                                    break;
                                case 'email':
                                    // console.log(key)
                                    if(this.emailRule(this.inputData.email)){
                                        // console.log('Email驗證成功')
                                        vaild.push(true);
                                    }else{
                                        // console.log('驗證失敗')
                                        alertMsg +=`不符合信箱格式，請修正\n`;
                                        vaild.push(false);                                   
                                    }
                                    break;
                                case 'addr':
                                    // console.log(key)
                                    if(value.trim().length > 0){
                                        // console.log('地址驗證成功')
                                        vaild.push(true);
                                    }else{
                                        alertMsg +=`地址不得為空值，請修正\n`;
                                        vaild.push(false);   
                                        // console.log('驗證失敗')
                                    }
                                    break;
                                case 'note':
                                    // console.log(key)
                                    this.inputData.note = this.inputData.note.trim();
                                    break;
                                case 'point':
                                    // console.log(key)
                                    if((value !== null || value !== undefined) &&
                                       (parseInt(this.inputData.point) <= parseInt(this.APIData_in.member.point)) ){
                                        // console.log('點數驗證成功')
                                        vaild.push(true);
                                    }else{
                                        // console.log('驗證失敗')
                                        alertMsg +=`您點紅利點數輸入有誤，請修正\n`;
                                        vaild.push(false);
                                    }
                                    break;
                                case 'cards':
                                    // console.log(key)
                                    let cardString = this.inputData.cards.map(card=>card.str).reduce((a,b)=>a+b,"")
                                    if(is.creditCard(cardString)){
                                        // console.log('信用卡號驗證成功')
                                        this.inputData.cardNumber = cardString;
                                        vaild.push(true);
                                    }else{
                                        alertMsg +=`信用卡卡號格式'有誤，請修正\n`;
                                        vaild.push(false);
                                    }
                                    break;    
                                case 'cardName':
                                    // console.log(key)
                                    if(value.trim().length > 0 && this.nameRule(this.inputData.cardName)){
                                        // console.log('信用卡名稱驗證成功')
                                        this.inputData.cardName = this.inputData.cardName.trim();
                                        vaild.push(true);
                                    }else{
                                        // console.log('驗證失敗')
                                        alertMsg +=`信用卡姓名輸入英文或中文，請修正\n`;
                                        vaild.push(false);
                                    }
                                    break;
                                case 'cardDate':
                                    // console.log(key)
                                    if(value.trim().length == 4){
                                        // console.log('信用卡日期驗證成功')
                                        vaild.push(true);
                                    }else{
                                        alertMsg +=`信用卡有效日期不符合格式，請修正\n`;
                                        vaild.push(false);
                                        // console.log('驗證失敗')
                                    }
                                    break;
                                
                                case 'cardCode':
                                    // console.log(key)
                                    if(value.trim().length == 3){
                                        // console.log('信用卡安全碼驗證成功')
                                        vaild.push(true);
                                    }else{
                                        // console.log('驗證失敗')
                                        vaild.push(false);
                                        alertMsg +=`信用卡不符合檢核碼格式，請修正\n`;
                                    }
                                    break;
                            }
                            // console.log(this.inputData.key)
                        }
                        
                        let vaildResult = vaild.find(res=>res == false);
                        if(vaildResult === undefined) vaildResult = true;

                        if(!vaildResult){
                            alert(alertMsg);
                        }else{
                            // 驗證符合的話, 將訂單所有資訊傳到後端
                            // console.log(`送出訂單`)
                            // 扣除開會員的點數
                            this.postoderAPI(this.inputData)
                        }
                    }
                }else{
                    // 回上一步不用擋
                    vaildStep = true;
                }

            }else if(this.workFlow.step == 5){
                // 會由PostOrderAPI 回傳相對的資訊
                // 重新渲覽相對應的話
               
            }
            
            window.scroll(0,60);
            if(vaildStep)this.workFlow.step += val;
            
        },
        changeOrederViewImg(e){
            // 小圖換大圖
            this.$refs.oderVeiwPic.src = e.IMG;
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
                    let totalNum = this.APIData_in.sets[setID].dish[`${dishType}`]
                                        .map((el)=>el.qty).reduce((a,b)=>a+b);
                    if( totalNum >= this.inputData.peoCount )return;
                    // 若沒有超過人數，可以增加餐點
                    item.qty >= this.inputData.peoCount ?  this.inputData.peoCount: item.qty++;
            }
        },

        // 控制商品數量要多少
        otherItemCount(item,stauts){
            if(stauts ==='minus'){
                // 假如點擊的是 - 商品的話
                item.qty <= 0 ?  0 : item.qty--;
            }else{
                item.qty++;
            }
        },

        // 撈出使用者套餐項目細節
        packageAllDishDetail(setID){
            // workflow 流程3-> 4
            // 將使用者確認清單的服務放在 setsList
            const set = this.APIData_in.sets[setID].dish;

            // 避免使用者按上一步會存留之前的紀錄
            this.inputData.detailDishList  = [];
            let totalPrice = 0;
            // 撈出使用者套餐項目細節
            for (const key in set){
                for (let j = 0; j < set[key].length; j++){
                    // this.inputData.setsList.push({...set[key][j]})
                    
                    if(set[key][j].qty > 0){
                        // console.log( set[key][j])
                        // this.inputData.setsList.push(set[key][j])
                        // console.log(this.inputData.detailDishList)
                        this.inputData.detailDishList.push(set[key][j]);
                    }
                }
            }
            // 算出總金額給
            totalPrice = parseInt(this.APIData_in.sets[setID].price) * parseInt(this.inputData.peoCount);
            // 撈出使用者單點項目細節
            this.APIData_in.otherDish.forEach(dish => {
                if(dish.qty > 0){
                    this.inputData.detailDishList.push(dish)
                    // 單點金額
                    totalPrice += parseInt(dish.price) *parseInt(dish.qty);
                }
            });
            // 將使用者確認清單的服務放在 otherServies
            this.APIData_in.servies.forEach(serve => {
                // console.log(serve)
                if(serve.checked === true){
                    serve.qty = this.inputData.peoCount
                    this.inputData.detailDishList.push(serve)
                    // 服務金額
                    totalPrice += parseInt(serve.price) * parseInt(serve.qty);
                }
            });

            // 預約時間
            let OrderTime = this.APIData_in.orderTime.find((el)=>{
                if(el.id ===this.inputData.orderTime){
                    return el;
                }
            })
            this.inputData.Scheduled = OrderTime.txt; // 午餐,下午茶,晚餐
            this.inputData.TotalPrice = parseInt(totalPrice);
        },
        // 清空使用者選擇
        resetDataInput(){
            // event 當切換人數全部菜餐清除
            // console.log(`清空資料套餐及單品及服務的數量`);               
            for(let i=0; i<3; i++){
                const set = this.APIData_in.sets[i].dish;
                for (const key in set){
                    for (let j = 0; j < set[key].length; j++) {
                        // 清空套餐菜品數量
                        set[key][j].qty = 0;
                    }
                    
                }
            }
        },
        // 確認種類是否有符合人數
        setKind(setID,dishType){
            let totalNum = this.APIData_in.sets[setID].dish[`${dishType}`]
                                        .map((el)=>{
                                            if(el.qty === undefined){
                                               return el.qty = 0;
                                            }else return el.qty;
                                        }).reduce((a,b)=>a+b,0);
            return totalNum !== this.inputData.peoCount;                                            
        },

        // 格式驗證
        nameRule(nameStr){
            let nameRule =  new RegExp('^[\u4e00-\u9fa5]+$|^[a-zA-Z\s]+$');
           return nameRule.test(nameStr);
        },
        phoneRule(str){
            let phoneRule =  new RegExp("^09\\d{8}$");
            return phoneRule.test(str);
        },
        emailRule(str){
            let emailRule =  new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
            return emailRule.test(str);
        },
        creditCardRule(){
            let cardNumString = this.inputData.cards
            .map(cardStr=>cardStr.str)
            .reduce((a,b)=>a + b);
           
            // console.log(cardNumString)
            return is.creditCard(cardNumString);
        },
        lengthRule(inputData,vaildlength){
            return inputData.length === vaildlength;
        },
        checkMemberPoint(){
            if(parseInt(this.inputData.point) > parseInt(this.APIData_in.member.point)){
                this.inputData.point = 0;
                alert('您剩餘的紅利為: '+ this.APIData_in.member.point+ '點,請重新輸入');
            }
        },

        // 信用卡UX 程式1
        cardKDCheck(e,idx){
            // console.log(`keydown`)
            if((e.which >= 48 && e.which <= 57) ||  (e.which >= 8 && e.which <=9) || (e.which >= 96 && e.which < 105)){
                if((e.target.value.length == 0 && e.which == 8)){
                    if(idx=== 0)return
                    const previous_el = e.target.previousElementSibling.previousElementSibling;
                    if(previous_el == null)return
                    previous_el.focus();
                }
              }else{
                e.preventDefault();
              }
        },
        // 信用卡UX 程式2
        cardKUPheck(e,idx){
            let str = (e.target.value).replace(/\D/g, "");
            e.target.value = str;
            if(str.length == 4 && idx <= 2){
              let next_el = e.target.nextElementSibling.nextElementSibling;
              if(next_el != null){
                next_el.focus();
              }
            }
        },
        cardCodeInput(e){
            if((e.which >= 48 && e.which <= 57) || (e.which >= 8 && e.which <=9) || (e.which >= 96 && e.which < 105)){
            }else{
                e.preventDefault();
            }
        },
    },
    computed:{
        
        // oder_view start
        // 套餐內容
        setName(){
            let orderSetName = this.APIData_in.sets.find(el=>el.id==this.inputData.sets);
            return {...orderSetName}.setName;
        },
        
        // 套餐加購總金額計算
        setPrice(){
            let setPrice = {...this.APIData_in.sets.find(el=>el.id==this.inputData.sets)}.price;
            let setPeo = this.inputData.peoCount;

            return `${(setPrice * setPeo).toLocaleString()}`;
        },
        // 回饋點數折抵
        pointDiscount(){
            if(    this.inputData.point ==null 
                || this.inputData == undefined ) return '0'.toLocaleString();
            let pointCovert = parseInt(this.inputData.point);
            return pointCovert.toLocaleString();
        },

        // orderview 總金額計算
        totalPrice(){
            // 訂單人數
            const count = parseInt(this.inputData.peoCount) || 5;
            
            // 套餐金額
            let setPrice = parseInt({...this.APIData_in.sets.find(el=>el.id===this.inputData.sets)}.price) || 3000;
            let setTotal = parseInt(count) * parseInt(setPrice);
           
            // 單點金額
            let otherDish = 0;
            
            //額外服務  
            let otherServies = 0;

            // 紅利點數扣款
            let point = this.inputData.point || 0;

            if(this.workFlow.step == 2 ||this.workFlow.step == 3 ||this.workFlow.step == 4 ){
                // 假若尚未到那個 workFlow.step 都回傳 0元，以免網頁壞死
               
                // 計算單點
                otherDish = this.APIData_in.otherDish.map(item=>{
                    //  console.log(item.price,item.qty)
                     if(item.qty > 0){
                        return parseInt(item.qty) * parseInt(item.price);
                     }else return 0;
                })
                .reduce((a,b)=>a+b,0);

                // 計算服務
                otherServies = this.APIData_in.servies.map(serve=>{
                    if(serve.checked === true){
                        return parseInt(serve.price);
                    }else return 0
                }).reduce((a,b)=>a+b,0)
                otherServies = parseInt(otherServies) * parseInt(count);
            }
           
            return `${(parseInt(setTotal) + parseInt(otherDish) + parseInt(otherServies) - parseInt(point)).toLocaleString()}`;
        },
        // oder_view end

        //預約時間 Workflow 3
        displayOrederTime(){
            let displayTime = this.APIData_in.orderTime.find((el)=>{
                if(el.id ===this.inputData.orderTime){
                    return el.time;
                }
            })
            // console.log(displayTime.time)
            return displayTime.time;
        },
        // 廚師團隊
        chefTeamName(){
            let orderTeamName = this.APIData_in.chefTeam.find(el=>el.id == this.inputData.chefTeam);
            // console.log(orderTeamName)
            return {...orderTeamName}.name;
        },
        
        // 單品加購總金額計算
        otherPrice(){
            let otherDish = this.APIData_in.otherDish.map(item=>{
                // console.log(item.qty, item.price)
                 if(item.qty > 0){
                    return parseInt(item.qty) * parseInt(item.price) ;
                 }else return 0;
            }).reduce((a,b)=>a+b,0)
            
            let otherServies = this.APIData_in.servies.map(serve=>{
                if(serve.checked === true){
                    // console.log(serve.title)
                    return parseInt(serve.price);
                }else return 0
            }).reduce((a,b)=>a+b,0)
            
            otherServies = parseInt(otherServies) * parseInt(this.inputData.peoCount);
            return ( otherDish + otherServies ).toLocaleString()
        },

        // workFlow step 4
        // 格式驗證
        checkName(){
            // 姓名驗證 (中文與英文)
            if(this.inputData.name =="")return false
            return this.nameRule(this.inputData.name);
        },
        checkPhoneNum(){
            // 手機驗證格式
            return this.phoneRule(this.inputData.phone);
        },
        checkEmail(){
            // 電子信箱驗證格式
            return this.emailRule(this.inputData.email);
        },     
        checkCard(){
            // console.log(this.creditCardRule())
            return this.creditCardRule()
        },
        checkCardName(){
            // 姓名驗證 (中文與英文)
            if(this.inputData.cardName =="")return false
            return this.nameRule(this.inputData.cardName);
        }, 
        checkCardDate(){
            if(this.inputData.cardDate =="" || this.inputData.cardDate == undefined )return false
                //  return this.inputData.cardDate.length === 4
               return this.lengthRule(this.inputData.cardDate,4)
        },
        checkCardCode(){
            if(this.inputData.cardCode =="" || this.inputData.cardCode == undefined )return false
                 return this.lengthRule(this.inputData.cardCode,3)
        },
       

    },
    watch:{
        'workFlow.step'(newValue){
            // 限制控制流程1(套餐選擇),2(單品選擇),3(細項列表),4(填寫資料), 5(還沒做Submit Form 表單)
            if(newValue < 1){
                this.workFlow.step = 1
            }else if(newValue > 5){
                this.workFlow.step = 5
            }
        },
        'inputData.point'(newValue){
            // 強制只能輸入數字
            this.$nextTick(() => {
                this.inputData.point= String(newValue).replace(/\D/g, '');
            });
          
        },
        
    },
    mounted(){
        // 把Local Stroage 給讀出來並渲染在網頁畫面上
        if(JSON.parse(localStorage.getItem('reseverOrder')) !== null){   
            this.inputData = JSON.parse(localStorage.getItem('reseverOrder'))
        }
       
    },
    created(){
        this.initAPI();
    },
   
}

const vm = Vue.createApp(RootComponent).mount('#myWorkFlow')