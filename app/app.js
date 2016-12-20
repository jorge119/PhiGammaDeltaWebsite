/**Created by Jorge Rangel**/
/*Handles the main logic of the app. Inject your dependencies in this file*/

(function () {
  'use strict';

  // Declare app level module which depends on views, and components
  angular.module('myapp', [
    'ngMaterial',
    'ngRoute',
    'myApp.version'
  ])

    .config(function($locationProvider, $routeProvider) {
      //This will handle the view routing
      $routeProvider.when('/mainView', {
        controller: 'View1Ctrl',
        templateUrl: 'View/mainView.html'
      });
    })


  /**
   * An App controller that changes some of the bounded data in the views if they are not set.
   */
  ApplicationController.$inject = ['$scope', '$rootScope', '$state', '$stateParams', '$window'];

  function ApplicationController($scope, $rootScope, $state, $stateParams, $window) {

    var vm = this;

  }




})();
