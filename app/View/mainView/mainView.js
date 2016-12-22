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
        vm.redirectToPhiGam= redirectToPhiGam;
        vm.redirectToTwitter= redirectToTwitter;
        vm.redirectToInstagram= redirectToInstagram;

        //header image
        vm.headerImg = $sce.trustAsResourceUrl('Images/logo.png');


        /*This function, when called, opens fiji in a new window*/
        function redirectToPhiGam() {
            try {
                $window.open('https://www.phigam.org/', '_blank');
            }
            catch (error) {
                console.log("Unable to open phigam.org in a new window " + error);
            }
        }

        /*This function, when called, opens facebook in a new window*/
        function redirectToFacebook() {
            try {
                $window.open('https://www.facebook.com/txstfiji/', '_blank');
            }
            catch (error) {
                console.log("Unable to open Facebook in a new window " + error);
            }
        }

        /*This function, when called, opens twitter in a new window*/
        function redirectToTwitter() {
            try {
                $window.open('https://twitter.com/txstfiji', '_blank');
            }
            catch (error) {
                console.log("Unable to open twitter in a new window " + error);
            }
        }

        /*This function, when called, opens instagram in a new window*/
        function redirectToInstagram() {
            try {
                $window.open('https://www.instagram.com/txstfiji/', '_blank');
            }
            catch (error) {
                console.log("Unable to open instagram in a new window " + error);
            }
        }


    }

})();