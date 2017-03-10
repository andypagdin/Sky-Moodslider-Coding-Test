'use strict';

var myApp = angular.module('myApp.upload', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/upload', {
    templateUrl: 'upload/upload.html',
    controller: 'UploadCtrl'
  });
}])

.controller('UploadCtrl', ['$scope', '$http', '$rootScope', '$location', function($scope, $http, $rootScope, $location) {

    $scope.showContent = function($fileContent){
    	// Assign rootScope the contents of the file so it can be used in the moodslider
        $rootScope.file = $fileContent
        // Redirect to moodslider
        $location.path('/moodslider')
    };

}]);

myApp.directive('onReadFile', function ($parse) {
	// This method of loading and reading files may be slight overkill, however it does
	// not require the use of a third party library
	return {
		restrict: 'A',
		scope: false,
		// Identify the function to be called
		link: function(scope, element, attrs) {
            var fn = $parse(attrs.onReadFile);
            
			element.on('change', function(onChangeEvent) {
				var reader = new FileReader();
                
				reader.onload = function(onLoadEvent) {
					scope.$apply(function() {
						fn(scope, {$fileContent:onLoadEvent.target.result});
					});
				};
				reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
			});
		}
	};
});
