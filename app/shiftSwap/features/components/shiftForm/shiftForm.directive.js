angular
	.module('shiftSwap.component.shiftForm')
	.directive('shiftForm', ShiftForm);

function ShiftForm() {
	return {
		restrict: 'E',
		scope: {
			formData: "="
		},
		templateUrl: '/shiftSwap/features/components/shiftForm/shiftForm.html',
		controller: ShiftFormCtrl,
		controllerAs: 'ShiftFormVM',
		bindToController: true
	}
}

function ShiftFormCtrl() {
	var vm = this;

	
}
