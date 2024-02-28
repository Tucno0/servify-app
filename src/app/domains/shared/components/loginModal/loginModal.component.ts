import { DialogRef } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginFormComponent } from '@auth/components/loginForm/loginForm.component';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,

    LoginFormComponent,
  ],
  templateUrl: './loginModal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginModalComponent {

  private readonly dialogRef = inject(DialogRef);

  close() {
    this.dialogRef.close();
  }
}
