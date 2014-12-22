(function () {
    var app = angular.module('ls.controllers.home', []);
    app.controller('HomeCtrl', ['$scope',
        function ($scope) {
            $scope.Title = Date.now();
    }]);
}());