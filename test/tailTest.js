const assertEqual = require('../assertEqual');
const tail = require("../tail");
const assert = require('chai').assert;


describe("#tail", () => {

  it('Returns ["Lighthouse", "Labs"] for  ["Hello", "Lighthouse", "Labs"]', () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result, ["Lighthouse", "Labs"]); 
  });

  it('Returns [0,2,3,4] for  [1,0,2,3,4]', () => {
    const result = tail([1,0,2,3,4]);
    assert.deepEqual(result, [0,2,3,4]); 
  });

});