'use strict';

describe('Directive: menubar', function () {

  // load the directive's module
  beforeEach(module('spartaFrontendApp'));

    var scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

/*  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<menubar></menubar>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the menubar directive');
  }));
  */
});
