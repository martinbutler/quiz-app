'use strict';

describe('Service: qPoints', function () {

  // load the service's module
  beforeEach(module('quizApp'));

  // instantiate service
  var qPoints;
  beforeEach(inject(function (_qPoints_) {
    qPoints = _qPoints_;
  }));

  it('should do something', function () {
    expect(!!qPoints).toBe(true);
  });

});
