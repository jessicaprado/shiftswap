angular
	.module('shiftSwap.login')
	.controller('LoginCtrl', LoginCtrl);

function LoginCtrl($location, $scope, $http, $rootScope) {
	var vm = this;

    vm.login = function(user) {
        $http.post('/login', user)
            .success(function(response) {
                $rootScope.currentUser = response;
                $location.url("/profile");
            });
    }

}