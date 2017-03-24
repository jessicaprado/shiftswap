angular
	.module('shiftSwap.openShifts')
	.config(openConfig);

function openConfig($stateProvider, $routeProvider) {
	$stateProvider.state({
		name: 'openshifts',
		url: '/openshifts',
		templateUrl: '/shiftSwap/features/openShifts/openShifts.html',
		controller: 'OpenCtrl',
		controllerAs: 'OpenVM'
	});

    $routeProvider
        .when('/openshifts', {
            resolve: {
                logincheck: checkLoggedin
            }
        });

var checkLoggedin = function($q, $timeout, $http, $location, $rootScope) {
    var deferred = $q.defer();

    $http.get('/loggedin').success(function(user) {

        $rootScope.errorMessage = null;
        //User is Authenticated
        if (user !== '0') {
            $rootScope.currentUser = user;
            deferred.resolve();
        } else { //User is not Authenticated
            $rootScope.errorMessage = 'You need to log in.';
            deferred.reject();
            $location.url('/');
        }
    });
    return deferred.promise;
}
}
