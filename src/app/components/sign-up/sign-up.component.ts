import { Component, OnInit } from '@angular/core';
//Importar nuestro modelo Angular
import { Usuario } from '../../modelo/usuario';
//Los primeros ../ es para salirnos de la carpeta sing up y luego los ../ para salirnos de la carpeta components 

//Importar nuestros servicios
import { UsuarioService } from '../../servicio/usuario.service';
//UsuarioService lo estamos trayendo de la exportacion que esta enusuario.service.ts

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  //declaración de la variable que esta trayendo los valores
  //de los inputs en el html [(ngModel)]= "usuarioRegistro"
  //El valor de esta variable será el modelo que nosotros necesitamos
  //para que coincidan los valores de los inputs con la propiedades de nuestro modelo

  /* 
  html -> input<[(ngModel)]="usuarioRegistro.nombre" #nombre>
  usuarioRegistro = {
    nombre = input.nombre
    apellido = input.apellido
  }

  ts
  public usuarioRegistro : Usuario (nuestro modelo)
  usuarioRegistro.nombre == Usuario / nombre: String
  */

  public usuarioRegistro: Usuario;

  constructor(
    //Aqui estamos declarando una variable privada cuyo valor será el servicio que necesitamos, 
    //por standar y buenas practicas tendrá el mismo nombre del servicio pero en minúsculas
    private UsuarioService: UsuarioService
  ) {

    //Pasaremos los datos de la variable usuarioRegistro a nuestro modelo para que se puedan guardar
    this.usuarioRegistro = new Usuario('', '', '', '', '', 'ROLE_USER', '');
  }

  ngOnInit() {
  }
  //vamos a crear el método de registroUsuario(). Este método contendrá toda la lógica 
  //para guardar los datos del usuario, conectarse al método del servicio, y entre ambos
  //comunicarse a la API y la BD

  registrarUsuario() {
    //En console.log, vamos a imprimir los datos del usuario que están llegando en la variable usuarioRegistro
    console.log(this.usuarioRegistro);

    //vamos acceder al servicio registro, enviando la variable usuarioRegistro y accederemos a un método
    // del Observable que se llama subscribe para que el Observable pueda recoger los datos que se están
    //enviando y guardarlos en la BD.
    //Este this.usuarioRegistrp == usuarioNuevo
    // subscribe necesita un parámetro de tipo culquiera cosa : any (estos : estamos en el leguaje TS)
    this.UsuarioService.registro(this.usuarioRegistro).subscribe(
      (response: any) => {
        let usuario = response.usuario; //acá están todos los datos del usuario
        this.usuarioRegistro = usuario; //aqui ya tenemos acceso al _id / nombre / apellido / correo etc

        //validar a partir de la existencia del -id si se ha registrado o no un usuario Nuevo.
        //Es decir, si dentro de la respuesta (response.usuario) ya existe un _id nuevo, 
        //entonces se nos ha indicado que el usuario ya se ha registrado correctamente
        if (!this.usuarioRegistro._id) {//aqui indicamos que si no existe ese _id envíe el siguiente mns
          alert("Error al registrarse");
        } else {
          // para imprimir las comillas invertidas podemos indicar Ctrl + Alt +} dos veces
          // estas comillas nos permiten concatenar el mns con espacios incluidos
          alert(`Registro exitoso!!, Inicia Sesión con ${this.usuarioRegistro.correo}`);

          // indicar que limoie o deje vacio el modelo
          this.usuarioRegistro = new Usuario('', '', '', '', '', 'ROLE_USER', '');
        }
      },
      error => {
        var errorMensaje = <any>error;

        if (errorMensaje != null) {
          console.log(error);
        }
      }

    );


  }//cerramos el método registroUsuario()

} //cerramos la clase  SignUpComponentnpm
// Y con esto ya acabamos el registro del usuario
//vamos a probar nuestra aplicacion
// 1)
//vamos a ejecutar npm star o ng serve o ng serve --open
//tengamos en cuenta que debemos estar parados en la consola en la carpeta bitMusic
//2)
// Vamos abrir nuestra base BD MSFIDOSignatureAssertion, en una nueva consola
// ejecutamos mongod para levantar el servidor de Mongo y en otra consola ejecutamos mongo para levanta
// el cliente mongor(aqui abrimos consola con cmd y escribimos mongo y en otra consola mongod)
// 3)
// vamos a jecutar npm start ubicadas en lacarpeta back para levantar el servidor de nuestra API
// esto lo hacemos en una nueva consola ( osea abrimos otra y buscamos con cd desktop/MARIU/PROYECTO/back)
//luego en la misma consola npm install y luego npm start
//En total debemos tener 4 consolas
//luego vamos a nuestro front y registarmos un usuario
//entramos en la consola de mongo y alli escribimos use bitmusicAM(nombre de BD), luego db.usuarios.find().pretty()
//y deria mostrarnos el nuevo usuario registrado con los datos