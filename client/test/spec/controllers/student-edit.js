'use strict';

describe('Controller: StudentEditCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var StudentEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StudentEditCtrl = $controller('StudentEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StudentEditCtrl.awesomeThings.length).toBe(3);
  });
});
