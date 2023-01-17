const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const countOnly = require('./countOnly'); 
const findKeyByValue = require('./findKeyByValue');
const map = require('./map');
const without = require('./without');
const eqArrays = require('./eqArrays');
const assertObjectsEqual  = require('./assertObjectsEqual');
const eqObjects  = require('./eqObjects');
const takeUntil = require('./takeUntil');
const countLetters = require('./countLetters');
const findKey = require('./findKey');
const letterPositions = require('./letterPositions');

module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,  
  countOnly,
  findKeyByValue,
  map, 
  without,
  assertEqual,
  eqArrays,
  head ,
  middle, 
  tail,
  assertObjectsEqual,  
  eqObjects  ,
  takeUntil,
  countLetters,  
  findKey ,
  letterPositions, 
};

console.log(module);
