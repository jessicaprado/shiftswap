angular
	.module('shiftSwap.postShifts')
	.config(postConfig);

function postConfig($stateProvider) {
	$stateProvider.state({
		name: 'postshifts',
		url: '/postshifts',
		templateUrl: '/shiftSwap/features/postShifts/postShifts.html',
		controller: 'PostCtrl',
		controllerAs: 'PostVM'
	})
}