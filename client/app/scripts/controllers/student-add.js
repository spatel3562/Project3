'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:StudentAddCtrl
 * @description
 * # StudentAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('StudentAddCtrl', function (
    $scope,
    Student,
    $location
  ) {
    $scope.student = {};
    $scope.saveStudent = function() {
      Student.post($scope.student).then(function() {
        $location.path('/Student');
      });
    };
  });
