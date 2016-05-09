// put your javascript code here

var myApp = angular.module("myApp", []);

myApp.service("animalData", function ($http) {
    return $http.get("http://localhost:3000/data");
});

myApp.controller("myController", function ($scope, animalData) {
    animalData.success(function (data) {
        $scope.items = data;
    }).error(function(error){
        $scope.error = error;
    });
});
