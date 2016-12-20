var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope){
  $scope.artists = {
    'name' : 'Ray Ray',
    'title': 'Staff Author',
    'company' : 'Lydia.com'
  }

});
