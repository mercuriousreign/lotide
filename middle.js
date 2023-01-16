const middle = function(array) {
  if (array.length < 2) {
    return [];
  } else if (array.length % 2 === 0) {
    let no1 = (array.length / 2) - 1;
    let no2 = array.length / 2;
    return [array[no1],array[no2]];
  } else {
    let mid = (array.length - 1) / 2;
    return [array[mid]];
  }

};

module.exports = middle;