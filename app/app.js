angular.module('app', ['ngRoute'])

.config(['$locationProvider', '$routeProvider', 
  function($locationProvider, $routeProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'views/index.html'
      });

  }
]);