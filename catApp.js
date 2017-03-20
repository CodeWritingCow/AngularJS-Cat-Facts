var myApp = angular.module('myApp', []);
	myApp.controller('myCtrl', function($scope, $http){
		$http.get('cat-facts.json').then(function(response) {
			$scope.catFacts = response.data;
		});

		$scope.randomFact = function(items) {
			return items[Math.floor(Math.random()*items.length)];
		};

		$scope.randomPhoto = function() {
			$scope.catPhoto = "http://thecatapi.com/api/images/get";
			$scope.catPhoto += '?decache=' + Math.random();
		};

		$scope.catPhoto = "http://thecatapi.com/api/images/get";
	});