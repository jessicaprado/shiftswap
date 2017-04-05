angular
	.module('shiftSwap.openShifts')
	.controller('OpenCtrl', OpenCtrl);

function OpenCtrl($scope, routes, $http, $rootScope, uiCalendarConfig) {
	var vm = this;

    //at log in, site will grab fb id and save to local storage
    $http.get('/loggedIn').success(function(user) {
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
    //gets localStorage
    vm.name = localStorage.getItem('name');
    vm.userID = localStorage.getItem('id');

    //get call to display shifts
	vm.openShifts = [];
	routes.displayShift(vm.openShifts);


    /* alert on eventClick */
    $scope.alertOnEventClick = function(calEvent, date, jsEvent, view){
        specifiedEvent = {
            id: calEvent._id,
            title: calEvent.title,
            date: calEvent.date,
            start: calEvent._start._i,
            end: calEvent._end._i,
            postedBy: calEvent.postedBy,
            accepted: calEvent.accepted
        };
        $scope.alertMessage = specifiedEvent;

    };

	//configCalendar
    vm.uiConfig = {
        calendar : {
            height: 500,
            editable: true,
            displayEventTime: true,
            header:{
                left: 'title',
                right: 'today prev,next'
            },
            eventClick: $scope.alertOnEventClick,
        }
    }

    //takes full array of open shifts and displays them on calendar
    vm.eventSources = [vm.openShifts];


	//start of ng-click to accept shifts
    vm.acceptShift = function(id, userID, $scope) {
        routes.acceptedShift(id, userID);
        $scope.alertMessage = "You have picked up this shift!"
    }




}