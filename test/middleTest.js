const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");
const assert = require('chai').assert;


// //Assertion cases where array length less than 1
// assertArraysEqual(middle([1]),[]);

// //Assertion cases odd number
// assertArraysEqual(middle([1,2,3]),[2]);
// assertArraysEqual(middle([1,2,3,4,5]),[3]);

// //Assertion case even number
// assertArraysEqual(middle([1,2,3,4]),[2,3]);
// assertArraysEqual(middle([1,2,3,4,5,6]),
//   [3,4]);

  describe("#middle", () => {

    it('Returns "Lighthouse" for  ["Hello", "Lighthouse", "Labs"]', () => {
      const result = middle(["Hello", "Lighthouse", "Labs"]);
      assert.deepEqual(result, ["Lighthouse"]); 
    });
  
    it('Returns [0,2,3,4] for  [1,0,2,3,4]', () => {
      const result = middle([1,0,2,3,4]);
      assert.deepEqual(result, [2]); 
    });
  
  });