var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope){
  $scope.author = {
    'name' : 'Ray Ray',
    'title': 'Staff Author',
    'company' : 'Lydia.com'
  }

});
