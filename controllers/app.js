var myApp = angular.module("myApp", ['ngRoute']);
myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.

    when('/addStudent', {
        templateUrl: 'addStudent.htm',
        controller: 'AddStudentController'
    }).

    when('/viewStudents', {
        templateUrl: 'viewStudents.htm',
        controller: 'ViewStudentsController'
    }).

    otherwise({
        redirectTo: '/addStudent'
    });
}]);

myApp.controller('AddStudentController', function($scope) {
    $scope.message = "This page will be used to display add student form";
});

myApp.controller('ViewStudentsController', function($scope) {
    $scope.message = "This page will be used to display all the students";
});