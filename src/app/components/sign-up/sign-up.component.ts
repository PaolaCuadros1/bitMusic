import { Component, OnInit } from '@angular/core';
//Importar nuestro modelo Angular
import { UserService } from '../../services/user.service';
import { Usuario } from '../../model/usuario';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  //Declaración de la variable que está trayendo los valores de los inputs en el html [(ngModel)] = "usuarioRegistro"
  //El valor de esta variable será el modelo que nosotros necesitemos para que coincidan los valores de los 
  //inputs con las propiedades de nuestro modelo

  public usuarioRegistro: Usuario;

  constructor(
    //Declaramos una variable privada cuyo valor será el servicio que necesitemos, por standar y buenas prácticas
    //el mismo nombre del servicio pero en minúsculas
    private usuarioService : UserService
  ) { 
    this.usuarioRegistro = new Usuario('', '', '', '', '', 'ROLE_USER', '');
   }

  ngOnInit() {
  }
  //Vamos a crear el método de registrarUsuario(). Este método contendrá la lógica para guardar los datos del
  //usuario, conectarse al método del servicio, y entre ambos comunicarse a la API y la DB

  registrarUsuario(){
    //En un console.log, vamos a imprimir los datos del usuario que están llegando en la variable usuarioRegistro
    console.log(this.usuarioRegistro);

    //Acceder al servicio registro, enaviando la variable usuarioRegistro y accederemos a un método del 
    //Observable que se llama "subscribe" para que el Observable pueda recoger los datos que se están enviando y
    //guardarlos en la base de datos.
    //this.usuarioRegistro == usuarioNuevo
    this.usuarioService.registry(this.usuarioRegistro).subscribe(
      //"subscribe" necesita un parámetro de tipo cualquiercosa : any
        (response:any) => {
          let usuario = response.usuario; //Acá están todos los datos del usuario 
          this.usuarioRegistro = usuario; //_id / nombre / apellido / correo... etc

          //Vamos ahora a validar de la existencia del _id si se ha registrado o no un usuario nuevo. es decir,
          //si dentro de la respuesta (response.usuario) ya existe un _id nuevo entonces se nos ha indicado 
          //que el usuario se ha registrado completamente.
          if(!this.usuarioRegistro._id){
            alert("Error al registrarse");
          }else{
            alert(`Registro Exitoso!!, Inicio Sesión con ${this.usuarioRegistro.correo}`)

            //Indicar que limpie o deje vacío el modelo
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

  }//Cerramos el método registrarUsuario()
}//Cerramos la clase SignUpComponent
//Y con esto ya acabamos el registro de usuario.
