angular
    .module('shiftSwap.openShifts')
    .config(loginConfig);

function loginConfig($stateProvider) {
    $stateProvider.state({
        name: 'login',
        url: '/',
        templateUrl: '/shiftSwap/features/login/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'LoginVM'
    })
}