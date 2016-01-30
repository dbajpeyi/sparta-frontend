'use strict';

describe('Controller: YeslistCtrl', function () {

  // load the controller's module
  beforeEach(module('spartaFrontendApp'));

  var YeslistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    YeslistCtrl = $controller('YeslistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

/*  it('should attach a list of awesomeThings to the scope', function () {
    expect(YeslistCtrl.awesomeThings.length).toBe(3);
  });
  */
});
