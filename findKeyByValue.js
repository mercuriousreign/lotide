const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`😢 Assertion failed: ${actual} !== ${expected}`);
  } else {
    console.log(`😊 Assertion Passed: ${actual} === ${expected}`);
  }
  
};

const findKeyByValue = function(objs,value) {
  let keys = Object.keys(objs)
  for (let key of keys) {
     if (objs[key] === value) {
       return key;
      }
    }
  return undefined;
  
};



const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;