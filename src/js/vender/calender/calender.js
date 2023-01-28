document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialDate: new Date(),
      selectable: true,
      businessHours: true,
      dayMaxEvents: true, 
      events: [
        {
          title: '可預約',
          start: '2022-12-01',
          // display:'background'
        }
      ]   
    });

    calendar.render();
});
