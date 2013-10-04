tightsApp.controller('adminItemCtrl', function adminItemCtrl($scope, $routeParams, Resources) {

    var resourceType = $routeParams.type;
    var resourceId = $routeParams.itemID;

    if (resourceType) {
        $scope.list = _.find(Resources, function(resource){
                return resource.type === resourceType;
            }
        );
    }
});