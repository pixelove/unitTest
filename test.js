var should = require('chai').should();
var Add = require('math.js');

describe('Add test', function() {
  it('should result 3 with numberOne and numberTwo', function() {
    var numberOne = 1;
    var numberTwo = 2;
    var expectedResult = 3;
    var actualResult = Add(numberOne, numberTwo);

    actualResult.should.equal(expectedResult);
  });
});
