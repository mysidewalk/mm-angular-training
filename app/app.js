angular.module('app', ['ngRoute', 'controllers'])

.config(['$routeProvider', 
  function($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'app/views/index.html'
      });

  }
]);