'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:3000');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/Student', {
        templateUrl: 'views/student.html',
        controller: 'StudentCtrl',
        controllerAs: 'Student'
      })
      .when('/create/student', {
        templateUrl: 'views/student-add.html',
        controller: 'StudentAddCtrl',
        controllerAs: 'studentAdd'
      })
      .when('/student/:id', {
        templateUrl: 'views/student-view.html',
        controller: 'StudentViewCtrl',
        controllerAs: 'studentView'
      })
      .when('/student/:id/delete', {
        templateUrl: 'views/student-delete.html',
        controller: 'StudentDeleteCtrl',
        controllerAs: 'studentDelete'
      })
      .when('/student/:id/edit', {
        templateUrl: 'views/student-edit.html',
        controller: 'StudentEditCtrl',
        controllerAs: 'studentEdit'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
.factory('StudentRestangular', function(Restangular) {
  return Restangular.withConfig(function(RestangularConfigurer) {
    RestangularConfigurer.setRestangularFields({
      id: '_id'
    });
  });
})
  .factory('Student', function(StudentRestangular) {
    return StudentRestangular.service('Student');
  });
