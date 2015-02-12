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