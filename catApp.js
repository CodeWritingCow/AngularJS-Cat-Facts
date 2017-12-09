const catFacts = 'cat-facts.json';

const myApp = angular.module('myApp', []);
	myApp.controller('myCtrl', ($scope, $http) => {
		$http.get(catFacts).then((response) => {
			$scope.catFacts = response.data;
		});

		$scope.randomFact = (items) => items[Math.floor(Math.random()*items.length)];

		$scope.randomPhoto = () => {
			$scope.catPhoto = "http://thecatapi.com/api/images/get";
			$scope.catPhoto += `${'?decache='} ${Math.random()}`;
		};

		$scope.catPhoto = "http://thecatapi.com/api/images/get";
	});