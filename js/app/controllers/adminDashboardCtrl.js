tightsApp.controller('adminDashboardCtrl', function adminDashboardCtrl($scope, Resources) {

    if (Resources) {
        $scope.resources = Resources;
    }
});