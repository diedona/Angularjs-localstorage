(function () {
    var app = angular.module('ls.controllers.home', ['ls.services.task']);
    app.controller('HomeCtrl', ['$scope', 'TasksService',
        function ($scope, TasksService) {
            
            $scope.Title = Date.now();
            $scope.Tasks = TasksService.GetAllTasks();
            $scope.Type = TasksService.GetStorageType();     
            $scope.isSupported = TasksService.isSupported();
            
            $scope.SalvarTask = function(Task, form) {
                TasksService.SaveTask(Task);
                $scope.Tasks.push(Task);
                $scope.Task = {};
            };
    }]);
}());