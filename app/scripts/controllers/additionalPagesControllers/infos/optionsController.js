 myApp.controller("OptionsController", ["$scope","$http",function($scope,$http){

     $http.get('data/otherPages/infos/optionsJSON.json').success(function(data){

          $scope.data=data;
     })
          
  }]);