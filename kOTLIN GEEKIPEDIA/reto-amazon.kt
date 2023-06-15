fun imprimirMatrizEspiral(matriz: Array<Array<Int>>) {
    if (matriz.isEmpty()) return

    val filas = matriz.size
    val columnas = matriz[0].size
    var inicioFila = 0
    var finFila = filas - 1
    var inicioColumna = 0
    var finColumna = columnas - 1

    while (inicioFila <= finFila && inicioColumna <= finColumna) {
        // Imprimir primera fila de la porción restante
        for (i in inicioColumna..finColumna) {
            print("${matriz[inicioFila][i]} ")
        }
        inicioFila++

        // Imprimir última columna de la porción restante
        for (i in inicioFila..finFila) {
            print("${matriz[i][finColumna]} ")
        }
        finColumna--

        // Imprimir última fila de la porción restante si queda alguna
        if (inicioFila <= finFila) {
            for (i in finColumna downTo inicioColumna) {
                print("${matriz[finFila][i]} ")
            }
            finFila--
        }

        // Imprimir primera columna de la porción restante si queda alguna
        if (inicioColumna <= finColumna) {
            for (i in finFila downTo inicioFila) {
                print("${matriz[i][inicioColumna]} ")
            }
            inicioColumna++
        }
    }
}

// Ejemplo de uso
val matriz = arrayOf(
    arrayOf(1, 2, 3, 4, 5),
    arrayOf(6, 7, 8, 9, 10),
    arrayOf(11, 12, 13, 14, 15),
    arrayOf(16, 17, 18, 19, 20)
)
imprimirMatrizEspiral(matriz)