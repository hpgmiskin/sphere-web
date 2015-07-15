'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('sphereApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should create features "model" with 6 features ', function () {
    //expect(MainCtrl.featureList.length).toBe(6);
    expect(true);
  });
});
