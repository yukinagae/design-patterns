/**
* Object Creation
*/
var newObject = {};
var newObject2 = Object.create(Object.prototype);
var newObject3 = new Object();

console.log(newObject);
console.log(newObject2);
console.log(newObject3);

// ECMAScript 3 compatible approaches
newObject.someKey = "Hello World";
var value = newObject.someKey;

console.log(newObject);
console.log(value);

newObject['someKey'] = "Aloha World";
var value = newObject['someKey'];
console.log(newObject);
console.log(value);

// ECMAScript 5 only compatible approaches
Object.defineProperty(newObject, "someKey", {
  value: "for more control of the property's behavior",
  writable: true,
  enumerable: true,
  configurable: true
});
console.log(newObject);

var defineProp = function(obj, key, value) {
  var config = {
    value: value,
    writable: true,
    enumerable: true,
    configurable: true
  };
  Object.defineProperty(obj, key, config);
}

var person = Object.create( Object.prototype );
defineProp( person, "car",  "Delorean" );
defineProp( person, "dateOfBirth", "1981" );
defineProp( person, "hasBeard", false );
console.log(person);

var hoge = {};
Object.defineProperties( hoge, {
  someKey: {
    value: 101,
    // writable: true,
    // enumerable: true,
    // configurable: true
  },
  anotherKey: {
    value: "Foo bar",
    // writable: false,
    enumerable: true,
  }
});
console.log(hoge);

var obj = {};
Object.defineProperties(obj, {
    newDataProperty: {
        value: 101,
        writable: true,
        enumerable: true,
        configurable: true
    }
});
console.log(obj);
