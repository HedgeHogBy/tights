var App = angular.module('tightsApp', ['ngResource']);

App.config(function ($routeProvider, $locationProvider) {
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
		    templateUrl: 'tmpl/admin-page.html'
        }).
	    when("/admin/collections", {
		    templateUrl: 'tmpl/admin-collections.html'
        }).
	    when("/admin/categories", {
		    templateUrl: 'tmpl/admin-categories.html'
        }).
	    when("/admin/tights", {
		    templateUrl: 'tmpl/admin-tights.html'
        }).
	    when("/admin/features", {
		    templateUrl: 'tmpl/admin-features.html'
        }).
	    when("/admin/colors", {
		    templateUrl: 'tmpl/admin-colors.html'
        }).
        otherwise({redirectTo : "/"});

    //$locationProvider.html5Mode(true);
});

//http://stackoverflow.com/questions/12942173/using-json-object-from-rest-service-in-angularjs
//http://docs.angularjs.org/api/ngResource.$resource

App.factory('Categories', function($resource){
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

App.factory('Collections', function($resource){
    return {
        0: {
            id: 1,
            name:'ЛИНИЯ БЭЙЗИК',
            description: 'Качественные колготки и чулки на каждый день. Матовые и эластичные прекрасно обтягивают и поддерживают ногу, мягкие и шелковистые.',
            categories: [1,2,3,5,7]
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

App.factory('Features', function($resource){
    return {
        0: {
            id: 1,
            name:'Дышащая ткань',
	        img:'sy37_tTrasp'
        },
        1: {
            id: 2,
            name:'Высокая талия',
            img:'sy03_coul'
        },
	    2: {
            id: 3,
            name:'Низкая талия',
            img:'sy08_vbCoul'
        },
	    3: {
            id: 4,
            name:'XL',
            img:'XL'
        },
	    4: {
            id: 5,
            name:'Нет описания',
            img:'sy01_basic'
        },
	    5: {
            id: 6,
            name:'Нет описания',
            img:'sy07_vbTal'
        },
	    6: {
            id: 7,
            name:'Нет описания',
            img:'sy23pbasic'
        }
    };
});

App.factory('Colors', function($resource){
    return {
        0: {
            id: 1,
            name:'Noisette',
	        code:'C2867A'
        },
        1: {
            id: 2,
	        name:'Visone',
            code:'A67F58'
        },
	    2: {
            id: 3,
            name:'Bronzo',
			code:'795B45'
	    },
	    3: {
            id: 4,
            name:'Nero',
			code:'000000'
	    },
	    4: {
            id: 5,
            name:'Caffé',
			code:'5d391e'
	    },
	    5: {
            id: 6,
            name:'Bianco',
			code:'ffffff'
	    }
    };
});

App.factory('AllTights', function($resource){
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
		},
	    4: {
			id: 5,
			collection_id: 1,
			category_id: 3,
			name:'MARSEILLE - МАРСЕЛЬ 50 ден',
			description: 'Колготки матовые,  эластичные, шелковистые, с плоскими швами.',
			consist: '82% полиамид - 18% эластомер',
			img: 'BL_Mc5080_01mar',
			features: [1,5],
			colors: [5,4]
		},
	    5: {
			id: 6,
			collection_id: 1,
			category_id: 3,
			name:'ANCY - АНСИ 50 ден',
			description: 'Колготки матовые, эластичные, шелковистые, с х/б ластовицей и плоскими швами. Регулируемая высота талии.',
			consist: '82% полиамид - 16% эластомер - 2% хлопок',
			img: 'BL_Mc5080_02anc',
			features: [1,6],
			colors: [5,4]
		},
	    6: {
			id: 7,
			collection_id: 1,
			category_id: 5,
			name:'CORSICA - КОРСИКА 40 ден',
			description: 'Колготки 40 ден с микромассажным, антицеллюлитным эффектом, матовые, шелковистые, эластичные с х/б ластовицей и плоскими швами. Высокоэластичные штанишки 100 ден утягивают бедра и живот, делают фигуру более стройной.',
			consist: '82% полиамид - 16% эластомер - 2% хлопок',
			img: 'BL_Mdl_01cor',
			features: [1,2,7],
			colors: [1,2,3,4]
		},
	    7: {
			id: 8,
			collection_id: 1,
			category_id: 7,
			name:'LA ROCHELLE - Л. РОШЕЛЬ 20 ден',
			description: 'Чулки с кружевной резинкой 7 см и двойной силиконовой поддержкой',
			consist: '82% полиамид - 18% эластомер',
			img: 'BL_Ar_01lar',
			features: [1,7],
			colors: [6,2,3,4]
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



