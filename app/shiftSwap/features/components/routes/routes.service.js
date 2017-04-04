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
                //console.log(response)
            })
        },

        displayShift: function (routes) {
            $http({
                method: 'GET',
                url: '/api/shifts',
            }).then(function (response) {
                response.data.forEach(function (element) {

                    // start = element.start;
                    // start = start.slice(11, 16);
                    // if (start[0] == 0) {
                    //     start = start + " AM"
                    // } else {
                    //     start = start + " PM"
                    // }
                    // element.start = start;
                    //
                    // end = element.end;
                    // end = end.slice(11, 16);
                    // if (end[0] == 0) {
                    //     end = end + " AM"
                    // } else {
                    //     end = end + " PM"
                    // }
                    // element.end = end;



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
                console.log(response)
            })
        },
        myAcceptedShift: function (routes) {
            $http({
                method: 'GET',
                url: '/api/accepted',
            }).then(function (response) {
                response.data.forEach(function (element) {
                    routes.push(element.acceptedShifts);
                });
            })
        }
    }
}