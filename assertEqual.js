//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log("😢 Assertion failed: " + String(actual) + " !== " + String(expected));
  } else {
    console.log("😊 Assertion Passed: " + String(actual) + " === " + String(expected));
  }
  
}

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);