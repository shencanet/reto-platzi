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

/*Pese a que null es un primitivo, debido a un bug del lenguaje su tipo de dato es object.

Este bug es muy antiguo y se determino que no vale la pena arreglarlo al día de hoy ya que se pueden romper muchos programas que pueden depender de esta error.

Este bug es bastante conocido en programadores experimentados y usado en entrevistas laborales para estimar tu conocimiento del lenguaje.*/