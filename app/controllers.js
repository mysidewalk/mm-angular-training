angular.module('controllers', [])

.controller('AppCtrl', ['$scope',
  function($scope) {

    $scope.view = {
      heading: 'Data binding is fun!'
    };

    $scope.submit = function() {
      $scope.view.heading = 'You\'re doing it!';
    };

  }
])

.controller('ClockCtrl', ['$scope', '$interval',
  function($scope, $interval) {

    $scope.clock = {
      now: new Date()
    };

    var updateClock = function() {
      $scope.clock.now = new Date();
    };

    $interval(function() {
      updateClock();
    }, 1000);

  }
])

.controller('PigLatinCtrl', ['$scope', 
  function($scope) {
    $scope.view = {
      text: 'This is a paragraph with some words. I\'d really like a cookie but I need to lose ' +
        'some of this fat around my midsection. When is lunch gonna get here? This better work.'
    }
  }
]);