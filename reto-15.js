const banda = {
    id: 1,
    nombre: 'Radiohead',
    'tipo de musica': 'Rock',
    albunes: ['Pablo Honey', 'Ok Computer', 'In Rainbows'],
  };
  banda.vocalista = undefined;
  console.log('vocalista' in banda);
  delete banda['tipo de musica'];
  console.log('tipo de musica' in banda);
  console.log(banda["tipo de musica"]);
  console.log(banda.id);
  
  /*Respuesta Correcta: B) true, false
Existe diferencias entre declarar la propiedad de un objeto como undefined o eliminarla con el operador unario delete.

El objeto banda original no tiene la propiedad vocalista, pero lo agregamos con el valor undefined, entonces el objeto quedaria así:

  const banda = {
 id:1,
 nombre: "Radiohead",
 "tipo de musica": "Rock",
 albunes: ["Pablo Honey", "Ok Computer", "In Rainbows"],
 vocalista: undefined
 };  



Pese a que el valor de vocalista es undefined la propiedad existe como tal dentro del objeto, es por ello que al verificarlo con el operador in obtenemos true.

Algo diferente pasa cuando eliminamos con delete la propiedad tipo de musica, esta deja de existir en el objeto, no tiene ningún tipo de valor, ni siquiera undefined, el objeto quedaría así:

  const banda = {
 id:1,
 nombre: "Radiohead",
 albunes: ["Pablo Honey", "Ok Computer", "In Rainbows"],
 vocalista: undefined
 };  



Por ello al verificar nuevamente con in la existencia de una propiedad con la llave tipo de musica obtenemos false.*/