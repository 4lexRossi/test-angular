describe('Testing AngularJS Test Suite', function() {
  
  beforeEach(module('testingAngularApp'));
  
  describe('Testing AngularJS Controller', function() {         
    var scope, ctrl;

    beforeEach(inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      ctrl = $controller('testingAngularCtrl', {$scope:scope});        
    }));

    it('should initialize the title in the scope', function() {
      expect(scope.title).toBeDefined();
      expect(scope.title).toBe('Testing AngularJS Applications');
    });
  });
});