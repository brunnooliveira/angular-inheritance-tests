'use strict';
(function(){
	angular.module('genericsapp', []);

	angular.module('genericsapp')
        .config(['$httpProvider', function ($httpProvider) {
        // ...

        // delete header from client:
        // http://stackoverflow.com/questions/17289195/angularjs-post-data-to-external-rest-api
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]);

})();