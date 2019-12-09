import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UsuarioService } from '../../servicio/usuario.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public identidad;
  public url: String;
  constructor(
    private usuarioService : UsuarioService,
    private _router: Router,
    

  ) { 
    this.url = usuarioService.url;
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
