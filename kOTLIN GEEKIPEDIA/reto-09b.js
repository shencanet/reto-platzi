[1, 2, 3].map((num) => {
  if (typeof num === 'number') return;
  return num * 2;
});

Respuesta Correcta: C) [undefined, undefined, undefined]
El método `map` es propio del paradigma de la programación funcional. Este método siempre retorna una nuevo arreglo.

En el ejemplo, puesto que estamos iterando sobre un arreglo de números, la condición evaluaerá `true` para cada uno de los elementos del arreglo, pero hay 2 sentencias `return`. JavaScript ignora todo el código que esta después del primer `return` que encuntra. Dicho esto, tendríamos algo así:

[1, 2, 3].map(num => { if (typeof num === "number") return; });

Ahora, si bien la condición se evalua a `true`, el `return` no devuelve nada, simplemente hace que el código se salga del `map`.

Cuando no devolvemos nada en `return`, `map` regresa siempre `undefined`.

Al tener 3 elementos en el arreglo, y recordando siempre que map regresa un nuevo arreglo, obtenemos como resultado final un arreglo de 3 `undefined`