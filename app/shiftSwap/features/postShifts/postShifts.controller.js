angular
	.module('shiftSwap.postShifts')
	.controller('PostCtrl', PostCtrl);

function PostCtrl($scope, routes) {
	var vm = this;
    vm.name = localStorage.getItem('name');


	vm.shift = {
			type: '',
			date: '',
			startTime: '',
			endTime: '',
			accepted: false,
			postedBy: vm.name
		};

	resetView();

	function resetView() {
		vm.shift = {
			type: '',
			date: '',
			startTime: '',
			endTime: '',
			accepted: false,
            postedBy: vm.name
		}
	};

	vm.addShift = function() {
        console.log(vm.shift);
		routes.createShift(vm.shift);

		resetView();
	}

}