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

Cuando queremos usar variables para hacer lo que se denomina acceso a propiedades dinámicas de objetos necesitamos usar la notación de corchetes: colorConfig[colors[1]] que nos devolverá true, el valor de la propiedad red del objeto colorConfig. */