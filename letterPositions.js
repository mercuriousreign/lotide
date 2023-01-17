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

const letterPositions = function(sentence) {
  const results = {};
  let index = 0;
  for (let letter of sentence) {
    //console.log(index);
    if (results[letter] === undefined && letter !== " ") {
      results[letter] = [index];
    } else if (letter !== " ") {
      results[letter].push(index);
    }
    index +=1

  }
  return results;
};

// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello").l, [2,3]);
// assertArraysEqual(letterPositions("hello").l, [2]);

module.exports = letterPositions;