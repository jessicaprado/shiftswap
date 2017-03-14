angular
	.module('shiftSwap', [
		//global dependencies
		'ui.router',

		//feeatures
		'shiftSwap.openShifts',
		])
	.config(appConfig);

function appConfig($urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
}