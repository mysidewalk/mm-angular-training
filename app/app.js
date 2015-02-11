angular.module('app', ['ngRoute'])

.config(['$locationProvider', '$routeProvider', 
  function($locationProvider, $routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'app/views/index.html'
      });

  }
]);