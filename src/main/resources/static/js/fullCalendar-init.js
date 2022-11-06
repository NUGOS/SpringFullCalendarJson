document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {

        headerToolbar: {
            left: 'prev,today,next',
            center: 'title',
            right: 'dayGridMonth,timeGridSevenDay,timeGridDay'
        },
        views: {
            timeGridSevenDay: {
                type: 'timeGrid',
                duration: { days: 7 },
                buttonText: 'Тиждень'
            }
        },
        navLinks: true,
        navLinkDayClick: function(date, jsEvent) {
            console.log('day', date.toISOString());
            console.log('coords', jsEvent.pageX, jsEvent.pageY);
        },
        navLinkWeekClick: function(weekStart, jsEvent) {
            console.log('week start', weekStart.toISOString());
            console.log('coords', jsEvent.pageX, jsEvent.pageY);
        },
        themeSystem: 'bootstrap5',
        selectable: true,
        selectHelper: true,
        initialView: 'dayGridMonth',
        locale: "uk",
        events: [
            {
                url: '/api/event/all'
            }
        ],

    });
    calendar.render();
});