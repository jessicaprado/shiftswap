angular
	.module('shiftSwap.openShifts')
	.controller('OpenCtrl', OpenCtrl);

function OpenCtrl($scope, routes) {
	var vm = this;

	//get call to display shifts
	vm.openShifts = [];
	routes.displayShift(vm.openShifts)

	//start of ng-click to accept shifts
    vm.acceptedShifts = [];
    vm.acceptShift = function() {
        console.log("sup")
    }
}