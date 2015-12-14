'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:StudentViewCtrl
 * @description
 * # StudentViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('StudentViewCtrl', function (
    $scope,
    $routeParams,
    Student
  ) {
    $scope.viewStudent = true;
    $scope.student = Student.one($routeParams.id).get().$object;
  });

