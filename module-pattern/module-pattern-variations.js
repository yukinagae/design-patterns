/**
 * Module Pattern Variations
 */

// Import mixins
// var myModule = (function(jQ, _) {
//   function privateMethod1() {
//     jQ(".container").html("teest");
//   }
//
//   function privateMethod2() {
//     console.log(_.min([1, 2, 3, 4]));
//   }
//
//   return {
//     publicMethod: function() {
//       privateMethod1();
//     }
//   };
// })(jQuery, _);
// myModule.publicMethod();

// Exports
var myModule = (function() {
  var module = {};
  var privateVariable = "Hello World";
  function privateMethod() {
    // ...
  }

  module.publicPorperty = "Foobar";
  module.publicMethod = function() {
    console.log(privateVariable);
  };

  return module;
})();
console.log(myModule);
myModule.publicMethod();
