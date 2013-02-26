var App = angular.module('tightsApp', []);

App.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.
        when("/all-tights", {templateUrl: "tpl/welcome.html"}).
        when("/all-tights/:tightsId", {templateUrl: "tpl/tights-details.html", controller : "TightsDetailCtrl"}).
        otherwise({redirectTo : "/all-tights"});
});

App.factory('Categories', function(){
    return {
        0: {
            id: 1,
            name:'Lycra 10-20 den'
        },
        1: {
            id: 2,
            name:'Lycra 30-40 den'
        },
        2: {
            id: 3,
            name:'Microfibra 50-80 den'
        },
        3: {
            id: 4,
            name:'Coprenti 100-200 den'
        },
        4: {
            id: 5,
            name:'Modellanti'
        },
        5: {
            id: 6,
            name:'Fashion'
        },
        6: {
            id: 7,
            name:'Gambaletti'
        },
        7: {
            id: 8,
            name:'Autoreggenti'
        },
        8: {
            id: 9,
            name:'Calzini'
        },
        9: {
            id: 10,
            name:'Leggings'
        }
    };
});

App.factory('Collections', function(){
    return {
        0: {
            id: 1,
            name:'BASIC LINE',
            categories: [1,2,3,5,8]
        },
        1: {
            id: 2,
            name:'CITY LINE',
            categories: [1,2,3,4,5,6,7,8,9,10]
        },
        2: {
            id: 3,
            name:'CITY LINE MEN',
            categories: [9]
        }
    };

});

App.controller('AppCtrl', function AppCtrl($scope) {

});

App.controller('TightsDetailCtrl', function TightsDetailCtrl(Tights) {
    this.tights = Tights.get({tightsId:this.params.tightsId});
});


App.controller('CollectionsMenuCtrl', function CollectionsMenuCtrl($scope, Collections, Categories) {
    var cat;
    $scope.mainMenuItems = [];

    _.each(Collections, function(collection, key){
        collection.categories = _.map(collection.categories, function(category){
            cat = _.find(Categories, function(num){return num.id === category;});
            if(cat){
                category = {name: cat.name};
            } else {
                category = {name: 'Category'+category};
            }
            return category;
        });

        $scope.mainMenuItems[key] = collection;
    });
});


