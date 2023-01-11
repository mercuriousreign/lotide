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

const assertArrEq = function(array1,array2) {
  
  if (eqArrays(array1,array2) === true) {
    console.log(`🙌✔👏 Array Assertion passed, ${array1} and ${array2} are the same `);
  } else {
    console.log(`😢❌😭 Array Assertion fail, ${array1} and ${array2} are not the same`);
  }

};

assertArrEq([1, 2, 3], [3, 2, 1]);