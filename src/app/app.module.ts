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
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { EntidadesListComponent } from './components/entidades-list/entidades-list.component';
import { SystemSidebarComponent } from './layouts/system-sidebar/system-sidebar.component';
import { SystemNavbarComponent } from './layouts/system-navbar/system-navbar.component';
import { DashboardMovimentacoesComponent } from './components/dashboard-movimentacoes/dashboard-movimentacoes.component';
import { EditarEntidadeComponent } from './components/editar-entidade/editar-entidade.component';
@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    WeatherComponent,
    DeleteUserComponent,
    UsersListComponent,
    CriarEntidadeComponent,
    MovimentarOrcamentoComponent,
    LoginBoxComponent,
    HomeComponent,
    EntidadesListComponent,
    SystemSidebarComponent,
    SystemNavbarComponent,
    DashboardMovimentacoesComponent,
    EditarEntidadeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
