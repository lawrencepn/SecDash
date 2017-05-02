'use strict';

// Declare app level module which depends on views, and components
angular.module('secDash', [
  'ngMaterial',
  'ngRoute',
  'secDash.dashboard',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/dashboard'});
}]);
