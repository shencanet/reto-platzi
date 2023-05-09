console.log('hola'.split('').reverse().join('')); // ?
Respuesta Correcta: D) "aloh"
Estos 3 métodos de cadenas se preguntan mucho en entrevistas. Veamos paso por paso que sucede:

Aplicamos split:
split convierte una cadena en arreglo dependiendo del parámetro que se le pase, en este caso una cedena vacía: ["h","o","l","a"].

Aplicamos reverse:
reverse es un método de arreglos, invierte todos los elementos del arreglo: ["a","l","o","h"].

Aplicamos join:
join es un método de arreglos que convierte un arreglo en cadena nuevamente dependiendo del parámetro que se le pase, en este caso una cadena vacía: "aloh"