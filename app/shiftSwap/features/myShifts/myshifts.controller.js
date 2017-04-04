angular
    .module('shiftSwap.myShifts')
    .controller('MyShiftsCtrl', MyShiftsCtrl);

function MyShiftsCtrl(routes, $scope) {
    var vm = this;

    vm.myShifts = [];
    routes.myAcceptedShift(vm.myShifts);

    //configCalendar
    vm.uiConfig = {
        calendar : {
            defaultView: 'agendaWeek',
            height: 500,
            editable: true,
            displayEventTime: true,
            header:{
                center: 'title',
                right: 'today prev,next'
            },
            //eventClick: $scope.alertOnEventClick,
        }
    }

    //takes full array of open shifts and displays them on calendar

    vm.eventSources = vm.myShifts;

}
