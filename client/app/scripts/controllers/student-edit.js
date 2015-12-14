'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:StudentEditCtrl
 * @description
 * # StudentEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('StudentEditCtrl', function (
    $scope,
    $routeParams,
    Student,
    $location
  ) {
    $scope.editStudent = true;
    $scope.student = {};
    Student.one($routeParams.id).get().then(function(student) {
      $scope.student = student;
      $scope.saveStudent = function() {
        $scope.student.save().then(function() {
          $location.path('/Student/' + $routeParams.id);
        });
      };
    });
  });
