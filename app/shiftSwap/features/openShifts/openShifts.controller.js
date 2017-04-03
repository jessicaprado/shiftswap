angular
	.module('shiftSwap.openShifts')
	.controller('OpenCtrl', OpenCtrl);

function OpenCtrl($scope, routes, $http, $rootScope, $location) {
	var vm = this;

    //at log in, site will grab fb id and save to local storage
    $http.get('/loggedin').success(function(user) {
        $rootScope.errorMessage = null;
        //User is Authenticated
        if (user !== '0') {
            $rootScope.currentUser = user;
            localStorage.setItem('id', user.facebook_id);
            localStorage.setItem('name', user.name);
        } else { //User is not Authenticated
            $rootScope.errorMessage = 'You need to log in.';

        }
    });

    vm.name = localStorage.getItem('name');
    vm.userID = localStorage.getItem('id');


    //get call to display shifts
	vm.openShifts = [];
	routes.displayShift(vm.openShifts);

	//start of ng-click to accept shifts
    vm.acceptShift = function(id, userID) {
        routes.acceptedShift(id, userID);
    }

}

$(document).ready(function() {
    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
        defaultView: 'month',
        height: 'auto',
        events: {
            url: '/api/shifts'
        }
    });

});