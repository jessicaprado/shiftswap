angular
    .module('shiftSwap.myShifts')
    .config(myShiftsConfig);

function myShiftsConfig($stateProvider) {
    $stateProvider.state({
        name: 'myshifts',
        url: '/myshifts',
        templateUrl: '/shiftSwap/features/myshifts/myshifts.html',
        controller: 'MyShiftsCtrl',
        controllerAs: 'MyShiftsVM'
    })
}