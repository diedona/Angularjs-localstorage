(function () {
    var app = angular.module('ls.controllers.home', ['ls.services.task']);
    app.controller('HomeCtrl', ['$scope', 'TasksService',
        function ($scope, TasksService) {
            $scope.Title = Date.now();
            $scope.Tasks = TasksService.GetAllTasks();
    }]);
}());