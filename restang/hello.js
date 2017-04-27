angular.module('app', ['restangular'])

.config(function(RestangularProvider){
    RestangularProvider.setBaseUrl('https://jsonplaceholder.typicode.com');
})
.controller('HelloCtrl', function($scope, $http, Restangular) {
  $scope.posts=[];
  Restangular.all('posts').getList().then(function (posts) {
    Restangular.copy(posts, $scope.posts)
  });
});

