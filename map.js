const map = function(array,callback) {
  const results = [];
  //return callback(array);
  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
  }
  
  return results;
}


const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
//const results1 = Array.map(words, function(words){words[0]});
console.log(results1);
