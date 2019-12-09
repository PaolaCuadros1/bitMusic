import { Component, OnInit } from '@angular/core';
// NUEVA LÍNEA
import { UsuarioService } from '../../servicio/usuario.service';



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

  ) { 
    this.url = usuarioService.url
  }

  ngOnInit() {
    this.identidad = this.usuarioService.obtenerNombreUsuario();

  }

}

