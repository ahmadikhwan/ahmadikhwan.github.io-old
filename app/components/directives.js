(function() {
  'use strict';
  angular.module('app.directives', []);
  angular.module('app.directives').directive('ngSlideToggle', slideToggle);

  function slideToggle() {
    return {
      restrict : "A",
      scope : {},
      link : function(scope, element, attrs) {
        element.bind('click', function() {
          jQuery(attrs.ngSlideToggle).slideToggle();
        });
      }
    };
  }
})();