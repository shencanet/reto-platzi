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

function findMaxValuePath(graph, edges) {
    const nodeCount = graph.length;
    const adjacencyList = buildAdjacencyList(edges);
    let maxCount = 0;
    let maxValuePath = null;
  
    // Iterar sobre todos los nodos
    for (let i = 0; i < nodeCount; i++) {
      const visited = new Set(); // Conjunto para realizar un seguimiento de los nodos visitados
      const path = [graph[i]]; // Ruta actualmente explorada, comienza con el nodo inicial
      const count = dfs(i, graph[i], visited, path, adjacencyList);
  
      if (count === Infinity) {
        return null; // Se detectó un bucle infinito, devolver nulo
      }
  
      if (count > maxCount) {
        maxCount = count;
        maxValuePath = path.slice(); // Actualizar la ruta de mayor valor encontrada hasta el momento
      }
    }
  
    return maxValuePath;
  }
  
  function dfs(node, currentChar, visited, path, adjacencyList) {
    visited.add(node); // Marcar el nodo como visitado
    let maxCount = 0;
  
    for (const neighbor of adjacencyList[node]) {
      if (!visited.has(neighbor)) { // Si el vecino no ha sido visitado
        path.push(graph[neighbor]); // Agregar el nodo vecino a la ruta actual
        const count = dfs(neighbor, graph[neighbor], visited, path, adjacencyList);
        maxCount = Math.max(maxCount, count); // Actualizar el máximo valor encontrado hasta el momento
      } else if (path.includes(graph[neighbor])) {
        return Infinity; // Se detectó un bucle infinito
      }
    }
  
    visited.delete(node); // Eliminar el nodo actual de los nodos visitados
    path.pop(); // Eliminar el nodo actual de la ruta actual
  
    // Si el nodo actual tiene la misma letra que la letra más frecuente en la ruta actual, incrementar el contador
    return (currentChar === findMaxChar(path)) ? maxCount + 1 : maxCount;
  }
  
  function findMaxChar(arr) {
    const charCount = {};
  
    for (const char of arr) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    let maxChar = null;
    let maxCount = 0;
  
    for (const char in charCount) {
      if (charCount[char] > maxCount) {
        maxChar = char;
        maxCount = charCount[char];
      }
    }
  
    return maxChar;
  }
  
  function buildAdjacencyList(edges) {
    const adjacencyList = {};
  
    for (const [src, dest] of edges) {
      if (adjacencyList[src] === undefined) {
        adjacencyList[src] = [];
      }
      adjacencyList[src].push(dest);
    }
  
    return adjacencyList;
  }
  
  // Ejemplo de uso
  const graph = "ABACA";
  const edges = [[0, 1], [0, 2], [2, 3], [3, 4]];
  
  const maxValuePath = findMaxValuePath(graph, edges);
  console.log("Ruta de mayor valor:", maxValuePath);
 /* 
  Esta implementación utiliza una búsqueda en profundidad (DFS) para recorrer todas las rutas posibles en el gráfico. En cada ruta, se cuenta el número de ocurrencias de la letra más frecuente y se actualiza el máximo valor encontrado hasta el momento. Si se detecta un bucle infinito, se devuelve null.

Ten en cuenta que esta solución asume que los nodos se numeran de forma consecutiva desde 0 hasta n-1. Además, puede haber varias rutas con el mismo valor máximo, y la implementación devuelve la primera ruta encontrada con ese valor.

Puedes ejecutar este código en un entorno de JavaScript para ver el resultado obtenido para el ejemplo dado.