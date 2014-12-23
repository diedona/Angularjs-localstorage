(function () {
    var app = angular.module('ls.config', ['ngRoute']);
    app.config(['$routeProvider',
        'localStorageServiceProvider',
        function ($routeProvider, localStorageServiceProvider) {
            $routeProvider.
            when('/', {
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
                
            localStorageServiceProvider
            .setPrefix('LocalStorage');
            
            //console.log(localStorageServiceProvider);
    }]);
}());