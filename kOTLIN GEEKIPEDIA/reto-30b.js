const frutas = ['Mango', 'Manzana', 'Naranja', 'Pera'];
const { 3: pera } = frutas;
const [, , , pera2] = frutas; 
console.log(pera);
console.log(pera2);