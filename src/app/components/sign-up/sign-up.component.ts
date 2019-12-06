import { Component, OnInit } from '@angular/core';
//Importar nuestro modelo Angular
import{ Usuario } from '../../modelo/usuario';

//Importar nuestro servicio
import {UsuarioService} from '../../servicio/usuario.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  //declaracion de la variable que esta 
  //trayendo los valores de los inputs en el html [{ngModel}] ="usuarioRegistro"
  //El valor de esta variable sera el modelo que nosotros necesitamos
  //para que conicidan los valores de los inputs con las propiedades de nuestro modelo.
public usuarioRegistro: Usuario;

  constructor(
    //Declaramos una variable privada cuyo valor sera el servicio que necesitemos
    //por standar y buenas practicas tendra el mismo nombre del servicio pero en minuscula

    private usuarioService : UsuarioService
  ) { 
    //Pasaremos los datos de la variable usuarioRegistro a  nuestro modelo
    //para que se puedan guardar
    this.usuarioRegistro = new Usuario('', '', '', '', '', 'ROLE_USER', '');
  }

  ngOnInit() {
  }

  //Vamos a crear el metodo de registrarUsuario(). Este metodo contendra toda la logica para guardar 
  //los datos  del usuario,  conectarse al metodo del servicio y entre ambos comunicarse 
  //a la API y la BD

registrarUsuario(){
  // En un console.log vamos a imprimir los datos del usuario
  //que estan legando  en la variable usuarioRegistro

  console.log(this.usuarioRegistro);

  //Vamos a acceder al servicio Registro, enviando la varibale usuarioRegistro y 
  //accederemos a un metodo del observable que se llama subcribe
  //para que el observable pueda recoger los datos que se estan enviando y guardarlos en la BD
  //this.usuarioRegistro es igual a usuario nuevo
  //subscribe necesita un parametro  de tipo cualquier cosa: any


  this.usuarioService.registro(this.usuarioRegistro).subscribe(
    (response:any)=>{
      
      let usuario = response.usuario; //aca estan todos los datos del usuario
      this.usuarioRegistro = usuario; //_id/nombre/apellido/correo/contraseña etc

      //validar a partir de la existencia del id si se ha registrado o no un usuario nuevo
      //, es decir ,  si dentro de la  respuesta (response.usuario)
      //ya existe un id nuevo entonces se nos ha indicado que el usuario se ha registrado correctamente.
      if(!this.usuarioRegistro._id){
        alert("Error al registrarse")

      }else{
        alert (`Registro existoso!!, Inicia sesión con ${this.usuarioRegistro.correo}`);
        //Indicar  que limpie o deje vacio  el modelo
        this.usuarioRegistro = new Usuario('', '', '', '', '', 'ROLE_USER', '');
      }
    },
    error =>{
      var errorMensaje = <any>error;

      if(errorMensaje != null){
        console.log(error);
      }
    }

  );
} //Cerramos el metodo registroUsuario()

}//Cerramos la clase SignUpComponent 
// y con esto ya acabamos el resgistro  de usuario 
//1)
//vamos a probar nuestra aplicacion
// vamos a ejecutar npm start o ng serve --open
//tengamos en cuenta  que debemos estar parados  en la consola
//en la carpeta bitMusic para abrir nuestro front
//2)
//vamos a abrir nuestra base de datos MONGO, en una consola 
//ejecutamos  mongod para levantar el servidor de mongo
//y en otra consola ejecutamos mongo para levantar el cliente de mongo
//3)
//Vamos a ejectuar npm start ubicados en la carpeta back para 
//levantar  el servidor de nuestra API
//Esto con una nueva consola
//total de consolar =>4
