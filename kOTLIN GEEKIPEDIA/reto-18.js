let objeto1 = { valor: 10 };
let objeto2 = objeto1;
let objeto3 = { valor: 10 };
console.log(objeto1 == objeto2);
console.log(objeto1 == objeto3);
objeto1.valor = 15;
console.log(objeto2.valor);
console.log(objeto3.valor);