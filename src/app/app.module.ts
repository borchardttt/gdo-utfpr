import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { WeatherComponent } from './components/weather/weather.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { CriarEntidadeComponent } from './components/criar-entidade/criar-entidade.component';
import { MovimentarOrcamentoComponent } from './components/movimentar-orcamento/movimentar-orcamento.component';
import { LoginBoxComponent } from './components/login-box/login-box.component';
@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    WeatherComponent,
    DeleteUserComponent,
    UsersListComponent,
    CriarEntidadeComponent,
    MovimentarOrcamentoComponent,
    LoginBoxComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
