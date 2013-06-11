tightsApp.controller('CollectionDetailCtrl', function CollectionDetailCtrl($scope, $routeParams, Collections, Categories, Features, Colors, AllTights) {
    var tightsArr = [],
	    expandArray = function(idsArr, detailsArr){
		    return _.map(idsArr, function(ID){
	            return _.find(detailsArr, function(details){
	                return ID == details.id;
	            });
		    });
	    };

	if ($routeParams.collectionId){
		var collectionId =  parseInt($routeParams.collectionId, 10);

        $scope.collection = _.find(Collections, function(collection){return collection.id === collectionId;});
	    tightsArr = _.filter(AllTights, function(tights){
		    return tights.collection_id === collectionId;
	    });
    } else {
        $scope.collection = {}
    }

    if ($routeParams.categoryId){
	    var categoryId =  parseInt($routeParams.categoryId, 10);

        $scope.category = _.find(Categories, function(category){return category.id === categoryId;});
	    tightsArr = _.filter(tightsArr, function(tights){
		    return tights.category_id === categoryId;
	    });

	    $scope.tightsArr = tightsArr;
    } else {
        $scope.category = {}
    }

    if ($routeParams.tightsId){
	    var tightsId =  parseInt($routeParams.tightsId, 10),
		    tights = _.find(tightsArr, function(tights){return tights.id === tightsId;});

	        if(_.isEmpty(tights.featuresDetails)){
		        tights.featuresDetails = expandArray(tights.features, Features);
	        }

	        if(_.isEmpty(tights.colorsDetails)){
		        tights.colorsDetails = expandArray(tights.colors, Colors);
	        }

        $scope.tights = tights;
    } else {
        $scope.tights = {}
    }
});