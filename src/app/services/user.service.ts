//Contiene la conexión con la api y cada ruta, iguamente traerá todos los datos que existan en la DB.


//Importar librerías internas de Angular:
import { Injectable } from '@angular/core'; //Inyectar el servicio a toda la aplicación de angular
import { HttpClient, HttpHeaders } from '@angular/common/http'; //Enviar o hacer peticiones a la api.

import { map } from 'rxjs/operators'; //rxjs -> Paquete de Angular que contiene operadores y nos va a permitir analizar un JSON.

import { Observable } from 'rxjs'; //Recoge las respuestas que envía un servidor.

@Injectable()

export class UserService {
  url = 'http://localhost:4000/api/';
  constructor(
    private _http: HttpClient //Guarda el objeto httmCliente para poder tener acceso a los métodos get, post, put y delete
  ) { }

  //Método para registrar un usuario.
  registry(newUser) {
    let params = JSON.stringify(newUser); //Convierte los datos del usuario en un JSON.
    //Se indica por las cabeceras el tipo de contenido del dato que se va a enviar.
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this._http.post(
      this.url + 'registro',
      params,
      options
    ).pipe(map(res => res));

  }
}