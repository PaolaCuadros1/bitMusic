import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UsuarioService } from '../../servicio/usuario.service';
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

  


}
