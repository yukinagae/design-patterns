/**
 * Revealing Module Pattern
 */
var myRevealingModule = (function(){

  var privateVar = "private variable";
  var publicVar = "public variable";

  function privateFunction() {
    console.log("private: " + privateVar);
  }

  function publicSetName(name) {
    privateVar = name;
  }

  function publicGetName() {
    return privateFunction();
  }

  return {
    setName: publicSetName,
    greeting: publicVar,
    getName: publicGetName
  };

})();

console.log(myRevealingModule.greeting);
myRevealingModule.getName();
myRevealingModule.setName("new name");
myRevealingModule.getName();
