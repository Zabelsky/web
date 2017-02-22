var myApp = angular.module('myApp', ["ngRoute"])
    .config(function($routeProvider){
        $routeProvider.when('/index',
            {
                templateUrl:'index.html',
                controller:'indexController'
            });
        $routeProvider.when('/tablets',
            {
                templateUrl:'../view/index/tablets.html',
                controller:'indexController'
            });
    });