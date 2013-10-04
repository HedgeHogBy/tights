var tightsApp = angular.module('tightsApp', ['ngResource', 'ngRoute']);

tightsApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider.
        when("/", {
		    templateUrl: 'tmpl/home-page.html'
        }).
        when("/collection/:collectionId/category/:categoryId", {
            controller : "CollectionDetailCtrl",
            templateUrl: 'tmpl/collection-detail.html'
        }).
        when("/collection/:collectionId/category/:categoryId/tights/:tightsId", {
            controller : "CollectionDetailCtrl",
            templateUrl: 'tmpl/tights-detail.html'
        }).
	    when("/admin-panel", {
            controller : "adminDashboardCtrl",
		    templateUrl: 'tmpl/admin/admin-page.html'
        }).
	    when("/admin/:type/list", {
            controller : "adminListCtrl",
		    templateUrl: 'tmpl/admin/admin-list.html'
        }).
        when("/admin/:type/:id", {
            controller : "adminItemDetailCtrl",
            templateUrl: 'tmpl/admin/admin-item-detail.html'
        }).
        otherwise({redirectTo : "/"});

    //$locationProvider.html5Mode(true);
});

//http://stackoverflow.com/questions/12942173/using-json-object-from-rest-service-in-angularjs
//http://docs.angularjs.org/api/ngResource.$resource