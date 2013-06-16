tightsApp.controller('adminListCtrl', function adminListCtrl($scope, $routeParams, Collections, Categories, Features, Colors, AllTights) {
    //todo create this object in a global module scope
    var resourceType = $routeParams.type;

    var resources = {
        0:{
            type: 'collections',
            name: 'Коллекции',
            items: Collections
        },
        1:{
            type: 'categories',
            name: 'Категории',
            items: Categories
        },
        2:{
            type: 'features',
            name: 'Особенности',
            items: Features
        },
        3:{
            type: 'colors',
            name: 'Цвета',
            items: Colors
        },
        4:{
            type: 'tights',
            name: 'Колготы',
            items: AllTights
        }
    };

    if (resourceType) {
        $scope.list = _.find(resources, function(resource){
                return resource.type === resourceType;
            }
        );
    }
});