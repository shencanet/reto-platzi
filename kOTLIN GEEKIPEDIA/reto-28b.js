!!null;
!!'';
!!1;

El operador !! realiza una doble negación.

En el primer caso, por coerción de tipos, null es un valor falsy, si lo negamos 2 veces, tendríamos false.

En el segundo caso, por coerción de tipos, "" es un valor falsy, si lo negamos 2 veces tendríamos false.

Por último, el tercer caso, y nuevamente por coerción de tipos, el valor 1 es un valor truthy, si lo negamos 2 veces, obtendremos true.