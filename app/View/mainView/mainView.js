/**
 * Created by Jorge on 12/19/2016.
 */
/*Handles the logic for the main view*/
(function() {
    angular
        .module('myApp')
        .controller('mainViewController', mainViewController)


    //inject dependencies
    mainViewController.$inject = ['$scope', '$window', '$sce'];



    function mainViewController($scope, $window, $sce)  {

        var vm = this;

        //header image
        vm.headerImg = $sce.trustAsResourceUrl('Images/logo.png');
    }

})();