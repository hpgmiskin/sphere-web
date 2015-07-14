'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the index page
 */
angular.module('webApp')
  .controller('IndexCtrl', function ($scope) {

    /*List of features*/
    $scope.featureList = [
      {
        "title": "Your Bills, unified",
        "desc": "Look after your Phone, Electricity, Gas and much \nmore in one simple App.",
        "img_src": "http://placehold.it/350x150"
      },
      {
        "title": "Analyze Your Bills",
        "desc": "Analyze your bills over time.\nSpending too much on Electricity?" +
        "How much heating did you use in winter?",
        "img_src": "http://placehold.it/350x150"
      },
      {
        "title": "Never miss a payment",
        "desc": "We'll make sure your kept up to date with all your bills.\n" +
        "You'll know exactly how long till your next payment.",
        "img_src": "http://placehold.it/350x150"
      },
      {
        "title": "Split Bills",
        "desc": "Easily split bills between house mates and receive payments from\n housemates.",
        "img_src": "http://placehold.it/350x150"
      },
      {
        "title": "Save on Your Bills",
        "desc": "Automatically compare providers and easily switch to the cheapest \n providers.",
        "img_src": "http://placehold.it/350x150"
      },
      {
        "title": "Get Accurate Bills",
        "desc": "Submit meter readings to your provider for more accurate bills",
        "img_src": "http://placehold.it/350x150"
      }
    ];
  });