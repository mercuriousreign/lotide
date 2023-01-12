const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`😢❌ Assertion failed: ${actual} !== ${expected}`);
  } else {
    console.log(`😊✅ Assertion Passed: ${actual} === ${expected}`);
  }
  
};

const eqObjects = function(object1,object2) {

}


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
//eqObjects(shirtObject , anotherShirtObject); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
//eqObjects(shirtObject , longSleeveShirtObject); // => false

assertEqual(eqObjects(shirtObject , anotherShirtObject),true);
assertEqual(eqObjects(shirtObject , longSleeveShirtObject),false)