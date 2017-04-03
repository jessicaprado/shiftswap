angular
	.module('shiftSwap.postShifts')
	.controller('PostCtrl', PostCtrl);

function PostCtrl(routes) {
	var vm = this;
    vm.name = localStorage.getItem('name');
    vm.userID = localStorage.getItem('id');


	vm.shift = {
			title: '',
			date: '',
			start: '',
			end: '',
			accepted: false,
			postedBy: vm.name,
			userID: vm.userID
		};

	resetView();

	function resetView() {
		vm.shift = {
			title: '',
			date: '',
			start: '',
			end: '',
			accepted: false,
            postedBy: vm.name,
            userID: vm.userID
		}
	};

	vm.addShift = function() {
		var dateDate = vm.shift.date; // Mon Apr 03 2017 00:00:00 GMT-0400 (EDT)
        dateDate = dateDate.toISOString();
        dateDate = dateDate.slice(0, -14);

		var start = vm.shift.start;
        start = start.slice(0, -3);

        if (start.length < 5) {
        	start = "0" + start;
		} else {
        	start = start;
		};
		start = dateDate + " " + start + ".00.000Z";
        Date.parse(start);
        vm.shift.start = start;

		var end = vm.shift.end;
        end = end.slice(0, -3);

        if (end.length < 5) {
            end = "0" + end;
        } else {
            end = end;
        };
        end = dateDate + " " + end + ".00.000Z";
        Date.parse(end);
        vm.shift.end = end;

		routes.createShift(vm.shift);
		resetView();
	}

}