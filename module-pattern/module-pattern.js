/**
 * Module Pattern
 */
var testModule = (function(){
  var counter = 0;
  return {
    incrementCounter: function() {
      return counter++;
    },
    resetCounter: function() {
      console.log("counter value prior to reset: " + counter);
      counter = 0;
    },
    showCounter: function() {
      console.log("counter: " + counter);
    }
  };
})();

testModule.showCounter();
testModule.incrementCounter();
testModule.incrementCounter();
testModule.showCounter();
testModule.resetCounter();
testModule.showCounter();

var myNameSpace = (function() {
  var myPrivateVar = 0;
  var myPrivateMethod = function(foo) {
    console.log(foo);
  };

  return {
    myPublicVar: "foo",
    myPublicMethod: function(bar) {
      myPrivateVar++;
      myPrivateMethod(bar);
    }
  };
})();

console.log(myNameSpace);
console.log(myNameSpace.myPublicVar);
console.log(myNameSpace.myPublicMethod);
myNameSpace.myPublicMethod("hoge");
