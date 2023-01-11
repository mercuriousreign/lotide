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

const middle = function(array) {
  if (array.length < 2) {
    return [];
  } else if (array.length % 2 === 0) {
    let no1 = (array.length / 2) - 1;
    let no2 = array.length / 2;
    return [array[no1],array[no2]];
  } else {
    let mid = (array.length - 1) / 2;
    return [array[mid]];
  }

};

//Assertion cases where array length less than 1
assertArraysEqual(middle([1]),[]);

//Assertion cases odd number
assertArraysEqual(middle([1,2,3]),[2]);
assertArraysEqual(middle([1,2,3,4,5]),[3]);

//Assertion case even number
assertArraysEqual(middle([1,2,3,4]),[2,3]);
assertArraysEqual(middle([1,2,3,4,5,6]),
[3,4]);