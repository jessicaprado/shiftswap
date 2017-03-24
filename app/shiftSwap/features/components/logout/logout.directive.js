angular
    .module('shiftSwap.component.logout')
    .directive('logout', Logout);

function Logout() {
    return {
        restrict: 'E',
        scope: {
            navbarData: "="
        },
        templateUrl: '/shiftSwap/features/components/logout/logout.html',
        controller: LogoutCtrl,
        controllerAs: 'LogoutVM',
        bindToController: true
    }
}

function LogoutCtrl($rootScope, $http, $location) {
    var vm = this;

    vm.logout = function() {
        $http.post("/logout")
            .success(function() {
                $rootScope.currentUser = null;
                $location.url("/");
            });
    }

}
