const set = new Set();

set.add(1);
set.add('Lydia');
set.add({ name: 'Lydia' });

for (let item of set) {
  console.log(item + 2);
}
/*Respuesta Correcta: A) 3, NaN, [object Object]2
/*Respuesta Correcta: C) 3, Lydia2, [Object object]2
A cada item del Set aplicamos el operador + con el número 2.

Para 1 que es number realizamos una suma simple obteniendo como resultado 3.

Para la cadena Lydia y por coerción de tipos convertimos al número 2 en string y realizamos una concatenación obteniendo Lydia2.

Para el objeto { name: "Lydia" } nuevemente por coerción de tipos convertimos tanto al objeto y al número 2 a string obteniendo [Object object]2.*/