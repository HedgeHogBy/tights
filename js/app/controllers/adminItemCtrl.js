tightsApp.controller('adminItemCtrl', function adminItemCtrl($scope, $routeParams, Resources) {

    if (resourceType) {
        $scope.list = _.find(resources, function(resource){
                return resource.type === resourceType;
            }
        );
    }
});