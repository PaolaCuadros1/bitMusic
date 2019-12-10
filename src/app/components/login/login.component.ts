// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }



import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelo/usuario';
import { UsuarioService } from '../../servicio/usuario.service';

import { Router, ActivatedRoute, Params } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public identidad;
  public login: Usuario;

  constructor(
    private usuarioService: UsuarioService,
    private _router: Router
  ) {
    this.login = new Usuario('', '', '', '', '', 'ROLE_USER', '');
  }

  ngOnInit() {
    // document.getElementById('footer').style.position = "fixed";
  }

  // ngOnDestroy() {
  //   document.getElementById('footer').style.position = "relative";
  // }

  loginUsuario() {
    this.usuarioService.iniciarSesion(this.login).subscribe(
      (response: any) => {
        let usuario = response.usuario;
        this.login = usuario;
        if (response.message === 'incorrecta') {
          swal("Contraseña incorrecta", 'Por favor verifica tus datos', "error");
          this._router.navigate(['/']);
        } else if (response.message === 'No registrado') {
          swal("Usuario no existe!", 'Te invitamos a registrate.', "error");
          this._router.navigate(['/signUp']);
        } else {
          if (this.login) {
            let usuarioLogueado = new Usuario(
              this.login._id,
              this.login.nombre,
              this.login.apellido,
              this.login.correo,
              this.login.contrasena,
              this.login.rol,
              this.login.imagen
            )

            localStorage.setItem("sesion", JSON.stringify(usuarioLogueado));
            this.identidad = this.usuarioService.obtenerNombreUsuario();
            // alert('Has iniciado sesión!');
            //alert(`Hola ${this.identidad.nombre}!! Bienvenid@`)
            swal("Bienvenid@!!!", `Un gusto verte de nuevo ${this.identidad.nombre}`, "success");
            this._router.navigate(['/account']);


          } else {
            // this.loginCorrecto = "los datos ingresados son incorrectos  ";
            alert("usuario no identificado");

          }
        }
      }, error => {
        if (error != null) {
          console.log(error)
        }
      }
    )
  }



}

