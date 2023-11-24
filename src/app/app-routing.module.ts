import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { CriarEntidadeComponent } from './components/criar-entidade/criar-entidade.component';
import { MovimentarOrcamentoComponent } from './components/movimentar-orcamento/movimentar-orcamento.component';
import { LoginBoxComponent } from './components/login-box/login-box.component';
import { HomeComponent } from './components/home/home.component';
import { EntidadesListComponent } from './components/entidades-list/entidades-list.component';
import { EditarEntidadeComponent } from './components/editar-entidade/editar-entidade.component';
const routes: Routes = [
  { path: 'criar-user', component: UserFormComponent },
  { path: 'excluir-usuario', component: DeleteUserComponent },
  { path: 'users-list', component: UsersListComponent },
  { path: 'criar-entidade', component: CriarEntidadeComponent},
  { path: 'movimentar-orcamento', component: MovimentarOrcamentoComponent},
  { path: 'login', component: LoginBoxComponent},
  { path: 'home', component: HomeComponent},
  { path: 'entidades-list', component: EntidadesListComponent},
  { path: 'editar-entidades', component: EditarEntidadeComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
