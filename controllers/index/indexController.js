myApp.controller("indexController", function ($scope) {
    $scope.hello = "Привет";

    $scope.tablets = [{
        name: 'Samsung Galaxy Tab S4',
        year: 2014,
        price: 300,
        company: 'Samsung'
    },{
        name: 'LG G PAD 8.3',
        year: 2013,
        price: 180,
        company: 'LG'
    },{
        name: 'IdeaTab A8',
        year: 2014,
        price: 220,
        company: 'Lenovo'
    }];
    $scope.data = {};

    $scope.setFile = function () {
        if($scope.data.mode=='Tablets')
            return 'tablets.html';
        else if($scope.data.mode=='Phones')
            return 'phones.html';
    }
    $scope.modes = [{
        value: 'Tablets',
        label: 'Планшеты'
    },{
        value: 'Phones',
        label: 'Смартфоны'
    }];

    $scope.phones = [{
        name: 'Nokia Lumia 630',
        year: 2014,
        price: 200,
        company: 'Nokia'
    },{
        name: 'Samsung Galaxy S 4',
        year: 2014,
        price: 400,
        company: 'Samsung'
    },{
        name: 'Mi 5',
        year: 2015,
        price: 300,
        company: 'Xiaomi'
    }];
});
