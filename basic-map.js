'use strict';

function doubleAll(numbers) {
  var results = [];
  numbers.map(
    function(number){
      results.push(number * 2);
    }
  );
  return results
}

module.exports = doubleAll
