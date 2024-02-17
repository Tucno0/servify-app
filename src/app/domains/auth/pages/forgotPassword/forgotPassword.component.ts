import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ForgotPasswordFormComponent } from '@auth/components/forgotPasswordForm/forgotPasswordForm.component';
import { HeaderComponent } from '@auth/components/header/header.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    HeaderComponent,
    ForgotPasswordFormComponent,
  ],
  templateUrl: './forgotPassword.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ForgotPasswordComponent { }
