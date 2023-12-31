import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css'],
})

export class DeleteUserComponent {
  userId: number;
  deleted: boolean = false;


  constructor(private userService: UserService) {
    this.userId = 0;
  }

  deleteUser(): void {
    this.userService.deleteUser(this.userId).subscribe(
      () => {
        console.log(`Usuário com ID ${this.userId} excluído com sucesso.`);
        this.deleted = true;
      },
      (error) => {
        console.error(`Erro ao excluir usuário: ${error}`);
        this.deleted = false;
      }
    );
  }
}
