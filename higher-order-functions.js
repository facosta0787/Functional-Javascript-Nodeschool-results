'use strict';


  function repeat(operation, num) {
    if(num > 0){
      operation()
      return repeat(operation,num - 1)
    }
  }

  var sayHello = function(){
    console.log('Hello. How are you ?')
  }

  // Do not remove the line below
  module.exports = repeat
