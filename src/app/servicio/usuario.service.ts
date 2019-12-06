//Este archivo contendrá la conexión con nuestra api y cada ruta y asu vez traerá los datos que existan en nuestra BD
//Esta es al forma en la que Angular trabaja con datos, ya sean quemados ó dinamicos.
//Pasos para realizarlo:

//1) Importar librerías o módulos internos de Angular
//Nos va a permitir inyectar el servicio en toda nuestra aplicación de Angular, osea llamar a los datos

import {Injectable} from '@angular/core'  

//2) Nos va a permitir enviar o hacer peticiones a nuestra api}

import {HttpClient, HttpHeaders} from '@angular/common/http';

//3)Map -> permite mapear un objeto ¿QUE?, va analizar un JASON o un objeto
//y nos va a permitir traer cada prioridad de ese JSON u objeto

import { map } from 'rxjs/operators'; //rxjs es un paquete de Angular que contiene operadores


//4) Dentro de Angular existe un elemento llamado Observable, que recoge las respuestas
//que nos envía un servidor

import {Observable} from 'rxjs';

//Creacion de servicios
//Desde la consola tambien podemos crear un servicio usando el comando ng g s servicio/nombre del servicio ó
//ng generate service servicio/nombreServicio
//Este solo te traeria : import {Injectable} from '@angular/core' y lo injectable

//Aqui estamos creando el servicio de manera manual acorde a nuestras necesidades
@Injectable()
//Esta clase de UsuarioService que estamos creando va acontener los métodos de registrar usuario, login, actualizar usuario,
//obtener el nombre del usuario
export class UsuarioService{

//crear una variable que tendra la ruta URL de nuestra api  para la conexión

url = "http://localhost:4000/api/";

//vamos a crear un constructor que nos permite inicializar
//los métodos post, get, put y delete
//Declaramos una variable Privada que guardará el objeto HttpClient
//que hemos importado anteriormente. Esto para poder tener acceso a los métodos
//post, put, get y delete
constructor(
    private _htpp: HttpClient
){}
//Creamos nuestro método de registro de usuario
registro(usuarioNuevo){
// guardar los parametros que va a enviar el usuario
//Convertimos los datos del usuario en un Json con JSON.stringify
let params = JSON.stringify(usuarioNuevo)

//Indicar por las cabeceras HTTP el tipo de contenido del dato que se está enviando
let options = {
    headers: new HttpHeaders({'Content-Type':'applicattion/jason'})//aqui le estamos indicando que los datos que ingrese el usuario se va aguardar en forma de Json y se va a enviar a la BD
};

//este método debe devolver la conexión con la ruta de la api
//para ejecutar una función específica localhost:4000/api/registro
return this._htpp.post(
    this.url + "registro",
    params,
    options
    //pipe es una tuberia de informacion para enviar datos
).pipe(map(res => res));

}
}

