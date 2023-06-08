const num = parseInt("7*6", 10);
console.log(num); //?
/*parseInt convierte un valor a tipo number de una base concreta (base binaria, octal, decimal, etc).

En el ejemplo intentamos convertir "7*6" a base 10, osea, a base decimal.

parseInt toma los valores validos de izquierda a derecha, dicho esto, solo tomará el valor 7 (el * y todo lo que le precede no es un valor valido para parseInt).

En conclusión, solo convierte al 7 de string a number./*/