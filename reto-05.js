const colorConfig = {
    red: true,
    blue: false,
    green: true,
    black: true,
    yellow: false,
  };
  
  const colors = ['pink', 'red', 'blue'];
  console.log(colorConfig.colors[1]);
  /*Respuesta Correcta: D) TypeError
En javascript existen 2 maneras de acceder a las propiedades de los objetos, por notación del punto o por notación de corchetes.

Cuando hacemos colorConfig.colors[1] literalmente estamos buscando una propiedad colors en el objeto colorConfig y como no existe esta propiedad entonces obtenemos un undefiend, entonces ahora javascript intentará hacer undefined[1] y esto no es un código valido, por ello la consola muestra un TypeError.

Cuando queremos usar variables para hacer lo que se denomina acceso a propiedades dinámicas de objetos necesitamos usar la notación de corchetes: colorConfig[colors[1]] que nos devolverá true, el valor de la propiedad red del objeto colorConfig. */😥Respuesta incorrecta
    Proximo acertijo:
Compartir:
Respuesta Correcta: D) TypeError, Fernando
Cuando declaramos variables primitivas con const estas deben ser como su nombre lo indica valores contantes, por ende no podemos motificar su valor, si intenamos cambiarlo obtendremos un TypeError.

Lo anterior mencionado no pasa con los objetos, si declaramos un objeto con const luego podemos tranquilamente modificar sus propiedades. ¿Por que pasa esto?

Las variables primitivas tienen asignación por valor, pero las variables complejas como los objetos tienen asignación por referencia, entonces cuando se intenta cambiar las propiedades de un objeto declarado con const estamos alterando sus propiedades pero no al objeto en si, en el ejemplo el objeto persona al ser creado reservamos un espacio en memoria que lo almacene, pero no cambiamos dicho espacio, solo sus propiedades.

Haciendo una analogía para comprederlo mejor, una persona, yo por ejemplo: Cristian; desde que naci soy Cristian, a medida que paso el tiempo varias cosas cambiaron en mi, aumento mi estatura, ahora uso lentes, mi cabello esta mas largo, etc., pero sigo siendo yo, pueden cambiar mis propiedades pero en el fondo sigo siendo yo.