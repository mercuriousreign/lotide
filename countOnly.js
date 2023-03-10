const assertEqual = function(actual, expected) {
  
  if (actual !== expected) {
    console.log(`😢 Assertion failed: ${actual} !== ${expected}`);
  } else {
    console.log(`😊 Assertion Passed: ${actual} === ${expected}`);
  }
  
};

const countOnly = function(allItems, itemsToCount) {
  
  const result = {};
  for (item of allItems) {
    if (itemsToCount[item] === true){
      if (item in result) {
        result[item] += 1;
      } else {
        result[item] = 1;
      }
    }
  }

  return result;

}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });


// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;