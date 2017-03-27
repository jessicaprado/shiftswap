angular
	.module('shiftSwap.component.routes')
	.service('routes', RouteService);

function RouteService($http) {

    return {
        createShift: function (routes) {
            $http({
                method: 'POST',
                url: '/api/shifts',
                data: routes,
            }).then(function (response) {
                console.log(response)

            })
        },

        displayShift: function (routes) {
            $http({
                method: 'GET',
                url: '/api/shifts',
            }).then(function (response) {
                response.data.forEach(function (element) {
                    routes.push(element);
                });
            })
        },

        acceptedShift: function (routes) {
            $http({
                method: 'POST',
                url: '/api/accepted',
                data: {'id': routes},
            }).then(function (response) {


            })
        }
    }
}