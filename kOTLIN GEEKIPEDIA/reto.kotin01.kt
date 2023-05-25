Escribe una función en Kotlin llamada sumaDigitos que tome un número entero positivo como parámetro y devuelva la suma de sus dígitos. Por ejemplo, si se pasa el número 123, la función debe devolver 6 (1 + 2 + 3).

fun sumaDigitos(numero: Int): Int {
    var suma = 0
    var num = numero
    
    while (num != 0) {
        suma += num % 10
        num /= 10
    }
    
    return suma
}