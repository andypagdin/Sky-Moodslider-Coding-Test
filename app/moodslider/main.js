'use strict';

angular.module('myApp.moodslider', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/moodslider', {
    templateUrl: 'moodslider/moodslider.html',
    controller: 'MoodsliderCtrl'
  });
}])

.controller('MoodsliderCtrl', [function() {

}]);