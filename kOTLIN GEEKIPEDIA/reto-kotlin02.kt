Escribe una función en Kotlin llamada esPalindromo que tome una cadena de texto como parámetro y determine si es un palíndromo. Un palíndromo es una palabra, frase, número o cualquier otra secuencia de caracteres que se lee igual hacia adelante y hacia atrás, sin tener en cuenta los espacios en blanco, signos de puntuación ni mayúsculas y minúsculas.

fun esPalindromo(texto: String): Boolean {
    val textoFormateado = texto.replace("[^A-Za-z0-9]".toRegex(), "").toLowerCase()
    val longitud = textoFormateado.length
    for (i in 0 until longitud / 2) {
        if (textoFormateado[i] != textoFormateado[longitud - i - 1]) {
            return false
        }
    }
    return true
}
