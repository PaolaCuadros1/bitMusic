import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { MenuComponent } from './components/menu/menu.component';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { LoginComponent } from './components/login/login.component';
import { MostListenedComponent } from './components/most-listened/most-listened.component';
import { SearchComponent } from './components/search/search.component';
const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'main', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'account', component: AccountComponent},
  {path: 'mostListened', component: MostListenedComponent},
  {path: 'search', component: SearchComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenuComponent,
    AccountComponent,
    LoginComponent,
    MostListenedComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
