
// ajax直接帶入


//限制月份 到一月不能點  visibility:hidden  最多往後兩個月 ???

// 

document.addEventListener('DOMContentLoaded', function() {

  const data = [


    //假資料
    //滿三組
    {
      date:'2023-01-25',
      teamID:1,
      // backgroundColor :'#black'
    },
    {
      date:'2023-01-25',
      teamID:2
  
    },
    {
      date:'2023-01-25',
      teamID:3
    },

    //未滿三組
    
    {
      date:'2023-03-25',
      teamID:3
    }
  ]
  const final = {
 
  }

  const final_array = []
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    if(!final[element.date]){
      final[element.date] = {
        title:'可預約',
        start:element.date,
        check:[element.date]
      }
    }else{
      final[element.date].check.push(element.date)

      if(final[element.date].check.length > 2){

        final[element.date].title = '不可預約'
        final[element.date].backgroundColor = '#D3D3D3'
        final[element.date].borderColor = '#D3D3D3'

      }
    }
    
  }

  Object.values(final).forEach((item) => {
    final_array.push(item)
  });



  console.log(final_array);
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialDate: new Date(),
      selectable: true,
      businessHours: true,
      dayMaxEvents: true, 
      events:final_array,
  
    });

    calendar.render();
});




