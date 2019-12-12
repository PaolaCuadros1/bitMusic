import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { UserService } from '../../services/user.service';

import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public identidad;
public login: Usuario;



  constructor(
    private userService: UserService,
    private _router : Router

  ) {
    this.login = new Usuario('', '', '', '', '', 'ROLE_USER', '');
   }

  ngOnInit() {
  }
//Crear la logica del metodo login usuario que va  consumir el servicio iniciar sesion
loginUsuario(){
  //Acceder al servicio iniciar sesion 
  this.userService.iniciarSesion(this.login).subscribe(
    (response: any) =>{
      let usuario = response.usuario;
      this.login = usuario;
      console.log(this.login)
      if(this.login){
        let usuarioLogueado = new Usuario(
          this.login._id,
        this.login.nombre,
        this.login.apellido,
        this.login.correo,
        this.login.contrasena,
        this.login.rol,
        this.login.imagen

        )
        // creamos el objeto sesion en localStorage
        //Al crear un local storage.setItem() el no va  pedir dos parametros,  
        //el primero el nombre del objeto, el segundo el valor de dicho objeto
        localStorage.setItem("sesion", JSON.stringify(usuarioLogueado));
        //consumir el servicio de obtenerNombreUsuario()
        this.identidad = this.userService.obtenerNombreUsuario();
        alert(`hola ${this.identidad.nombre}!! Bienvenid@`);
        //ctrl + alt + } comillas invertidas
        console.log(localStorage.getItem("sesion"));
        //crearemos un manejador de ruta  que redirecciones  al usuario a la cuenta 
        // un vez este haya iniciado sesion correctamente
        this._router.navigate(['/account']);


      }else{
        alert('Usuario no identificado');
      }


    }, error =>{
      if(error != null){
        console.log(error);

      }
    }
  )

}
}
