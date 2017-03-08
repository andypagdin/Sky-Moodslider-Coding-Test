'use strict';

angular.module('myApp.moodslider', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/moodslider', {
    templateUrl: 'moodslider/moodslider.html',
    controller: 'MoodsliderCtrl'
  });
}])

.controller('MoodsliderCtrl', ['$scope', '$http', function( $scope, $http ) {

	// Angular JS does not support the parsing of XML directly so we must use a lightweight
	// library, such as x2js to return a JSON object from our XML file
	$http.get("../content/programmes.xml", {
		transformResponse: function (cnv) {
		  var x2js = new X2JS();
		  var aftCnv = x2js.xml_str2json(cnv);
		  return aftCnv;
		}
	})

	.success(function (response) {
		$scope.programme = response
		angular.forEach($scope.programme, function(item)
		{
			$scope.programme = item.programme
			//console.log(item.programme)
		});
	});

	$scope.slider = {
		agitated_calm: 1,
		happy_sad: 1,
		tired_wideawake: 1,
		scared_fearless: 1
	};

	//$scope.recommends = [];

	$scope.moodCheck = function(moodVal, currentSlider){

		if(moodVal > 1 && currentSlider == "ac"){
			var currentMood = "Calm"
		}else if(moodVal < 1 && currentSlider == "ac"){
			var currentMood = "Agitated"
		}

		if(moodVal > 1 && currentSlider == "hc"){
			var currentMood = "Sad"
		}else if(moodVal < 1 && currentSlider == "hc"){
			var currentMood = "Happy"
		}

		$scope.recommendedProgramme = $scope.programme.filter(function(i){
			return i.mood == currentMood
		});

		// angular.forEach($scope.programme, function(item){
		// 	if(item.mood == currentMood){
		// 		$scope.newprogramme = item
		// 		$scope.recommends.push(item)
		// 		//console.log($scope.recommends)
		// 	}
		// })
	}

}]);