/**
 * Singleton Pattern
 */
var myBad = (function() {
  var instance;

  function init() {
    var privateRandomNumber = Math.random();
    return {
      getRandomNumber: function() {
        return privateRandomNumber;
      }
    };
  };

  return {
    getInstance: function() {
      instance = init();
      return instance;
    }
  }

})();

var badA = myBad.getInstance();
var badB = myBad.getInstance();

console.log(badA);
console.log(badB);
console.log(badA === badB);
console.log(badA.getRandomNumber() === badB.getRandomNumber());

var myOk = (function() {
  var instance;

  function init() {
    function privateMethod() {
      console.log("I am private method.");
    }
    var privateVar = "I am private variable.";
    var privateRandomNumber =  Math.random();

    return {
      publicMethod: function() {
        console.log("I am public method.");
      },
      publicVar: "I am public variable",
      getRandomNumber: function() {
        return privateRandomNumber;
      }
    }
  }

  return {
    getInstance: function() {
      if(!instance) {
        instance = init();
      }
      return instance;
    }
  }
})();

var okA = myOk.getInstance();
var okB = myOk.getInstance();
console.log(okA);
console.log(okB);
console.log(okA === okB);
console.log(okA.getRandomNumber() === okB.getRandomNumber());
