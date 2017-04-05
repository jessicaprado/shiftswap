angular
    .module('shiftSwap.myShifts')
    .config(myShiftsConfig);

function myShiftsConfig($stateProvider) {
    $stateProvider.state({
        name: 'myshifts',
        url: '/myshifts',
        templateUrl: '/shiftSwap/features/myShifts/myShifts.html',
        controller: 'MyShiftsCtrl',
        controllerAs: 'MyShiftsVM'
    })
}