angular
	.module('shiftSwap.component.routes')
	.service('routes', RouteService);

function RouteService($http) {

	return {
		createShift: function(routes) {
			console.log(routes);
			// $http({
			// 	method: 'POST',
			// 	url: '/api/shifts',
			// 	data: {
			// 		type: '',
			// 		date: '',
			// 		startTime: '',
			// 		endTime: '',
			// 	},
			// }).then(function(response){
			// 	console.log(response);
			// })
		}
	}
}