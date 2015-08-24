(function() {
  'use strict';

  angular.module('app').config([ '$routeProvider', configureRoutes ]);

  function configureRoutes($routeProvider) {
    $routeProvider.when("/", {
      templateUrl : 'app/portfolio/html/sections.html',
      controller : 'ModelController as ctrl',
      resolve : {
        config : function() {
          return {
            'get' : {
              'paths' : {
                'app/portfolio/portfolio.json' : null
              },
              'key' : 'init'
            }
          };
        }
      }
    }).otherwise({
      redirectTo : '/'
    });
  }
})();