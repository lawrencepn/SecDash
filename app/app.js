'use strict';

// Declare app level module which depends on views, and components
angular.module('secDash', [
    'ngMaterial',
    'ngRoute',
    'secDash.dashboard',
    'secDash.jira',
    'secDash.countries'
]).config(['$locationProvider', '$routeProvider','$httpProvider','$sceDelegateProvider', function ($locationProvider, $routeProvider, $httpProvider, $sceDelegateProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/dashboard'});

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.common.Accept = 'application/json;charset=UTF-8';
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';

    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        // Allow loading from our assets domain.  Notice the difference between * and **.
        'http://*.standardbank.co.za:8091/**',
    ]);

}]);
