import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChangePasswordFormComponent } from '@auth/components/changePasswordForm/changePasswordForm.component';
import { HeaderComponent } from '@auth/components/header/header.component';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ChangePasswordFormComponent,
  ],
  templateUrl: './changePassword.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ChangePasswordComponent { }
