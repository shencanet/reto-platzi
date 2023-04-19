console.log(`${((x) => x)('I love')} to program`);

/*Al usar los backtiks de ES6, las expresiones se evaluan primero.

En este caso la expresión completa es:

  ${(x => x)("I love")}  



Donde:

(x => x) es una función anónima de tipo flecha, que recibe un parámetro x y con un return implícito lo devuelve.

("I love") es la llamada a la función anónima, acá pasamos como argumento a la función la cadena I love.

Entonces, la función es llamada y regresa únicamente el parámetro que se le pasa. Por ello la respuesta es I love to program.*/