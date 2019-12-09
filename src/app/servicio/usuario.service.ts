import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// cliente http hacer peticiones al backend
import { map } from 'rxjs/operators';
//se importa map, libreria para mapear objetos
import { Observable } from 'rxjs'
//recojer respuestas de cuando hacemos una peticion ajax al servidor

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class UsuarioService {
  url = "http://localhost:4000/api/";
  public identidad;


  constructor(
    private _http: HttpClient
  ) {
   }

  registro(usuarioNuevo) {
    let params = JSON.stringify(usuarioNuevo);
    let options = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json' })
    };
    return this._http.post(
      this.url + "registro",
      params,
      options
    ).pipe(map(res => res));
  }

  iniciarSesion(usuarioLogueado) {
    let params = JSON.stringify(usuarioLogueado);
    let options = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json' })
    };
    return this._http.post(
      this.url + "loginUsuario",
      params,
      options
    ).pipe(map(res => res));
  }

  obtenerNombreUsuario(){
    let identidad = JSON.parse(localStorage.getItem('sesion'));
    if(identidad != "undefined"){
        this.identidad = identidad;
    }else{
        this.identidad = null;
    }

    return this.identidad;
}

  actualizarUsuario(id, usuarioActualizar) {
    let params = JSON.stringify(usuarioActualizar);
    let options = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json'
        })
    };
    return this._http.put(
      this.url + 'actualizar-usuario/' + id,
      params,
      options
    ).pipe(map(res => res));

  }

  cargarImagenUsuario(file: File, id) {
    var formData = new FormData();
    formData.append('imagen', file);
    return this._http.post(
      this.url + "subir-imagen-usuario/" + id,
      formData
    ).pipe(map(res => res));
  }

  usuarioLogueado(){
    let identidad = JSON.parse(localStorage.getItem('sesion'));
    let loged = false;
    if (identidad !== null){
      loged = true;
    }
    return loged;
  }

}
