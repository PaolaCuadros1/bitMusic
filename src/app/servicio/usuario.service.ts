
//Este archivo contendra la conexion con nuestro api y cada ruta 
// y a su vez  traera los datos que existan  en nuestra BD
//Esta es la forma en la  que angular trabaja con datos, ya sean quemados o dinamicos

//Importar librerias  o modulos  internos de angular
// Nos va a permitir inyectar el servicio en todo nuestra aplicacion de Agular
import { Injectable } from '@angular/core'; //


//Nos va a permitir enviar o hacer  peticiones  a nuestra api
 import { HttpClient, HttpHeaders } from '@angular/common/http';

 //Map-> permite mapear un objeto ¿que?, va a analizar un JSON o un objeto
 //y nos va a permitir traer cada propiedad  de ese JSON u objeto.
import { map } from 'rxjs/operators'; // rxjs es un paquete de angular  que contiene operadores

// Dentro de angular existe un elemento llamado observable que 
//recoge las respuestas que nos envia un servidor.

import { Observable } from 'rxjs';


// ng g s servicio/nombreServicio
//ng generate service servicio/nombreServicio
@Injectable()
export class UsuarioService{
    // va a contener los metodo de registrar usuario, login, actualizar usuario,
    // obetener nombre del usuario.

    // crear un variable que tendra la ruta de la url  de nuestra api para la conexion
    url = "http://localhost:4000/api/";

    //Vamos a crear un constructor que nos permita 
    //inicializar los metodos Post, get , put , delete
    //Declaramos una variable privada  qu guardara el objeto HttpClient 
    //que hemos importado anteriomenete. Esto para poder  tener accesso a los metodos
    //post, put, get y delete


    constructor(
        private _http: HttpClient
        ){}



// Creamos nuestro metodo de registro de usuario
    registro(usuarioNuevo){
        // vamos a guardar los parametros ue va a enviar el usuario
        // Convertimos los datos del usuario  en un JSON  con JSON.stringify

        let params = JSON.stringify(usuarioNuevo);

        //Indicar por las cabeceras HTTP  el tipo de contenido
        // del dato que se esta enviando

        let options = {
            headers: new HttpHeaders( { 'Content-type': 'application/json'} )
        };

        // El metodo debe devolver la conexion en la ruta de la api
        //para  ejecutar  una función especifica ej:  localhost:4000/api/registro
        return this._http.post(
            this.url + "registro",
            params,
            options
        ).pipe(map(res => res));


    }


}




