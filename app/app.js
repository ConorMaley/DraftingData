'use strict';

// Declare app level module which depends on views, and components
angular.module('DraftingData', [
  'ngRoute',
  'DraftingData.view1',
  'DraftingData.view2'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: 'components/view1'});
}]);