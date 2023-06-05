let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);

/Respuesta Correcta: C) true false false
En el primer console.log:

console.log(a == b);/*

Vemos que hacemos una comparación débil con el operador ==, esto significa que solo compararemos los valores de a y b, por ende obtendremos un true.

En el segundo console.log:

console.log(a === b);

Hacemos una comparación estricta usando el operador ===, esto significa que compararemos valores y tipos de datos, a y b tienen el mismo valor, pero a es de tipo number y b esta siendo inicializada usando el contructor Number, por ende es un objeto; entonces obtendremos un false.

En el tercer console.log

console.log(b === c);

Al igual que el caso anterior, intentamos comparar de manera estricta un objeto contra un número, entonces tendremos como resultado un false.

Conclusión: trata de usar simpre ===. */