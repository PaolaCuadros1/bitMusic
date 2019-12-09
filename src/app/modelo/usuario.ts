// Vamos a crear un modelo de los datos que se enviarán
// desde el front para que coincidan con los datos del modelo del back 

export class Usuario{
    constructor(
        public _id: String,
        public nombre: String,
        public apellido: String,
        public correo: String,
        public contrasena: String,
        public rol: String,
        public imagen: String
    ){}
}

// Miércoles - servicio (los datos con los cuales Angular va a trabajar)
//          HttpClientModule (Permite enviar peticiones del método HTTP)