angular
	.module('shiftSwap.postShifts')
	.controller('PostCtrl', PostCtrl);

function PostCtrl(routes) {
	var vm = this;
    vm.name = localStorage.getItem('name');
    vm.userID = localStorage.getItem('id');


	vm.shift = {
			type: '',
			date: '',
			startTime: '',
			endTime: '',
			accepted: false,
			postedBy: vm.name,
			userID: vm.userID
		};

	resetView();

	function resetView() {
		vm.shift = {
			type: '',
			date: '',
			startTime: '',
			endTime: '',
			accepted: false,
            postedBy: vm.name,
            userID: vm.userID
		}
	};

	vm.addShift = function() {
		var start = vm.shift.startTime;
        start = start.slice(0, -2);
		//start = start.toIsoString();
        console.log(start);

		routes.createShift(vm.shift);

		resetView();
	}

}