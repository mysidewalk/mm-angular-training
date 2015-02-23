angular.module('app', ['ngRoute', 'controllers', 'filters', 'directives'])

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
      })
      .when('/articles', {
        templateUrl: '/app/views/articles.html',
        controller: 'ArticlesCtrl'
      });

  }
]);