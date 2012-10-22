'use strict';
angular.module('raitong.mb', [])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/subscribers', {templateUrl: 'resources/angularjs/partial/subscriber/subscriber-list.html'})
			.when('/subscribers/create', {templateUrl: 'resources/angularjs/partial/subscriber/subscriber-form.html'})
			.otherwise({redirectTo: '/subscribers'});
	}]);