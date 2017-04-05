angular
	.module('shiftSwap.postShifts')
	.config(postConfig);

function postConfig($stateProvider) {
	$stateProvider.state({
		name: 'postShifts',
		url: '/postShifts',
		templateUrl: '/shiftSwap/features/postShifts/postShifts.html',
		controller: 'PostCtrl',
		controllerAs: 'PostVM'
	})
}