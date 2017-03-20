angular
	.module('shiftSwap', [
		//global dependencies
		'ui.router',

		//time picker
		'moment-picker',

		//feeatures
		'shiftSwap.openShifts',
		'shiftSwap.postShifts',
		'shiftSwap.settings',
		])
	.config(appConfig);

function appConfig($urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
}