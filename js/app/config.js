(function () {
    var app = angular.module('ls.config', ['ngRoute']);
    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
            when('/', {
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
}());