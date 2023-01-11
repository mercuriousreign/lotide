const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1,array2) {
  
  if (eqArrays(array1,array2) === true) {
    console.log(`🙌✔👏 Array Assertion passed, ${array1} and ${array2} are the same `);
  } else {
    console.log(`😢❌😭 Array Assertion fail, ${array1} and ${array2} are not the same`);
  }

};

const without = function(items,unload) {
  let result = [];
  let discard = false;
  for (let item of items) {
    for (let load of unload) {
      if (load === item) {
        discard = true;
      }
    }

    if (discard === false) {
      result.push(item);
    } else if (discard === true) {
      discard = false;
    }
  }
  return result;
}




const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

//Assertion using usual numbers.
let val1 = [1, 2, 3];
without([1, 2, 3], [1]);
assertArraysEqual(val1,[1, 2, 3]);