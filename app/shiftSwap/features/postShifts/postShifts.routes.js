angular
	.module('shiftSwap.postShifts')
	.config(postConfig);

function postConfig($stateProvider) {
	$stateProvider.state({
		name: 'postshifts',
		url: '/postshifts',
		templateUrl: '/shiftSwap/features/postshifts/postshifts.html',
		controller: 'PostCtrl',
		controllerAs: 'PostVM'
	})
}