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

const eqObjects = function(firstObj,secondObj) {
  let keys1 = Object.keys(firstObj);
  let keys2 = Object.keys(secondObj);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let k of keys1) {
    if (Array.isArray(firstObj[k])) {
      if (!eqArrays([firstObj[k]],secondObj[k])) {
        return false;
      }
    } else if (firstObj[k] !== secondObj[k]) {
      return false;
    }
  }


  return true;

};
// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (!eqObjects(actual, expected)) {
    console.log(`😢❌ Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    console.log(`😊✅ Assertion passed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//Single value test
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

assertObjectsEqual(shirtObject,anotherShirtObject);
assertObjectsEqual(shirtObject,longSleeveShirtObject);