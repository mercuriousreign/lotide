const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`😢❌ Assertion failed: ${actual} !== ${expected}`);
  } else {
    console.log(`😊✅ Assertion Passed: ${actual} === ${expected}`);
  }
  
};

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
    if (firstObj[k].length > 1) {
      if (!eqArrays([firstObj[k]],secondObj[k])) {
        return false;
      }
    } else if (firstObj[k] !== secondObj[k]) {
      return false;
    }
  }


  return true;

};

//Single value test
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };


assertEqual(eqObjects(shirtObject , anotherShirtObject),true);
assertEqual(eqObjects(shirtObject , longSleeveShirtObject),false);

// Array as value assertion test
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

console.log("the first length is ",Object.keys(multiColorShirtObject).length);
console.log("the second length is ",Object.keys(longSleeveMultiColorShirtObject).length);
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject),true);
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject),false);