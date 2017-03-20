angular
	.module('shiftSwap.component.timePicker')
	.directive('timePicker', TimePicker);

function TimePicker() {
	return {
		restrict: 'E',
		scope: {
			timeData: "="
		},
		templateUrl: '/shiftSwap/features/components/timePicker/timePicker.html',
		controller: TimePickerCtrl,
		controllerAs: 'TimePickerVM',
		bindToController: true
	}
}

function TimePickerCtrl() {
	var vm = this;
}