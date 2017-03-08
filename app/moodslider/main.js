'use strict';

angular.module('myApp.moodslider', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/moodslider', {
    templateUrl: 'moodslider/moodslider.html',
    controller: 'MoodsliderCtrl'
  });
}])

.controller('MoodsliderCtrl', ['$scope',function( $scope ) {

	$scope.slider = {
		one: 50,
		two: 50,
		three: 50,
		four: 50
	};

	$scope.programmeList = [
		{
			programmeId : 1,
			name : "Alice In Wonderland",
			image : "../images/programmes/aliceinwonderland.jpg",
			mood : "Calm"
		},
		{
			programmeId : 2,
			name : "Avatar",
			image : "../images/programmes/avatar.jpg",
			mood : "Fearless"	
		},
		{
			programmeId : 3,
			name : "Bruce Almighty",
			image : "../images/programmes/brucealmighty.jpg",
			mood : "Tired"
		},
		{
			programmeId : 4,
			name : "Goodfellas",
			image : "../images/programmes/goodfellas.jpg",
			mood : "Scared"
		},
		{
			programmeId : 5,
			name : "Interstellar",
			image : "../images/programmes/interstellar.jpg",
			mood : "Wide Awake"
		}
	];

}]);