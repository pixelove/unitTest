var should = require('chai').should();
var Add = require('./math.js');
var Compare = require('./math.js');
var Concatinate = require('./math.js');

describe('Add test', function() {
  it('should result number(3) with numberOne and numberTwo variables', function() {
    var numberOne = 1;
    var numberTwo = 2;
    var expectedResult = 3;
    var actualResult = Add(numberOne, numberTwo);

    actualResult.should.equal(expectedResult);
  });
});

describe('true/false test', function() {
  it('should result true/false', function() {
    var uno = true;
    var duo = true;
    var awaitedResult = 2;
    var compareResult = Compare(uno, duo);

    compareResult.should.equal(awaitedResult);
  });
});

describe('concatination test', function() {
  it('should result with ABBA word', function() {
    var wordPart1 = "AB";
    var wordPart2 = "BA";
    var awaitedResult = "ABBA";
    var compareResult = Concatinate(wordPart1, wordPart2);

    compareResult.should.equal(awaitedResult);
  });
});
