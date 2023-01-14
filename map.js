const map = function(array,callback) {

  //return callback(array);
}


const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
//const results1 = Array.map(words, function(words){words[0]});
console.log(results1);
