var nombre = 'Camila';
let apellido = 'Rodriguez';
const edad = 25;
const getDatosPersonales = () => {
  console.log(nombre);
  console.log(apellido);
  console.log(edad);
};
console.log(getDatosPersonales());

/*Independientemente de la palabra reservada con la que declaremos una variable (var, let, const), esta tendrá scope global siempre y cuando no este dentro de un bloque o dentro de una función. Por este motivo nombre, apellido y edad son variables de scope global y por ello pueden ser accedidas desde la función getDatosPersonales*/