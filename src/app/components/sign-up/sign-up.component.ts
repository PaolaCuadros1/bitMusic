// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-sign-up',
//   templateUrl: './sign-up.component.html',
//   styleUrls: ['./sign-up.component.css']
// })
// export class SignUpComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }




import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelo/usuario';
import { UsuarioService } from '../../servicio/usuario.service';

import { Router, ActivatedRoute, Params } from '@angular/router'; // wait!!
import swal from 'sweetalert';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  // public usuario: Usuario;
  public usuarioRegistro: Usuario;
  // registroCorrecto;

  constructor(
    private usuarioService : UsuarioService,
    private _router: Router // wait!!!
  ){
    // this.usuario = new Usuario('', '', '', '', '', 'ROLE_USER', '');
    this.usuarioRegistro = new Usuario('', '', '', '', '', 'ROLE_USER', '');
  }

  ngOnInit() {
  }

 /*  registrar(){
    alert("nombre: "+this.usuario.nombre
      +" edad: "+this.usuario.edad)
  } */


  registrarUsuario(){
    this.usuarioService.registro(this.usuarioRegistro).subscribe(
      (response:any) => {
        let usuario = response.usuario;
        this.usuarioRegistro = usuario;

        if(!this.usuarioRegistro._id){
          alert("Error al registrarse");
          // this.registroCorrecto = "El registro es correcto te puedes loguear con el email "+this.usuario.correo;

        }else{
          //alert(`Registro exitoso!!, ingrese con ${this.usuarioRegistro.correo}`);
          swal("Registro exitoso!!", `Por favor, ingresa con ${this.usuarioRegistro.correo}`, "success");
          // this.registroCorrecto = "no se ha realizado el registro del usuario, consulte con soporte ";

          this.usuarioRegistro = new Usuario('', '', '', '', '', 'ROLE_USER', '');  
          this._router.navigate(['/login']) // wait!!
        }
      },
      error => {
        var errorMensaje = <any>error;

        if(errorMensaje != null){
          console.log(error);
        }
      }
    );
  }

}

