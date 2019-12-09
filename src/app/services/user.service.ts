//Contiene la conexión con la api y cada ruta, iguamente traerá todos los datos que existan en la DB.


//Importar librerías internas de Angular:
import { Injectable } from '@angular/core'; //Inyectar el servicio a toda la aplicación de angular
import { HttpClient, HttpHeaders } from '@angular/common/http'; //Enviar o hacer peticiones a la api.

import { map } from 'rxjs/operators'; //rxjs -> Paquete de Angular que contiene operadores y nos va a permitir analizar un JSON.

import { Observable } from 'rxjs'; //Recoge las respuestas que envía un servidor.

@Injectable()

export class UserService {
  url = 'http://localhost:4000/api/';
  public identidad;
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

  //Método para iniciar sesión
  iniciarSesion(usuarioLogueado) {
    let params = JSON.stringify(usuarioLogueado);
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this._http.post(
      this.url + 'loginUsuario',
      params,
      options
    ).pipe(map(res => res));//Estamos creando un canal de información. Esto nos va a devolver una respuesta cuando la aplicación se conecte a la ruta.
  }

  //Crear método para obtener los datos del usuario cuando se logea.
  obtenerNombreUsuario() {
    //El .parse convierte un dato a otro dato, en este caso de texto a JSON.
    let identidad = JSON.parse(localStorage.getItem("sesion")); //Se recolectar los datos de inicio de sesión del usuario, a partir del localStorage.

    //Validamos si localStorage esta vacío, osea si el usuario si inició sesión.
    if (identidad != 'undefined') {
      this.identidad = identidad; //Si existen datos, la variable va a tener el contenido de lo que se guardó en el localStorage.
    } else {
      this.identidad = null;
    }

    return this.identidad;

  }

}