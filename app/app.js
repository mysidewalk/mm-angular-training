angular.module('app', ['ngRoute', 'controllers'])

.config(['$locationProvider', '$routeProvider', 
  function($locationProvider, $routeProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'views/index.html'
      });

  }
]);