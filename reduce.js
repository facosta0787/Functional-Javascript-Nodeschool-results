'use strict';

function countWords(inputWords) {
  // SOLUTION GOES HERE
  var results = {}
  inputWords.reduce((prev,current)=>{
    if(!results[current]){
      results[current] = 1
    }else{
      results[current] = results[current] + 1
    }
  },{})
  return results
}
module.exports = countWords
