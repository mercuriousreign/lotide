const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

//Assertion cases where array length less than 1
assertArraysEqual(middle([1]),[]);

//Assertion cases odd number
assertArraysEqual(middle([1,2,3]),[2]);
assertArraysEqual(middle([1,2,3,4,5]),[3]);

//Assertion case even number
assertArraysEqual(middle([1,2,3,4]),[2,3]);
assertArraysEqual(middle([1,2,3,4,5,6]),
  [3,4]);