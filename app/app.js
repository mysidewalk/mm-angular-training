angular.module('app', ['ngRoute'])

.config(['$routeProvider', 
  function($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'app/views/index.html'
      });

  }
]);