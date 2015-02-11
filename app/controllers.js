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

    var date = new Date();
    $scope.clock = {
      now: date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    };

    var updateClock = function() {
      date = new Date();
      $scope.clock.now = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    };

    $interval(function() {
      updateClock();
    }, 1000);

  }
])