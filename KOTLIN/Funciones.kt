
class  Persona(nombre: String, apellidos: String) {
    var nombre: String = ""
    var apellidos: String = ""
    var edad: Int = 20

    init {
        this.nombre = nombre
        this.apellidos = apellidos
        
    }
    constructor (nombre: String, apellidos: String, edad: Int) 
    : this(nombre, apellidos) {

        this.edad = edad
    }
    fun getNombreCompleto() = " $nombre $apellidos Edad=$edad "

}