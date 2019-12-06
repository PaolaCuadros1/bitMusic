// Vamos a crear un modelo de los datos  que se enviaran desde el front 
// y que coincidan con los datos del back

export class Usuario{
    constructor(
        public _id: String,
        public nombre: String,
        public apellido: String,
        public correo: String,
        public contrasena: String,
        public rol: String,
        public imagen: String,

    ){}
}
