'use strict';

/**
 * @ngdoc function
 * @name sphereApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sphereApp
 */
angular.module('sphereApp')
  .controller('MainCtrl',['$scope', '$location', '$anchorScroll', function ($scope, $location, $anchorScroll) {
    /*List of features*/
    $scope.featureList = [
      {
        "title": "Your Bills, unified",
        "desc": "Look after your Phone, Electricity, Gas and much \nmore in one simple App.",
        "img_src": "../images/index/BillsIcon@1x.png"
      },
      {
        "title": "Analyze Your Bills",
        "desc": "Analyze your bills over time.\nSpending too much on Electricity?" +
        "How much heating did you use in winter?",
        "img_src": "../images/index/AnalyzeIcon.png"
      },
      {
        "title": "Never miss a payment",
        "desc": "We'll make sure your kept up to date with all your bills.\n" +
        "You'll know exactly how long till your next payment.",
        "img_src": "../images/index/NotificationIcon.png"
      },
      {
        "title": "Split Bills",
        "desc": "Easily split bills between house mates and receive payments from\n housemates.",
        "img_src": "../images/index/Friends.png"
      },
      {
        "title": "Save on Your Bills",
        "desc": "Automatically compare providers and easily switch to the cheapest \n providers.",
        "img_src": "../images/index/SaveIcon.png"
      },
      {
        "title": "Get Accurate Bills",
        "desc": "Submit meter readings to your provider for more accurate bills",
        "img_src": "../images/index/Oval_1_Shape.png"
      }
    ];

    $scope.goToSection = function(section) {
      console.log(section);
      $location.hash(section);
      $anchorScroll();
    };
  }]);
