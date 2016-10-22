var a = {
  b: 100
};

var descriptor = Object.getOwnPropertyDescriptor(a, "b");
console.log(descriptor); // Object {value: 100, writable: true, enumerable: true, configurable: true}


var x = 10;
var a = Object.create({}, {
  b: {
    get: function() {
      return x;
    },
    set: function(v) {
      x = v;
    }
  }
});
var descriptor = Object.getOwnPropertyDescriptor(a, "b");
console.log(descriptor);
// {get: function(), set: function(v), enumerable: true, configurable: true}

console.log(a.b); // 10
a.b = 20;
console.log(x);   // 20


var a = {
  x: 10,
  y: 20
};
var b = Object.create(a, {x: {value: 1}});

console.log(b.x); // 1
console.log(b.y); // 20
a.y = 200;
console.log(b.y) // 200

console.log(b.__proto__ === a);


function A() {}

var a = new A();
console.log(a.__proto__ === A.prototype); // true

var array = [];
console.log(array.map === Array.prototype.map); // true



function A() {}
A.prototype.x = 100;

var a1 = new A();
var a2 = new A();

console.log(a1.x); // 100
console.log(a2.x); // 100

a1.x = 200;
console.log(a2.x); // 100
console.log(A.prototype.x); // 100



console.log(0 + true) // 1
console.log(0 + undefined) // NaN
console.log(0 + null) // 0
console.log(3 + "3") // "33"
console.log(3 - "3") // 0
console.log(3 - "3a") // NaN

console.log(undefined == 0);  // false
console.log(null == 0);       // false
console.log(undefined == null); // true
console.log(undefined === null); // false

var a = undefined

var x = a ? a.x : undefined
var x = a && a.x

var x = a ? a : []
var x = a || []

function max(a, b) {
  console.log(arguments); // [1, 10]
  console.log(arguments instanceof Array); // false
  return a > b ? a : b;
}

console.log(max.length); // 2
max(1, 10);


function max(a, b) {
  return Math.max(a, b);
}

var max = function(a, b) {
  return Math.max(a, b);
}


(function() {

  console.log(typeof max); // function
  console.log(typeof min); // undefined
  function max(a, b) {
  }

  var min = function(a, b) {
  }
})();

function printThis() {
  console.log(this);
}

printThis(); // window
var a = {
  p: printThis
};

a.p(); // a

printThis.call({x: 10}); // {x: 10}
printThis.apply({y: 10}) // {y: 10}

var printThis = function() {
  console.log(this)
}.bind({z: 10});

printThis(); // {z: 10}
a.p = printThis;
a.p() // {z: 10}
printThis.call(window); // {z: 10}

var f = function factorial(n) {
  if (n == 1) return n;
  return n * factorial(n - 1);
}

function max() {
  return Array.prototype.reduce.call(arguments, function(pre, v) {return pre > v ? pre : v});
}
