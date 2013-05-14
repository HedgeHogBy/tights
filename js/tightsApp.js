var App = angular.module('tightsApp', []);

App.config(function ($routeProvider, $locationProvider) {
    $routeProvider.
        when("/", {
            template: '<h1> Добро пожаловать </h1>'
        }).
        when("/collection/:collectionId/category/:categoryId", {
            controller : "CollectionDetailCtrl",
            templateUrl: 'tmpl/collection-detail.html'
        }).
        when("/collection/:collectionId/category/:categoryId/tights/:tightsId", {
            controller : "CollectionDetailCtrl",
            templateUrl: 'tmpl/collection-detail.html'
        }).
        otherwise({redirectTo : "/"});

    //$locationProvider.html5Mode(true);
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

App.factory('Features', function(){
    return {
        0: {
            id: 1,
            name:'Дышащая ткань',
	        img:''
        },
        1: {
            id: 2,
            name:'Высокая талия',
            img:''
        },
	    2: {
            id: 3,
            name:'Низкая талия',
            img:''
        },
	    3: {
            id: 4,
            name:'XL',
            img:''
        }
    };
});

App.factory('Colors', function(){
    return {
        0: {
            id: 1,
            name:'Noisette',
	        color_code:'C2867A'
        },
        1: {
            id: 2,
	        name:'Visone',
            color_code:'A67F58'
        },
	    2: {
            id: 3,
            name:'Bronzo',
			color_code:'795B45'
	    },
	    3: {
            id: 4,
            name:'Nero',
			color_code:'000000'
	    }
    };
});

App.factory('AllTights', function(){
    return {
        0: {
            id: 1,
            collection_id: 1,
	        category_id: 1,
            name:'FLORÉAL - ФЛОРЕАЛЬ 20 ден',
            description: 'Колготки шелковистые, эластичные с х/б ластовицей и плоскими швами. Мягкие и комфортные штанишки. Укрепленный прозрачный мысок',
            consist: '82% полиамид - 16% эластомер - 2% хлопок',
	        img: 'BL_Ly1020_01flo',
	        features: [1,2,4],
	        colors: [1,2,3,4]
        },
        1: {
	        id: 2,
			collection_id: 1,
			category_id: 1,
			name:'CHARME - ШАРМ 20 ден',
			description: 'Колготки  с регулируемой высотой талии, шелковистые, эластичные с х/б ластовицей и плоскими швами. Мягкие и комфортные штанишки. Укрепленный прозрачный мысок.',
			consist: '82% полиамид - 16% эластомер - 2% хлопок',
			img: 'BL_Ly1020_02cha20',
			features: [1,3],
			colors: [1,2,3,4]
        },
	    2: {
			id: 3,
			collection_id: 1,
			category_id: 2,
			name:'LA MANCHE - ЛА-МАНШ 40 ден',
			description: 'Колготки шелковистые, эластичные с х/б ластовицей и плоскими швами. Мягкие и комфортные штанишки. Укрепленный прозрачный мысок',
			consist: '82% полиамид - 16% эластомер - 2% хлопок',
			img: 'BL_Ly3040_01lam',
			features: [1,2,4],
			colors: [1,2,3,4]
		},
	    3: {
			id: 4,
			collection_id: 1,
			category_id: 2,
			name:'CHARME -  ШАРМ 40 ден',
			description: 'Колготки  с регулируемой высотой талии, шелковистые, эластичные с х/б ластовицей и плоскими швами. Мягкие и комфортные штанишки. Укрепленный прозрачный мысок.',
			consist: '82% полиамид - 16% эластомер - 2% хлопок',
			img: 'BL_Ly3040_02cha40',
			features: [1,3],
			colors: [1,2,3,4]
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

App.controller('CollectionDetailCtrl', function CollectionDetailCtrl($scope, $routeParams, Collections, Categories, Features, Colors, AllTights) {
    if ($routeParams.collectionId){
        $scope.collection = _.find(Collections, function(collection){return collection.id === parseInt($routeParams.collectionId, 10);})
    } else {
        $scope.collection = {}
    }

    if ($routeParams.categoryId){
        $scope.category = _.find(Categories, function(category){return category.id === parseInt($routeParams.categoryId, 10);})
    } else {
        $scope.category = {}
    }

    if ($routeParams.tightsId){
        $scope.tights = _.find(AllTights, function(tights){return tights.id === parseInt($routeParams.tightsId, 10);})


    } else {
        $scope.tights = {}
    }
});



