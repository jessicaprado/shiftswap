angular
	.module('shiftSwap.postShifts')
	.controller('PostCtrl', PostCtrl);

function PostCtrl($scope) {
	var vm = this;

	vm.shift = {
		type: '',
		date: '',
		startTime: '',
		endTime: '',
	}

	vm.addShift = function() {
		console.log(vm.shift)
	}

}