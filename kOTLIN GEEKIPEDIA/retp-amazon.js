/*User
 Dada una matriz de números N por M, imprima la matriz en una espiral en el sentido de las agujas del reloj.

Por ejemplo, dada la siguiente matriz:

 [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20]] 

Debes imprimir lo siguiente:

 1 2 3 4 5 10 15 20 19 18 17 16 11 6 7 8 9 14 13 12 */

 function imprimirMatrizEspiral(matriz) {
    if (!matriz || matriz.length === 0) {
      return;
    }
  
    let filas = matriz.length;
    let columnas = matriz[0].length;
    let inicioFila = 0;
    let finFila = filas - 1;
    let inicioColumna = 0;
    let finColumna = columnas - 1;
  
    while (inicioFila <= finFila && inicioColumna <= finColumna) {
      // Imprimir primera fila de la porción restante
      for (let i = inicioColumna; i <= finColumna; i++) {
        console.log(matriz[inicioFila][i]);
      }
  
      inicioFila++;
  
      // Imprimir última columna de la porción restante
      for (let i = inicioFila; i <= finFila; i++) {
        console.log(matriz[i][finColumna]);
      }
  
      finColumna--;
  
      // Imprimir última fila de la porción restante si queda alguna
      if (inicioFila <= finFila) {
        for (let i = finColumna; i >= inicioColumna; i--) {
          console.log(matriz[finFila][i]);
        }
  
        finFila--;
      }
  
      // Imprimir primera columna de la porción restante si queda alguna
      if (inicioColumna <= finColumna) {
        for (let i = finFila; i >= inicioFila; i--) {
          console.log(matriz[i][inicioColumna]);
        }
  
        inicioColumna++;
      }
    }
  }
  
  // Ejemplo de uso
  let matriz = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
  ];
  imprimirMatrizEspiral(matriz);