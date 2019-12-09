import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';

// Nueva Línea
// Importar el módulo Forms para que nuestros formularios sean compatibles con Angular
import { FormsModule } from '@angular/forms';

// Importamos el módulo HttpClientModule para poder tener acceso a las cabeceras
// importado en nuestro servicio
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { MenuComponent } from './components/menu/menu.component';
import { AccountComponent } from './components/account/account.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MostListenedComponent } from './components/most-listened/most-listened.component';
import { SearchComponent } from './components/search/search.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';

// Nueva Línea
// importar el servicio que hemos creado
import { UsuarioService } from './servicio/usuario.service';

const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'main', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'account', component: AccountComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'mostListened', component: MostListenedComponent},
  {path: 'search', component: SearchComponent},
  { path: 'updateUser', component: UpdateUserComponent }
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
    // nuevas líneas -> Imports: maneja los módulos, paquetes y librerías
    FormsModule,
    HttpClientModule
  ],
  providers: [
    // nueva línea -> Providers: provee los servicios de una aplicación Angular
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
