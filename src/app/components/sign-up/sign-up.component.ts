import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario'; //Llamamos el modelo de usuario.
import { UserService } from '../../services/user.service'; //Llamamos el servicio de usuario.
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  //Declaración de la variable que esta trayendo los valores de los imputs en el html [(ngModel)]="usuarioRegistro"
  public usuarioRegistro: Usuario; //La variable será del tipo del modelo, en este caso Usuario
  constructor(
    private userService: UserService // La variable que tendrá el valor del servicio que se necesite.
  ) {
    //Se pasan los datos al modelo para que se puedan registrar.
    this.usuarioRegistro = new Usuario('', '', '', '', '', 'ROLE_USER', '');
  }

  ngOnInit() {
  }

  //Método para registrar usuario en el cual tendrá toda la logíca para guardar ls datos del usuario.

  registrarUsuario() {
    console.log(this.usuarioRegistro);
    //Se accede al servicio enviando la ariable usuarioRegistro, para llamarlo utilizaremos un método del Observable llamado subceibw para que se pueda recoger los datos que se envían y que se guardarán en la DB.
    this.userService.registry(this.usuarioRegistro).subscribe(
      //Parametro de tipo cualquiero cosa => response:any -> El any significa cualquier cosa.
      (respnse: any) => {
        let usuario = respnse.usuario; //Acá están todos los datos del usuario
        this.usuarioRegistro = usuario

        //Validamos dependiendo del _id, si se ha registrado un usuario nuevo, si el _id es nuevo, quiero decir que el registro fue exitoso.
        if (!this.usuarioRegistro._id) {
          alert("Error al registrarse.");
        } else {
          alert(`Registro exitoso!!, Inicia sesión ${this.usuarioRegistro.correo}`);
          //Limpiar el modelo, ya que se guardó exitosamente el usuario
          this.usuarioRegistro = new Usuario('', '', '', '', '', 'ROLE_USER', '');
        }
      }, error => {
        var errorMensaje = <any>error; //Devuelve cualquier tipo de error, es propio de typeScript.
        if (errorMensaje != null){
          console.log(error);
        }
      }
    );
  }

}
