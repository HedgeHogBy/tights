var tightsApp = angular.module('tightsApp', ['ngResource']);

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
		    templateUrl: 'tmpl/admin/admin-page.html'
        }).
	    when("/admin/collections", {
		    templateUrl: 'tmpl/admin/admin-collections.html'
        }).
	    when("/admin/categories", {
		    templateUrl: 'tmpl/admin/admin-categories.html'
        }).
	    when("/admin/tights", {
		    templateUrl: 'tmpl/admin/admin-tights.html'
        }).
	    when("/admin/features", {
		    templateUrl: 'tmpl/admin/admin-features.html'
        }).
	    when("/admin/colors", {
		    templateUrl: 'tmpl/admin/admin-colors.html'
        }).
        otherwise({redirectTo : "/"});

    //$locationProvider.html5Mode(true);
});

//http://stackoverflow.com/questions/12942173/using-json-object-from-rest-service-in-angularjs
//http://docs.angularjs.org/api/ngResource.$resource