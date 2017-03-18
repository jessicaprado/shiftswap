angular
	.module('shiftSwap', [
		//global dependencies
		'ui.router',

		//angular Material
		'ngMaterial',

		//feeatures
		'shiftSwap.openShifts',
		'shiftSwap.postShifts',
		'shiftSwap.settings',
		])
	.config(appConfig);

function appConfig($urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
}