tightsApp.controller('adminCategoriesDetailCtrl', function adminCategoriesDetailCtrl($scope, $routeParams, Categories) {

    var resourceId = $routeParams.id;

    if (resourceId) {
        $scope.category = _.find(Categories, function(category){
            return category.id == resourceId;
        });
    }

    $scope.saveCategoryEditForm = function(form){

    };
});