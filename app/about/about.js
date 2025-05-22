'use strict'

angular.module('antismash.ui.bacterial.as_about', [])
    .controller('AsAboutCtrl', [
        function() {
            var vm = this;
            vm.logos = [
                { filename: 'aau_logo.svg', description: 'Aalborg University' },
                { filename: 'dtu_logo.svg', description: 'Technical University of Denmark' },
            ];
        }]);
