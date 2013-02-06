angular.service('Tights', function ($resource) {
    return $resource('api/all-tights/:tightsId', {}, {
        update: {method:'PUT'}
    });
});
