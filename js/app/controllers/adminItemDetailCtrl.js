tightsApp.controller('adminItemDetailCtrl', function adminItemDetailCtrl($scope, $routeParams, Resources) {

    var resourceType = $routeParams.type;
    var resourceId = $routeParams.id;

    if (resourceType && resourceId) {
        $scope.list = _.find(Resources, function(resource){
                return resource.type === resourceType;
            }
        );

        $scope.item = _.find($scope.list.items, function(item){
            return item.id == resourceId;
        });
    }

    $scope.saveItemEditForm = function(form){

    };
});