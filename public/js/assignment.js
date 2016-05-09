// put your javascript code here

var myApp = angular.module("myApp", []);

myApp.service("animalData", function ($http) {
    return $http.get("http://localhost:3000/data/AnimalsData.json");
});

myApp.controller("myController", function ($scope, animalData) {
    $scope.hide = true;

    animalData.success(function (data) {
        $scope.items = data;
    }).error(function(error){
        $scope.error = error;
    });
});
