import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

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
    private route: Router
  ) { 
    this.login = new Usuario('', '', '', '', '', 'ROLE_USER', '')
  }

  ngOnInit() {
  }

  loginUsuario(){
    //Accedemos al inicio de iniciarSesion
    this.userService.iniciarSesion( this.login ).subscribe(
      (response: any) =>{
        let usuario = response.usuario;
        this.login = usuario;
        if (this.login){
          let usuarioLogeado = new Usuario(
            this.login._id,
            this.login.nombre,
            this.login.apellido,
            this.login.correo,
            this.login.contrasena,
            this.login.rol,
            this.login.imagen
          )
          localStorage.setItem('sesion', JSON.stringify(usuarioLogeado));
          this.identidad = this.userService.obtenerNombreUsuario();
          
          console.log( this.identidad )
          alert(`Bienvenid@ ${this.identidad.nombre} ${this.identidad.apellido} `);
          this.route.navigate(['/account']);
        }else{
          alert("Error al iniciar sesión");
        }
      }, error => {
        if (error != null){
          console.log(error);
        }
      }
      
    )
  }

}
