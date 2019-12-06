//vamos a crear un modelo de los datos
// que se enviaran desde el front
// paraque  coincidan con los datos del modelo del back
export class Usuario {
    //estamos creando un modelo y exportandolo como una clase
    constructor(
        public _id: String,// es la propiedad con la que se crea en mongo
        public nombre: String,
        public apellido: String,
        public correo: String,
        public contrasena: String,
        public rol: String,
        public imagen: String
    ) {

    }
}
//Miercoles -servicio (los datos con los cuales Angular va a trabajar)
// HttpClientModule (Permite enviar peticiones del metodo HTTP)