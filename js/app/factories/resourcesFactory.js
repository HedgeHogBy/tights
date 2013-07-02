tightsApp.factory('Resources', function($resource, Collections, Categories, Features, Colors, AllTights){
    return  {
		0:{
			type: 'collections',
			name: 'Коллекции',
			items: Collections
		},
		1:{
			type: 'categories',
			name: 'Категории',
			items: Categories
		},
		2:{
			type: 'features',
			name: 'Особенности',
			items: Features
		},
		3:{
			type: 'colors',
			name: 'Цвета',
			items: Colors
		},
		4:{
			type: 'tights',
			name: 'Колготы',
			items: AllTights
		}
	};
});
