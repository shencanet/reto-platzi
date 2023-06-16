/*Se le da una cadena de longitud N y un parámetro k . La cadena se puede manipular tomando una de las primeras letras k y moviéndola hasta el final.

Escriba un programa para determinar la cadena lexicográficamente más pequeña que se puede crear después de un número ilimitado de movimientos.

Por ejemplo, supongamos que nos dan la cadena daily y k = 1 . Lo mejor que podemos crear en este caso es ailyd . */

let cadena = "daily";
let k = 1;
let resultado = smallestLexicographically(cadena, k);
function smallestLexicographically(string, k) {
    // Obtener las primeras k letras de la cadena
    let prefix = string.slice(0, k);
    
    // Ordenar el resto de la cadena
    let suffix = string.slice(k).split('').sort().join('');
    
    // Unir las partes para formar la cadena final
    let result = prefix + suffix;
    
    return result;
  }
  
  // Ejemplo de uso
 
  console.log(resultado);