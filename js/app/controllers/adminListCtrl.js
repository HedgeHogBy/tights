tightsApp.controller('adminListCtrl', function adminListCtrl($scope, $routeParams, Resources) {

    var resourceType = $routeParams.type;

    if (resourceType) {
        $scope.list = _.find(Resources, function(resource){
                return resource.type === resourceType;
            }
        );
    }
});