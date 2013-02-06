function RouteCtrl($route) {

    var that = this;

    $route.when('/all-tights', {template:'tpl/welcome.html'});

    $route.when('/all-tights/:tightsId', {template:'tpl/tights-details.html', controller:TightsDetailCtrl});

    $route.otherwise({redirectTo:'/all-tights'});

    $route.onChange(function () {
        that.params = $route.current.params;
    });

    $route.parent(this);

    this.addTights = function () {
        window.location = "#/all-tights/add";
    };

}

function TightsListCtrl(Tights) {
    this.allTights = Tights.query();
}

function TightsDetailCtrl(Tights) {

    this.tights = Tights.get({tightsId:this.params.tightsId});


    this.saveTights = function () {
        if (this.tights.id > 0)
            this.tights.$update({tightsId:this.tights.id});
        else
            this.tights.$save();
        window.location = "#/tights";
    };

    this.deleteTights = function () {
        this.tights.$delete({tightsId:this.tights.id}, function() {
            alert('Tights ' + tights.name + ' deleted');
            window.location = "#/tights";
        });
    };

}