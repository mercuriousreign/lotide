const map = function(array,callback) {
  const results = [];
  //return callback(array);
  for (let item of array) {
    results.push(callback(item));
  }
  
  return results;
}

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

// const words = ["ground", "control", "to", "major", "tom"];


// const results1 = map(words, word => word[0]);
// const results2 = map(words, word => word+"!" );
// const results3 = map(words, word => word[0].toUpperCase() + word.slice(1));
// assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ]);
// assertArraysEqual(results2,["ground!", "control!", "to!", "major!", "tom!"])
// assertArraysEqual(results3,["Ground", "Control", "To", "Major", "Tom"])

module.exports =  map;