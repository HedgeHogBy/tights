var app = angular.module('tightsApp', []);

module.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.
        when("/all-tights", {templateUrl: "tpl/welcome.html"}).
        when("/all-tights/:tightsId", {templateUrl: "tpl/tights-details.html", controller : "TightsDetailCtrl"}).
        otherwise({redirectTo : "/all-tights"});
});

app.$controller( 'AppCtrl', function AppCtrl($scope) {
    $scope.name = 'Guest';
});










function TightsListCtrl(Tights) {
    this.allTights = Tights.query();
}

function TightsDetailCtrl(Tights) {

    this.tights = Tights.get({tightsId:this.params.tightsId});


}
