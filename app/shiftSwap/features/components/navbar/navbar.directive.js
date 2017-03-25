angular
	.module('shiftSwap.component.navbar')
	.directive('navbar', Navbar);

function Navbar() {
	return {
		restrict: 'E',
		scope: {
			navbarData: "="
		},
		templateUrl: '/shiftSwap/features/components/navbar/navbar.html',
		controller: NavbarCtrl,
		controllerAs: 'NavbarVM',
		bindToController: true
	}
}

function NavbarCtrl() {
	var vm = this;

	vm.navbarButtons = [{
		title: 'Open Shifts',
		link: 'openshifts'
		}, {
		title: 'Post Shifts',
		link: 'postshifts'
		}, {
        title: 'My Shifts',
        link: 'myshifts'
		}]
}

