console.log(typeof null == 'object'); //true
console.log(typeof undefined == 'undefined'); // true
console.log(typeof undefined == 'object'); // false
console.log(typeof [] == 'object'); // true
console.log(typeof {} == 'object'); // true
console.log(typeof function(){} == 'function'); // true
console.log(typeof function(){} == 'object'); // false
console.log(typeof NaN == 'number'); // true
console.log(typeof NaN == 'object'); // false
console.log(typeof Infinity == 'number'); // true
console.log(typeof Infinity == 'object'); // false
console.log(typeof -Infinity == 'number'); // true
console.log(typeof -Infinity == 'object'); // false
console.log(typeof 1 == 'number'); // true
