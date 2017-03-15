angular
	.module('shiftSwap', [
		//global dependencies
		'ui.router',

		//feeatures
		'shiftSwap.openShifts',
		'shiftSwap.postShifts',
		])
	.config(appConfig);

function appConfig($urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
}