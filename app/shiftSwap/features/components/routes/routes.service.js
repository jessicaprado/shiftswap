angular
	.module('shiftSwap.component.routes')
	.service('routes', RouteService);

function RouteService($http) {

	return {
		createShift: function(routes) {
			console.log(routes);
			$http({
				method: 'POST',
				url: '/api/shifts',
				data: routes,
			}).then(function(response){
				
				
			})
		},

		displayShift: function(routes) {
			$http({
				method: 'GET',
				url: '/api/shifts',
			}).then(function(response){
				response.data.forEach(function(element){
				routes.push(element);
				});
			})
		}

        /*acceptShift: function(routes) {
            $http({
                method: 'GET',
                url: '/api/myshifts',
            }).then(function(response){
                response.data.forEach(function(element){
                    routes.push(element);
                });
            })
        }*/
	}
}