tightsApp.controller('ContactsCtrl', function ContactsCtrl($scope, $modal) {
    $scope.openContacts = function () {

        var modalInstance = $modal.open({
            templateUrl: 'myModalContent.html',
            controller: ModalInstanceCtrl
        });

    };
});

var ModalInstanceCtrl = function ($scope, $modalInstance) {
    $scope.closeContacts = function () {
        $modalInstance.dismiss('cancel');
    };
};