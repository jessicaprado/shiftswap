angular
	.module('shiftSwap', [
		//global dependencies
		'ui.router',

		//time picker
		'moment-picker',
        'ngRoute',
        'ui.calendar',


		//features
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

