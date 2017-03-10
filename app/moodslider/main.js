'use strict';

angular.module('myApp.moodslider', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/moodslider', {
    templateUrl: 'moodslider/moodslider.html',
    controller: 'MoodsliderCtrl'
  });
}])

.controller('MoodsliderCtrl', ['$scope', '$http', '$rootScope', function( $scope, $http, $rootScope ) {

	// We have to use a lightweight library to convert the XML string to JSON
	var x2js = new X2JS();
	// Pass the XML input from the upload page over to this controller using rootScope
	// so it can be converted and sorted here
	var xmlText = $rootScope.file;
    var jsonObj = x2js.xml_str2json( xmlText );
    $scope.programme = jsonObj

    if($scope.programme == null){
    	$scope.contentCheck = "Please upload content"
    }

    // Loop through the returned JSON object and store in array
	angular.forEach($scope.programme, function(item)
	{
		$scope.programme = item.programme
	});

	// Slider values will default to 1 (the middle)
	$scope.slider = {
		agitated_calm: 1,
		happy_sad: 1,
		tired_wideawake: 1,
		scared_fearless: 1
	};

	$scope.moodCheck = function(moodVal, currentSlider){
		// moodVal = the slider value
		// currentSlider = which slider is being moved, sliders are identified by 2 letter names
		// matching the first letter of each mood on the slider
		if(moodVal > 1 && currentSlider == "ac"){
			 $scope.recommendedMood = "Agitated"
		}else if(moodVal < 1 && currentSlider == "ac"){
			$scope.recommendedMood = "Calm"
		}

		else if(moodVal > 1 && currentSlider == "hc"){
			$scope.recommendedMood = "Happy"
		}else if(moodVal < 1 && currentSlider == "hc"){
			$scope.recommendedMood = "Sad"
		}

		else if(moodVal > 1 && currentSlider == "tw"){
			$scope.recommendedMood = "Tired"
		}else if(moodVal < 1 && currentSlider == "tw"){
			$scope.recommendedMood = "Wide Awake"
		}

		else if(moodVal > 1 && currentSlider == "sf"){
			$scope.recommendedMood = "Scared"
		}else if(moodVal < 1 && currentSlider == "sf"){
			$scope.recommendedMood = "Fearless"
		}

		// If nothing matches then the slider must be in the middle
		else{
			$scope.recommendedMood = ""
		}
	}

	// Only return items where the mood matched the users chosen mood
	$scope.filter = function(){
		return function(item){
			if(item['mood'] == $scope.recommendedMood){
				return item
			}
		}
	}

}]);