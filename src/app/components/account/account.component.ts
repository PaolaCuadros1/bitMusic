import { Component, OnInit } from '@angular/core';
// NUEVA LÍNEA
import { UsuarioService } from '../../servicio/usuario.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import swal from 'sweetalert';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  public url: String;
  public identidad;

  constructor(
    private usuarioService : UsuarioService,
    private _router: Router,
  ) { 
    this.url = usuarioService.url
  }

  ngOnInit() {
    this.identidad = this.usuarioService.obtenerNombreUsuario();

  }

  cerrarSesion(){
    this.identidad = this.usuarioService.obtenerNombreUsuario();
    
    swal(`vuelve pronto ${this.identidad.nombre}!!`);
    this._router.navigate(['/main']);
    localStorage.removeItem('sesion');
    localStorage.clear();
    this.identidad = null;
  }

}

