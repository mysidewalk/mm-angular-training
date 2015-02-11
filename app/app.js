angular.module('app', ['ngRoute', 'controllers'])

.config(['$locationProvider', '$routeProvider', 
  function($locationProvider, $routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'app/views/index.html'
      });

  }
]);