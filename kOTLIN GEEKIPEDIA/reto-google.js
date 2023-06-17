/*Este problema fue solicitado por Google.

En un gráfico dirigido, a cada nodo se le asigna una letra mayúscula. Definimos el valor de una ruta como el número de letras que ocurren con mayor frecuencia a lo largo de esa ruta. Por ejemplo, si una ruta en el gráfico pasa por "ABACA", el valor de la ruta es 3, ya que hay 3 ocurrencias de 'A' en la ruta.

Dado un gráfico con n nodos y m aristas dirigidas, devuelva la ruta de mayor valor del gráfico. Si el valor más grande es infinito, devuelve nulo.

El gráfico se representa con una cadena y una lista de aristas. El i -ésimo carácter representa la letra mayúscula del i -ésimo nodo. Cada tupla en la lista de aristas (i, j) significa que hay una arista dirigida desde el i -ésimo nodo hasta el j -ésimo nodo. Los bordes propios son posibles, así como los bordes múltiples.

Por ejemplo, el siguiente gráfico de entrada:

 ABACA 

 [(0, 1), (0, 2), (2, 3), (3, 4)] 

Tendría un valor máximo de 3 usando la ruta de vértices [0, 2, 3, 4] , (A, A, C, A) .

El siguiente gráfico de entrada:

 A 

 [(0, 0)] 

Debería devolver nulo, ya que tenemos un bucle infinito. */