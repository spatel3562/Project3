'use strict';
/**
 * @ngdoc function
 * @name clientApp.controller:StudentCtrl
 * @description
 * # StudentCtrl
 * Controller of the clientApp
 */
angular.module('clientApp').controller('StudentCtrl', function (
    $scope,
    Student
  ) {
    $scope.student = Student.getList().$object;
  });

//var app = angular.module("clientApp");
/*angular.module('clientApp')
  app.controller('StudentCtrl', function ($scope){
    $scope.student = [
      {
  Name: 'Sandip',
    StudentID: '12345',
  CourseID: 'ABC'
},
      {
        Name: 'Sandip',
        StudentID: '45632',
        CourseID: 'ABC'
      }
];
});*/
