(function(){
    var app = angular.module('ls.services.task', []);
    app.service('TasksService', ['localStorageService', function(localStorageService) {
        
        this.GetAllTasks = function() {
            console.log(localStorageService);
            return [];
        };
        
    }]);
}());