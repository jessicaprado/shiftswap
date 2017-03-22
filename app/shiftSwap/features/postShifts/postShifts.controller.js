angular
	.module('shiftSwap.postShifts')
	.controller('PostCtrl', PostCtrl);

function PostCtrl($scope, routes) {
	var vm = this;



	vm.shift = {
			type: '',
			date: '',
			startTime: '',
			endTime: '',
			accepted: false,
		};

	resetView();

	function resetView() {
		vm.shift = {
			type: '',
			date: '',
			startTime: '',
			endTime: '',
			accepted: false,
		}
	};

	vm.addShift = function() {
		routes.createShift(vm.shift);
		resetView();
	}

}