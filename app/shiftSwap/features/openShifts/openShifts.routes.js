angular
	.module('shiftSwap.openShifts')
	.config(openConfig);

function openConfig($stateProvider) {
	$stateProvider.state({
		name: 'openshifts',
		url: '/openshifts',
		templateUrl: '/shiftSwap/features/openShifts/openShifts.html',
		controller: 'OpenCtrl',
		controllerAs: 'OpenVM'
	})
}