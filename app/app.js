angular.module('app', ['ngRoute', 'controllers', 'filters'])

.config(['$routeProvider', 
  function($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'app/views/index.html'
      })
      .when('/clock', {
        templateUrl: 'app/views/clock.html'
      })
      .when('/piglatin', {
        templateUrl: '/app/views/piglatin.html'
      });

  }
]);