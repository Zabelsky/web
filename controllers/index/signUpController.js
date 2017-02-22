myApp.controller("signUpController", function ($scope) {

    $scope.login = "";
    $scope.password = "";

    $scope.$watch("login",function() {
        alert($scope.login);
    });
});

