var App = angular.module('tightsApp', []);

App.config(function ($routeProvider, $locationProvider) {
    $routeProvider.
        when("/collection/:collectionId/:categoryId", {
            controller : "CollectionDetailCtrl",
            templateUrl: 'collection-detail.html'
        }).
        when("/all-tights/:tightsId", {controller : "TightsDetailCtrl"}).
        otherwise({redirectTo : "/"});

    $locationProvider.html5Mode(true);
});

App.factory('Categories', function(){
    return {
        0: {
            id: 1,
            name:'Лайкра 10-20 ден'
        },
        1: {
            id: 2,
            name:'Лайкра 30-40 ден'
        },
        2: {
            id: 3,
            name:'Microfiber 50-80 ден'
        },
        3: {
            id: 4,
            name:'Теплые 100-200 ден'
        },
        4: {
            id: 5,
            name:'Коррекционные'
        },
        5: {
            id: 6,
            name:'Мода'
        },
        6: {
            id: 7,
            name:'Чулки'
        },
        7: {
            id: 8,
            name:'Гольфы'
        },
        8: {
            id: 9,
            name:'Носки'
        },
        9: {
            id: 10,
            name:'Легинсы'
        }
    };
});

App.factory('Collections', function(){
    return {
        0: {
            id: 1,
            name:'ЛИНИЯ БЭЙЗИК',
            description: 'Качественные колготки и чулки на каждый день. Матовые и эластичные прекрасно обтягивают и поддерживают ногу, мягкие и шелковистые.',
            categories: [1,2,3,5,8]
        },
        1: {
            id: 2,
            name:'ЛИНИЯ СИТИ',
            description: 'Колготки и чулки выполнены из пряжи высокого качества. Матовые и эластичные. Благодаря градуированному давлению прекрасно обтягивают и поддерживают ногу. Комфортные, мягкие и шелковистые.',
            categories: [1,2,3,4,5,6,7,8,9,10]
        },
        2: {
            id: 3,
            name:'НОСКИ МУЖСКИЕ',
            description: 'Прекрасно облегают ногу. Двойная, широкая, эластичная в тоже время мягкая и комфортная резинка',
            categories: [9]
        }
    };

});

App.factory('Tights', function(){
    return {
        0: {
            id: 1,
            collection_id: 1,
            name:'ЛИНИЯ БЭЙЗИК',
            categories: [1,2,3,5,8]
        },
        1: {
            id: 2,
            name:'ЛИНИЯ СИТИ',
            categories: [1,2,3,4,5,6,7,8,9,10]
        },
        2: {
            id: 3,
            name:'НОСКИ МУЖСКИЕ',
            categories: [9]
        }
    };

});



App.controller('CollectionsMenuCtrl', function CollectionsMenuCtrl($scope, Collections, Categories) {
    var cat;
    $scope.mainMenuItems = [];

    _.each(Collections, function(collection, key){
        collection.categories = _.map(collection.categories, function(category){
            cat = _.find(Categories, function(num){return num.id === category;});
            if(cat){
                category = {
                    name: cat.name,
                    id: cat.id
                };
            } else {
                category = {
                    name: 'Category'+category,
                    id: category
                };
            }
            return category;
        });

        $scope.mainMenuItems[key] = collection;
    });
});

App.controller('CollectionDetailCtrl', function CollectionDetailCtrl($scope, $routeParams, Collections, Categories) {

    if ($routeParams.collectionId){
        $scope.collection = _.find(Collections, function(collection){return collection.id === $routeParams.collectionId;})
    } else {
        $scope.collection = {}
    }

    if ($routeParams.categoryId){
        $scope.category = _.find(Categories, function(category){return category.id === $routeParams.collectionId;})
    }
});


App.controller('TightsDetailCtrl', function TightsDetailCtrl($scope, Tights) {
    this.tights = Tights.get({tightsId:this.params.tightsId});
});


