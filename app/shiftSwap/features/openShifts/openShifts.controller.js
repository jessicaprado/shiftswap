angular
	.module('shiftSwap.openShifts')
	.controller('OpenCtrl', OpenCtrl);

function OpenCtrl($scope, routes, $http, $rootScope, $location) {
	var vm = this;


        $http.get('/loggedin').success(function(user) {
            $rootScope.errorMessage = null;
            //User is Authenticated
            if (user !== '0') {
                $rootScope.currentUser = user;
                localStorage.setItem('id', user.facebook.id);
                localStorage.setItem('name', user.facebook.name);
            } else { //User is not Authenticated
                $rootScope.errorMessage = 'You need to log in.';

            }
        });



	//get call to display shifts
	vm.openShifts = [];
	routes.displayShift(vm.openShifts)

	//start of ng-click to accept shifts
    vm.acceptedShifts = [];
    vm.acceptShift = function() {
        console.log("sup")
    }

}