
// ajax直接帶入


//限制月份 到一月不能點  visibility:hidden  最多往後兩個月 ???


document.addEventListener('DOMContentLoaded', function() {
  
  
const final = {}
  fetch('php/frontpage/index_calender.php')

    .then(function(response) {
      return response.json();
    })

    .then( dataAPI =>{
      
      let final_array = []
      dataAPI.forEach((data_el)=>{  
        // console.log(data_el)
        let data = []
        
        let final = {}

        // for (let index = 1; index < data.length; index++) {
          
        //   const element = data[index];
        //   if(!final[element.date]){
        //     final[element.date] = {
        //       title:'可預約',
        //       // start:element.date,
        //       // check:[element.date]
            
        //     }
        //     console.log(final[element.date].check.push(element.date))
        //   }else{
        //     console.log(final[element.date].check.push(element.date))
        //     final[element.date].check.push(element.date)
      
        //     if(final[element.date].check.length > 2){
      
        //       final[element.date].title = '不可預約'
        //       // final[element.date].backgroundColor = '#D3D3D3'
        //       // final[element.date].borderColor = '#D3D3D3'
        //     }
        //   }
    
        // }
    
        Object.values(final).forEach((item) => {
          final_array.push(item)
        });
      
        let obj={
          date:data_el.AppointmentDate,
          teamID:data_el.TeamID,
        }
        
        final_array.push(obj)
        

        
      })

      
      final_array.forEach((f)=>{
        f.backgroundColor = '#D3D3D3';
        f.borderColor = '#D3D3D3';
        f.title = '已預約';
      })

      // final_array[11].backgroundColor = '#D3D3D3'
      // final_array[11].borderColor = '#D3D3D3'  
 

      // console.log(final_array);
      var calendarEl = document.getElementById('calendar');
      var calendar = new FullCalendar.Calendar(calendarEl, {
        initialDate: new Date(),
        selectable: true,
        businessHours: true,
        dayMaxEvents: true, 
        events:final_array,
          moreLinkContent:function(args){
            let count_element = document.createElement('span');
            count_element.setAttribute('style', 'font-size: 12px;');
            count_element.innerHTML = '顯示更多';
          return {
              domNodes:[count_element],
          }
        }
      
      });
      
      calendar.render();
      
  });

  
});





