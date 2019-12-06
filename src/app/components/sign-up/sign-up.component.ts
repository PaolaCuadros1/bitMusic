import { Component, OnInit } from '@angular/core';
// importar nuestro modelo Angular
import { Usuario } from '../../modelo/usuario';


//importar nuestro servicio
import { UsuarioService } from '../../servicio/usuario.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  // Declaracion de la variable que esta trayendo los valores de los input en el html
  // [{ngModel}] ="usuarioRegistro"
  // El valor de esta variable sera el modelo que nosotros necesitamos
  // para que coincidan los valores de los inputs con las propiedades de nuestro modelo.

  public usuarioRegistro: Usuario;

  constructor(
    // Declaramos una variable privada cuyo valor será el servicio
    // que necesitemos, por standar y buenas prácticas tendra
    // el mismo nombre del servicio pero en minusculas
    private usuarioService: UsuarioService
  ) {
    // Pasaremos los datos de la variable usuarioRegistro
    // a nuestro modelo para que se puedan guardar
    this.usuarioRegistro = new Usuario('', '', '', '', '', 'ROLE_USER', '');
  }

  ngOnInit() { }

  // Vamos a crear el metodo de registrarusuario(). Este método contendrá,
  // toda la lógica para guardar los dtos del usuario, conectarse al método del
  // servicio, y entre ambos comunicarse a la API y la BD

  registrarUsuario() {

    //En console.log, vamos a imprimir los datos del usuario
    // que están llegando en la varible usuarioRegistro
    console.log(this.usuarioRegistro);

    // Acceder al servicio registro, enviando la variable usuarioRegistro
    // y acceder a un método del Observable que se llama subscribe
    //para que el Observable pueda recoger los datos que se estan enviando
    // y guardarlos en la BD
    // this.usuarioRegistro == usuarioNuevo
    // subscribe necesita un parametro de tipo cualquiercosa . any
    this.usuarioService.registro(this.usuarioRegistro).subscribe(
      (reponse: any) => {
        let usuario = reponse.usuario;// acá están todos los datos del usuario
        this.usuarioRegistro = usuario; //_id / Nombre / apellido / correo..etc

        // Validar a partir de l existencia del _id si se ha registrado o no
        // un usuario Nuevo, es decir, si dentro de la respuesta (response.usuario)
        //ya existe un _id nuevo entondes se nos ha indicado que el uasuario
        // se ha registrado correctamente
        if (!this.usuarioRegistro._id) {
          alert("Error al registrarse");
        } else {
          alert(`Registro exitoso!!, Inicia Sesion con ${this.usuarioRegistro.correo}`);

          //indicar que limpie o deje vacio el modelo
          this.usuarioRegistro = new Usuario('', '', '', '', '', 'ROLE_USER', '');
        }
      },
      error => {
        var errorMensaje = <any>error;
        if (errorMensaje != null) {
          console. log(error);
        }
      }

    );

  }// cerramos el método registrarUsuario()

}// Cerramos la clase SignUpComponent
// Y coon esto ya acabamos el registro del usuario :') :') :') :') 
//vamos a probar nuestra aplicion 1)desde consola vamos
// a ejecutar npm start o ng serve o ng serve --open
//tengamos en cuenta que debemos estar paradas en la consola
//en la carpeta bitMusic para abrir nuestro Front
//2)
//Vamos a abrir nuestra BD MONGO en una nueva consola
//Ejecutamos mongod para levantar el servidor de Mongo
// y en otra consola ejecutamos mongo para levantar
// el cliente de Mongo
// 3)
// vamos a ejecutar npm start ubicadas en la carpeta back
// para levantar el srvidor de nuestra API
// Esto en una nueva consola
// total de consolas -> 4