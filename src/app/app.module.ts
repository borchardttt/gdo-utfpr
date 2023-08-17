import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SystemNavbarComponent } from './system-navbar/system-navbar.component';
import { SystemSidebarComponent } from './system-sidebar/system-sidebar.component';
import { AnaliseEntidadeComponent } from './analise-entidade/analise-entidade.component';
import { MovimentacoesRecentesComponent } from './movimentacoes-recentes/movimentacoes-recentes.component';
import { ListaLembretesComponent } from './lista-lembretes/lista-lembretes.component';
import { LoginBoxComponent } from './login-box/login-box.component';
import { ListaMovimentacoesComponent } from './lista-movimentacoes/lista-movimentacoes.component';
import { ListaEntidadesComponent } from './lista-entidades/lista-entidades.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
@NgModule({
  declarations: [
    AppComponent,
    SystemNavbarComponent,
    SystemSidebarComponent,
    AnaliseEntidadeComponent,
    MovimentacoesRecentesComponent,
    ListaLembretesComponent,
    LoginBoxComponent,
    ListaMovimentacoesComponent,
    ListaEntidadesComponent,
    ListaUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
