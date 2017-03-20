angular
	.module('shiftSwap.openShifts')
	.controller('OpenCtrl', OpenCtrl);

function OpenCtrl($scope, routes) {
	var vm = this;

	vm.openShifts = [];
	
	routes.displayShift(vm.openShifts)
}