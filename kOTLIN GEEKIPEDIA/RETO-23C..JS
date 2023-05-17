

function test() {
  let nombre = 'Alex';
  if (true) {
    console.log(nombre);
    let nombre = 'Oscar';
  }
}
console.log(test());

/*Primero, recordar que las variables declaradas con let o const tienen scope de bloque.
Segundo, recordar que las variables declaradas con let o const no tienen hoisting, cuando intentamos acceder a una variable antes de su inicializción entra en la Temporal Dead Zone. La variable nombre no puede ser mostrada sin antes inicializarla, nombre esta en su Temporal Dead Zone.*/