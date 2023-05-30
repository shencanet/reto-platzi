const frutas = ['Mango', 'Manzana', 'Naranja', 'Pera'];
const { 3: pera } = frutas;
const [, , , pera2] = frutas; 
console.log(pera);
console.log(pera2);

Para usar la desestructuración en arreglos es importante tener en cuenta los índices de los elementos. Por ello para acceder a Pera en el arreglo frutas hariamos algo como:

const [, , , pera] = frutas;

Donde cada , representa el salto de un índice del arreglo.

Para una sistaxis mas breve podemos usar esto:

const { 3:pera } = frutas;

Donde el 3 representa las posiciones que deseamos saltar. Nota que aunque frutas sea un arreglo usamos {} para la desestructuración