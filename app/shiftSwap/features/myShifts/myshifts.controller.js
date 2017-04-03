angular
    .module('shiftSwap.myShifts')
    .controller('MyShiftsCtrl', MyShiftsCtrl);

function MyShiftsCtrl(routes) {
    var vm = this;

    vm.myShifts = [];
    routes.myAcceptedShift(vm.myShifts);
    console.log(vm.myShifts);
}

$(document).ready(function() {
    // page is now ready, initialize the calendar...
    $('#calendar').fullCalendar({
        defaultView: 'agendaWeek',
        events: function (start, end, timezone, callback ) {
            $.ajax({
                url: '/api/accepted',
                dataType: 'json',
                success: function(doc) {
                    var events = [];
                    $(doc).each(function() {
                        events.push({
                            title: $(this).attr('title'),
                            start: $(this).attr('start') // will be parsed
                        });
                    });
                    callback(events);
                }
            });
        }
    });
});