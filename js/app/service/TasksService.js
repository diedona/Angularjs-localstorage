(function(){
    var app = angular.module('ls.services.task', []);
    app.service('TasksService', ['localStorageService', function(localStorageService) {
        
        this.GetAllTasks = function() {
            var tasks = localStorageService.get('tasks');
            return (tasks == undefined) ? [] : tasks;
        };
        
        this.GetStorageType = function() {
            return localStorageService.getStorageType();
        };
        
        this.isSupported = function() {
            return localStorageService.isSupported;
        };
        
        this.SaveTask = function(Task) {
            var tasks = this.GetAllTasks();
            tasks.push(Task);
            localStorageService.set('tasks', tasks);
        };
        
    }]);
}());