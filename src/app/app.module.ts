//aqui llega todo lo que importamos

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Nueva línea
// Importar el módulo forms para que nuestros formularios sean compatibles con Angular
import {FormsModule} from '@angular/forms';

//Importamos el módulo HttpClientModule para poder tener acceso a las cabeceras importadas en nuestro servicio
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { MenuComponent } from './components/menu/menu.component';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MostListenedComponent } from './components/most-listened/most-listened.component';
import { SearchComponent } from './components/search/search.component';

// Nueva Linea que vamos agregar para importar nuestros servicos creados de manera manual

import {UsuarioService} from './servicio/usuario.service';
import { UpdateUserComponent } from './components/update-user/update-user.component' // es importante respetar el .service, .component

const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'main', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'account', component: AccountComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'mostListened', component: MostListenedComponent},
  {path: 'search', component: SearchComponent},
  {path: 'updateUser', component: UpdateUserComponent},
];


@NgModule({
  //aqui se hace referencia a todos los componentes
  declarations: [
    AppComponent,
    MainComponent,
    MenuComponent,
    AccountComponent,
    LoginComponent,
    FooterComponent,
    SignUpComponent,
    MostListenedComponent,
    SearchComponent,
    UpdateUserComponent
  ],
  //-> Imports: maneja los modulos, paquetes y librerías
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    //nuevas líneas 
    FormsModule,
    HttpClientModule
  ],

  //Aqui se guardan todos los servicios
  providers: [
    //nueva linea -> Providers : provee los servicios de una aplicacion Angular
    UsuarioService
  ],
  
  bootstrap: [AppComponent]//esto indica quien es componente padre, dentro de este van a estar los demas componentes que creamos y este
  //componente padre los desplega
})
export class AppModule { }
