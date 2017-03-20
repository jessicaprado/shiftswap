angular
	.module('shiftSwap.component.shifts')
	.directive('shifts', Shifts);

function Shifts() {
	return {
		restrict: 'E',
		scope: {
			shiftsData: "="
		},
		templateUrl: '/shiftSwap/features/components/shifts/shifts.html',
		controller: ShiftsCtrl,
		controllerAs: 'ShiftsVM',
		bindToController: true
	}
}

function ShiftsCtrl($http, routes) {
	var vm = this;



	
}
