/**Created by Jorge Rangel**/
/*Handles the main logic of the app. Inject your dependencies in this file*/

(function () {
  'use strict';

  // Declare app level module which depends on views, and components
  angular
      .module('myApp', [
        'ngMaterial',
        'ngRoute',
        'myApp.version',
        'ngAnimate',
        'ngAria'
      ])

      .config(function($locationProvider, $routeProvider) {
        //This will handle the view routing
        $routeProvider.when('/mainView', {
          templateUrl: 'View/mainView/mainView.html'
        });
      })

      .controller('mainController', ApplicationController)
  /**
   * An App controller that changes some of the bounded data in the views if they are not set.
   */
  ApplicationController.$inject = ['$scope', '$window'];

    function ApplicationController($scope, $window) {

        var vm = this;

    }




})();
