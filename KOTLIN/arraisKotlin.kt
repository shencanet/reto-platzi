

import kotlin.collections.mutableMapOf

fun  main(){ 
    val numeros = arrayOf("1","2","3","4")
    for (numero in numeros){
        println(numeros)
    }
    println(numeros[0])
    println(numeros.get(1))//getter

    numeros[2] = "shen"
    numeros.set(1, "structo")
    for (numero in numeros){
        println(numeros)
    }
    println(numeros.size)

    val nombres : Array<String?> = arrayOfNulls(3)
    nombres[0] = "Alfonso"
    nombres[1] = "Ricardo"
    nombres[2] = "Ricardo"
    for (nombre in nombres){
        println(nombre)
    }

    val numero2 : MutableList<String> = mutableListOf("Uno", "Dos", "Tres")
    numero2.add("Cuatro")
    println(numero2.size)
    println(numero2[0])
    println(numero2.get(2))

    numero2.forEach{
        println(it + " ")
    }

    val numeros4: MutableMap<String, Int> = mutableMapOf("Uno" to 1, "Dos" to 2, "Tres" to 3)
    numeros4.put("Cuatro", 4)
    numeros4["Uno"] = 11

    
    val numeros5: MutableMap<String, Int> = mutableMapOf(
        Pair("Uno", 1),
        Pair("Dos", 2),
        Pair("Tres", 3)
    )
    
    for ((clave, valor) in numeros5) {
        println("$clave: $valor")
    }


}