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


const countLetters = function(sentence) {
  let results = {};
  for (let letter of sentence) {
    if (results[letter] === undefined && letter !== " ") {
      results[letter] = 1;
    } else if (letter !== " ") {
      results[letter] += 1;
    }
    
  }

  return results;

};


// assertArraysEqual(countLetters("ROAD"),{"R" : 1,"O" : 1, "A" : 1, "D" : 1});
// assertArraysEqual(countLetters("HOWWDY"),{"H" : 1,"O" : 1, "W" : 2, "Y" : 1});

module.exports = countLetters;