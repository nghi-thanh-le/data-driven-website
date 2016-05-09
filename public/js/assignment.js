// put your javascript code here

var myApp = angular.module("myApp", []);

myApp.controller("myController", function ($scope, $http) {
    $http.get("http://localhost:3000/data").success(function(data){
        $scope.items = data;
    }).error(function(error){
        $scope.error = error;
    });
});
