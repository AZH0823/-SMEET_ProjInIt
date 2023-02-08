const app = Vue.createApp({
      data() {
          return {
              //存放API 回來的資料
              data:{
                  // 套餐資料
                  sets:[
                  ],
                  // 廚師團隊
                  chefTeam:[
                  ],
                  // 預定時間
                  oderTime:[
                      {id:1,txt:'午餐',time:'11:00-14:00'},
                      {id:2,txt:'下午茶',time:'14:30-16:00'},
                      {id:3,txt:'晚餐',time:'18:00-21:00'},
                  ] , 
                  historylist:[],
                  // 可預約的廚師團隊
                  chefScheduled:[]
              },
              
              //使用者所選擇的下拉選單項目(要送到reseve02.html) 
              inputData:{
                  agress: "",  // 同意書
                  sets:"",  // 套餐 
                  peoCount:"", // 人數
                  date: '', // 預約日期
                  orderTime:"", // 預約時段
                  chefTeam:"", //廚師團隊

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
                  cardNumer:'',
                  // 信用卡連號
                  cards:[
                      {},
                      {},
                      {},
                      {}
                  ],
              },
          };
      },
      computed:{
          // 取得當天日期
          nowDate(){
              let nowDate = new Date().toISOString().slice(0,10);
              return nowDate
          },
          // 取得近兩個月的日期
          getMaxDate(){
              let nowDate = new Date()
              nowDate.setDate(nowDate.getDate() + 60);
              return nowDate.toISOString().slice(0,10);
          },
          // 使用者要勾選日期才可以選擇 "時段" 及 "團隊"
          dateClick(){
              if(this.inputData.date !==''){
                  return false;
              }else{
                  return true;
              }
          },

          vaildAgress(){
              return this.inputData.agress ==="" || this.inputData.agress == false;
          } ,
          vaildSets(){
              return this.inputData.sets ==="";
          },
          vaildPeo(){
              return this.inputData.peoCount ==="";
          },
          vaildDate(){
              return this.inputData.date ==="";
          },
          vaildTime(){
              return this.inputData.orderTime ==="";
          },
          vaildTeam(){
              return this.inputData.chefTeam ==="";
          }
          

          // {
          //     'AGRESS':{
          //         ERROE:'尚未確認預約須知'
          //     },
          //     'AGRESS':{
          //         ERROE:'尚未確認預約須知'
          //     }
          // }
      },
      methods:{    
        dateHandler(){
          // 當使用者按下日期重新渲染團隊
          // 清空放API回來的訂單資料
          this.data.historylist = [];
          this.chefScheduled = [];
          // 每當觸發日期有改變就去去DB拿資料撈單日資料
          this.historylistAPI();                                
        },
        //API拿資料 Start
        getSetPriceAPI(){
          fetch('php/reserveAPI/getSetPriceAPI.php')
          .then(response =>{
              return response.json()
          })
          .then( data =>{
              for(let i = 0;i < data.length;i++){ 
                    this.data.sets.push(data[i])
              } 
          }).catch(err=>{
              console.log(err)
          })
        },
        historylistAPI(){
          fetch("php/reserveAPI/historylistAPI.php", {
              method: "POST",
              headers: {
                'Content-Type': 'application/json'
              },
              body:JSON.stringify({
                  date: this.inputData.date,
                })
            })
            .then(response => response.json())
            .then(data => {
            
              if(data !== null){
                this.data.historylist = data;
              }
              // filter Data
              this.filterTeam();
              
            });
        },
        getTeam(){
            fetch('php/reserveAPI/getTeamAPI.php')
            .then(response =>{
                return  response.json();
            })
            .then( datalist =>{
                datalist.forEach(data=>{
                    this.data.chefTeam.push(data);
                    if(this.inputData.date !==""){
                        this.historylistAPI();
                      }
                  })
                  
                  // console.log(this.data.chefTeam)
            }).catch(err=>{
                console.log(err);
            })
        },
        //API拿資料 End
        // 驗證使用者下拉選單
        vaildDataLists(e){
            let vaildResult = [];
            let errMsg = '';
            for (const [key, value] of Object.entries(this.inputData)) {
              switch(key){
                  case 'agress':
                      if(value === '' || value === false){
                          // alert(`尚未確認預約須知`)
                          errMsg +=`尚未確認預約須知\n`;
                          vaildResult.push(false);
                      }else{
                          vaildResult.push(true);
                      }
                      break;
                  case 'sets':
                      if(value === '' || value === false){
                          // alert(`套餐未選擇`)
                          errMsg +=`套餐未選擇\n`
                          vaildResult.push(false);
                      }else{
                          vaildResult.push(true);
                      }
                  break;
                  case 'peoCount':
                      if(value === '' || value === false){
                          // alert(`人數未選擇`)
                          errMsg +=`人數未選擇\n`;
                          vaildResult.push(false);
                      }else{
                          vaildResult.push(true);
                      }
                  break;
                  case 'date':
                      if(value === '' || value === false){
                          // alert(`預約日期未選擇`)
                          errMsg +=`預約日期未選擇\n`;
                          vaildResult.push(false);
                      }else{
                              vaildResult.push(true);
                      }
                  break;
                  case 'orderTime':
                      if(value === '' || value === false){
                          // alert(`預約時段未選擇`)
                          errMsg +=`預約時段未選擇\n`;
                          vaildResult.push(false);
                      }else{
                              vaildResult.push(true);
                      }
                  break;
                  case 'chefTeam':
                      if(value === '' || value === false){
                          // alert(`尚未選擇預約團隊`)
                          errMsg +=`尚未選擇預約團隊`;
                          vaildResult.push(false);
                      }else{
                          vaildResult.push(true);
                      }
                  break;
              }

                // if(!vaildResult) break;
                // if(value === '' || value === false){
                    //     alert(`${key} : 請填選資料`)
                    //     break;
                    // }
                    
                }
            if(errMsg.length !== 0) alert(errMsg);

            // 使用者六個項目有一個沒有就停止以下動作
            if(vaildResult.includes(false))return;
            this.sentToNextPage();
        },
        saveLocalStroage(){
            // console.log(`儲存使用者資訊`)
            localStorage.setItem('reseverOrder',JSON.stringify(this.inputData));
        },
        sentToNextPage(){
            let c  = confirm(`確認送出資料嗎?`);
            if(c){
                // 送出表單前儲存資訊
                this.saveLocalStroage();
                // console.log(`切換頁面並將資料送出`)
                location.href = 'reserve02.html';
            }
        },
        filterTeam(){
          this.data.chefScheduled = []
          const filterItems = this.data.historylist;
          // console.log(`歷史訂單`,filterItems)
          // 當日只有2組團隊提供服務
          if(filterItems.length > 0 && filterItems.length < 3){ 
              let d = []; //存放有歷史訂單的團隊名稱
              
              filterItems.forEach(el=>{d.push(el.TeamID)});           
          
              // console.log(`aaa`)
              // 把沒有預約的團隊給挑出來放入 data.chefScheduled 給團隊下拉選單渲覽畫面
              this.data.chefScheduled = this.data.chefTeam.filter(el=>{    
                  // console.log(`el`,el.id)                 
                  // console.log(`d`,d)
                  if(!d.includes(el.id)){
                      return el;
                  }                          
              })
              // console.log(this.data.chefScheduled)
              
          // 當日預約額滿
          }else if(filterItems.length ===3){
              alert(`今天預約已滿`);
          }else{
            //當日所有團隊都有空 
            this.data.chefScheduled = this.data.chefTeam;
          }
        },
        
      },
      mounted(){
          // 這邊之後要放入API
          // localStroe 放入 
          // if(LS === null){
          //     this.getTeam();
          // }
              
          let LS = JSON.parse(localStorage.getItem('reseverOrder'));
          if(LS !== null){
              this.inputData  = LS;
              //this.historylistAPI()
          }
          this.getTeam();
          this.getSetPriceAPI();
      },
  });
const vm = app.mount("#reseve_detail");