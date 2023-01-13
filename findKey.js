//FUNCTION IMPLEMENTATION
const findKey = function (objects,conditions) {
  for (let object in objects) {
    if (conditions(objects[object])) {
      return object;
    }
  }

  return undefined;
}


const assertEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (actual !== expected) {
    console.log(`😢 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    console.log(`😊 Assertion Passed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2),"noma"); 



