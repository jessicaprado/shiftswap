angular
    .module('shiftSwap.component.modal')
    .directive('modalDialog', modalDialog)



function modalDialog() {
    return {
        restrict: 'E',
        scope: {
            modalData: '='
        },
        templateUrl: '/shiftSwap/features/components/modal/modal.html',
        controller: ModalDialogCtrl,
        controllerAs: 'ModalDialogVM',
        bindToController: true
    };
};

function ModalDialogCtrl($scope) {
    var vm = this;

    vm.modalShown = false;
    vm.toggleModal = function() {
        vm.modalShown = !$scope.modalShown;
    }
}