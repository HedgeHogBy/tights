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