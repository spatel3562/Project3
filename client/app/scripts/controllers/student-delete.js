'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:StudentDeleteCtrl
 * @description
 * # StudentDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('StudentDeleteCtrl', function (
    $scope,
    $routeParams,
    Student,
    $location
  ) {
    $scope.student = Student.one($routeParams.id).get().$object;
    $scope.deleteStudent = function() {
      $scope.student.remove().then(function() {
        $location.path('/student');
      });
    };
    $scope.back = function() {
      $location.path('/Student/' + $routeParams.id);
    };
  });
