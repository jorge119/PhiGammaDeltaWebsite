'use strict';

// Declare app level module which depends on views, and components
angular
    .module('myApp', [
  'ngMaterial',
  'ngRoute',
  'myApp.version'

])
    .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  //This will handle the view routing
  $routeProvider.when('/mainView', {
    controller: 'View1Ctrl',
    templateUrl: '/View/mainView.html'
  });



}]);
