
function fruits() {
  if (true) {
    var fruit1 = 'Apple';
    let fruit2 = 'Kiwi';
    const fruit3 = 'Banana';
  }
  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
}

fruits();

/*Respuesta Correcta: A) ReferenceError: fruit2 is not defined
ES6 introdujo las variables let y const. Con eso, introdujo el alcance de bloque.

El alcance del bloque significa que las variables definidas dentro de un bloque de código {} solo se pueden usar dentro de él.*/