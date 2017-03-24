angular
	.module('shiftSwap', [
		//global dependencies
		'ui.router',

		//time picker
		'moment-picker',
        'ngRoute',


		//feeatures
		'shiftSwap.openShifts',
		'shiftSwap.postShifts',
		'shiftSwap.settings',
        'shiftSwap.login',
        'shiftSwap.myShifts',
		])
	.config(appConfig);

function appConfig($urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
}

