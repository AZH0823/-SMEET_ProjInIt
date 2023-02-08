 const app = Vue.createApp({
  data() {
    
      return {
        OrderDetail:[],
        apiData:[
            
        ],
        popOnMsg:{
            isEdit:false,
            display:false,
            OrderId:'',   
            Name:'',             
        },

        isOrderSortMax : false,
        isDateSortMax : false
      };
    },
    computed:{

    },
    methods:{

        // API Start
        // 取得所有訂單資料
          // 取得套餐細部資訊
        getSetPrice(){
            const _this = this;
            fetch('php/reserveAPI/getSetPriceAPI.php')
            .then(response =>{
                return response.json();
            })
            .then( data =>{
                // 將套餐資訊放入APIData (圖片,售價,ID...)
                // console.log(data)
                _this.apiData.forEach(Order=>{
                    data.forEach(Set=>{
                        if(parseInt(Order.SetID) == parseInt(Set.id)){
                            Order.setName = Set.setName;
                            Order.setPrice = Set.price;

                        }
                    })
                })
                
            }).catch(err=>{
                console.log(err)
            })
        },
        getOrderListData(){
            const _this = this;
            fetch('php/backpage/getOrderListData.php')
            .then(response =>{
                return  response.json()
            })
            .then( datalist =>{
              datalist.forEach(el => {
                this.apiData.push(el)
              });
              _this.getSetPrice();
            }).catch(err=>{
                console.log(err)
            })
            
        },

        // 取得一筆資料
        getOrderOneData(id){
            const _this = this;
            fetch(`php/backpage/getOrderListData.php?ID=${id}`)
            .then(response =>{
                return  response.json()
            })
            .then( datalist =>{
                // console.log(datalist)
                _this.OrderDetail = [];
                let obj = []
                datalist.forEach(data=>{
                    // 照種類排序 前菜 > 刺身 > 主食 > 甜點 > 飲品 > 單品 > 服務

                    if(!obj.hasOwnProperty(`${data.DtName}`)){
                        obj[data.DtName] = []
                    }
                    obj[data.DtName].push(data)
                })
                // 待 Dom 元素渲染在將物件賦予 ApiData => OrderDetail 
                _this.$nextTick(function () {  
                    _this.OrderDetail = {...obj}
                });
                // console.log( _this.OrderDetail)
            }).catch(err=>{
                console.log(err)
            })
        },

        // 改變訂單狀態
        updateOrderCondition(id,Condition){
            // console.log(id,Condition)
            $.ajax({
                method: "POST",
                url: "php/backpage/updateOrderCondition.php",
                data: {
                    Msg:'updateCondition',
                    ID:id,
                    Condition:Condition
                },
                dataType: "text",
                success: function (response) {
                    if(response =="Y"){
                        console.log(response)
                    }
                },
                error: function (exception) {
                    alert("發生錯誤: " + exception.status);
                }
            });
        },

        // 改變訂單明細
        UpadteOrderInfo(popMsg){
            // console.log(popMsg)
            // console.log(popMsg.OrderId,popMsg.Name,popMsg.Phone,popMsg.Email,popMsg.Address,popMsg.notes)
            $.ajax({
                method: "POST",
                url: "php/backpage/updateOrderCondition.php",
                data: {
                    Msg:'updateInfo',
                    ID: popMsg.OrderId,
                    Name: popMsg.Name,
                    Phone: popMsg.Phone,
                    Email:popMsg.Email,
                    Address:popMsg.Address,
                    notes:popMsg.notes
                },
                dataType: "text",
                success: function (response) {
                    // console.log(response)

                    // 將訂單新資料放回來Vue API
                    if(response =='Y'){
                        // console.log(`UpadteOrderInfo Sucessful`);
                        
                    }else{
                        console.log(`其他錯誤`);
                    }
                },
                error: function (exception) {
                    alert("發生錯誤: " + exception.status);
                }
            });
        },

        // API End


        // Vue Methods
        UpadteCondition(item,e){
            if(!confirm("請問是否要更換訂單狀態嗎?")){
                e.target.value = item.Condition
            }else{
                item.Condition = e.target.value
                  // 更新DB資料 Ajax
                  this.updateOrderCondition(item.ID,item.Condition)
            }
            
        },

        ClickOrderDetail(item){
            const data = JSON.parse(JSON.stringify(item));
            // console.log(data);
            this.popOnMsg = {}
            this.popOnMsg.display = true;
            document.querySelector('body').style.overflow = "hidden"
            
            this.popOnMsg.OrderId = data.ID;
            this.popOnMsg.AppointmentDate = data.AppointmentDate;
            this.popOnMsg.TotalPrice = data.TotalPrice;
            this.popOnMsg.Count = data.Count;
            this.popOnMsg.Scheduled = data.Scheduled;
            this.popOnMsg.point = data.point;

            this.popOnMsg.Name = data.Name;
            this.popOnMsg.Phone = data.Phone;
            this.popOnMsg.Email = data.Email;
            this.popOnMsg.setName = data.setName;
            this.popOnMsg.Address = data.Address;
            this.popOnMsg.notes = data.notes;
            this.popOnMsg.LederName = data.LederName;

            // 把資料帶去給PopMsg
            this.getOrderOneData(item.ID);
        },
        // 排序訂單編號
        sortOrderID(){
            if(this.isOrderSortMax){
                // console.log(`由大到小`)
                this.apiData.sort((a,b)=>{
                    // console.log(a.ID,b.ID)
                    this.isOrderSortMax = false;
                    return   b.ID - a.ID 
                });
                
            }else{
                // console.log(`由小到大`)
                this.apiData.sort((a,b)=>{
                    // console.log(a.ID,b.ID)
                    this.isOrderSortMax = true;
                    return  a.ID - b.ID
                });
                
            }
        },
        // 排序預約日期排序
        sortDate(){
            if(this.isDateSortMax){
                // console.log(`由大到小`)
                this.apiData.sort((a,b)=>{
                    // console.log(a.ID,b.ID)
                    this.isDateSortMax = false;
                    
                    return new Date(b.AppointmentDate).getTime() - new Date(a.AppointmentDate).getTime();
                });
                
            }else{
                // console.log(`由小到大`)
                this.apiData.sort((a,b)=>{
                    // console.log(a.ID,b.ID)

                    this.isDateSortMax = true;
                    return new Date(a.AppointmentDate).getTime() - new Date(b.AppointmentDate).getTime();
                });
                
            }
        },
        closePopOnOther(){
            // console.log(`sss`)
            this.popOnMsg.display= false;
            let body = document.querySelector('body');
            body.style.overflow = "auto";
            this.popOnMsg.isEdit = false;
        },
        closePopOn(){
            this.popOnMsg.display = false
            let body = document.querySelector('body');
            body.style.overflow = "auto";
            this.popOnMsg.isEdit = false;               
        },
        popEditIcon(){
            this.popOnMsg.isEdit = !this.popOnMsg.isEdit
        },
        popSave(){
            const nowPopValue = {
                Name:this.$refs.order_name.value,
                Phone:this.$refs.order_phone.value,
                Email:this.$refs.order_email.value,
                Address:this.$refs.order_addr.value,
                notes:this.$refs.order_note.value,
            };

            
            if(this.popOnMsg.isEdit){
                // 編輯訂單資訊
                if(window.confirm('確定修改訂單資訊嗎?') && 
                        nowPopValue.Name.trim() !=='' && 
                        nowPopValue.Phone.trim() !=='' &&
                        nowPopValue.Email.trim() !=='' &&
                        nowPopValue.Address.trim() !==''
                        ){
                    // console.log(`cc`)
                    // console.log(nowPopValue.Phone)
                    this.popOnMsg.Name = nowPopValue.Name;
                    this.popOnMsg.Phone = nowPopValue.Phone;
                    this.popOnMsg.Email = nowPopValue.Email;
                    this.popOnMsg.Address = nowPopValue.Address;
                    this.popOnMsg.notes = nowPopValue.notes;

                    this.popOnMsg.isEdit = false;
                    this.UpadteOrderInfo(this.popOnMsg);

                    // console.log(`更新API 資料`)
                    const _id =  this.popOnMsg.OrderId
                    
                    // 更新VueData 資料
                    this.apiData.forEach((data)=>{
                        console.log(data)
                        if(_id == data.ID){
                            data.Name = nowPopValue.Name;
                            data.Phone = nowPopValue.Phone;
                            data.Email = nowPopValue.Email;
                            data.Address = nowPopValue.Address;
                            data.notes = nowPopValue.notes;
                        }
                    })

                }else{
                    alert('資料不得為空白')
                }
            }else{
                    alert('沒有資料有修改過')
            }
            
        }
        
    },
    
    watch:{

    },
    mounted(){

        this.getOrderListData();
        
    },
    updated(){
        // d_none
        // this.$refs.pop.classList.remove('d_none')
        // console.log('update',this.$refs.pop.classList)
      //console.log(this.mytext);
      //console.log(this.$refs.my_input.getAttribute("data-text"));
    },
  });
app.mount("#oderList");
  