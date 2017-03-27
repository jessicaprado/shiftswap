angular
    .module('shiftSwap.myShifts')
    .controller('MyShiftsCtrl', MyShiftsCtrl);

function MyShiftsCtrl(routes) {
    var vm = this;

    vm.myShifts = [];
    routes.myAcceptedShift(vm.myShifts);
    console.log(vm.myShifts);
}