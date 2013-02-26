var App = angular.module('tightsApp', []);

App.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.
        when("/all-tights", {templateUrl: "tpl/welcome.html"}).
        when("/all-tights/:tightsId", {templateUrl: "tpl/tights-details.html", controller : "TightsDetailCtrl"}).
        otherwise({redirectTo : "/all-tights"});
});

App.controller('AppCtrl', function AppCtrl($scope) {

});

App.controller('TightsDetailCtrl', function TightsDetailCtrl(Tights) {
    this.tights = Tights.get({tightsId:this.params.tightsId});
});


App.controller('CollectionsMenuCtrl', function CollectionsMenuCtrl($scope) {
    $scope.collections = [
        {
            name: 'BASIC LINE',
            categories: [
                {name:'Lycra 10-20 den'},
                {name:'Lycra 30-40 den'},
                {name:'Microfibra 50-80 den'},
                {name:'Modellanti'},
                {name:'Autoreggenti'}
            ]
        },
        {
            name: 'CITY LINE',
            categories: [
                {name:'Lycra 10-20 den'},
                {name:'Lycra 30-40 den'},
                {name:'Microfibra 50-80 den'},
                {name:'Coprenti 100-200 den'},
                {name:'Modellanti'},
                {name:'Fashion'},
                {name:'Gambaletti'},
                {name:'Autoreggenti'},
                {name:'Calzini'},
                {name:'Leggings'}
            ]
        },
        {
            name: 'CITY LINE MEN',
            categories: [
                {name:'Leggings'}
            ]
        }
    ];
});


