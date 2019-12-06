import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Nueva Linea
//Importar el modulo Forms para que nuestros formularios  sean copatibles con 
// angular
import { FormsModule } from '@angular/forms';

// Importar el modulo HttpClientModule para poder tener acceso a la cabeceras
//  que hemos inportado en nuestros servicio

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

//nueva Linea
//Importar el servicio que hemos creado

import { UsuarioService } from './servicio/usuario.service';
import { UpdateUserComponent } from './components/update-user/update-user.component';

const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'main', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'account', component: AccountComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'mostListened', component: MostListenedComponent},
  {path: 'search', component: SearchComponent},
  {path: 'updateUser', component: UpdateUserComponent}
];

@NgModule({
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
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    //Nuevas  lineas-> imports maneja los modulos, paquetes y librerias
    FormsModule,
    HttpClientModule
  ],
  providers: [
    //nueva Linea-> provee los servicios de un aplicacion Angular.
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
