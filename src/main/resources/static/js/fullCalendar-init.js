document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
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