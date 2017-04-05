angular
    .module('shiftSwap.myShifts')
    .config(myShiftsConfig);

function myShiftsConfig($stateProvider) {
    $stateProvider.state({
        name: 'myShifts',
        url: '/myShifts',
        templateUrl: '/shiftSwap/features/myShifts/myShifts.html',
        controller: 'MyShiftsCtrl',
        controllerAs: 'MyShiftsVM'
    })
}