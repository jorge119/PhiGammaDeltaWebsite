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

        //Public functions
        vm.redirectToFacebook = redirectToFacebook;

        //header image
        vm.headerImg = $sce.trustAsResourceUrl('Images/logo.png');


        /*This function, when called, opens facebook in a new window*/
        function redirectToFacebook() {
            try {
                $window.open('https://www.phigam.org/', '_blank');
            }
            catch (error) {
                console.log("Unable to open Facebook in a new window " + error);
            }
        }
    }

})();