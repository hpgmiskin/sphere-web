'use strict';

angular.module('sphereApp')
  .directive('mailchimp', function(){
    return {
        restrict: 'AE',
        templateUrl: 'components/mailchimp.html',
        scope: {
            size: '=size'
        },
        link: function(scope,element){
            scope.inputGroupClass = function(){
                if (scope.size === 'lg'){
                    return 'input-group-lg';
                } else if (scope.size === 'sm'){
                    return 'input-group-sm';
                } else {
                    return '';
                }
            }
        }
    };
  });