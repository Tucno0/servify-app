import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoaderComponent } from '@components/loader/loader.component';
import { AuthService } from '@services/auth.service';
import { RequestStatus } from '@type/requestStatus.type';

@Component({
  selector: 'app-forgot-password-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoaderComponent,
  ],
  templateUrl: './forgotPasswordForm.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotPasswordFormComponent {
  // Services
  private readonly formBuilder = inject(FormBuilder);
  private readonly authService = inject(AuthService);

  // Form
  form = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
  });

  // Signals
  status = signal<RequestStatus>('init');
  emailSent = signal(false);
  token = signal('');

  // Methods
  sendLink() {
    if (this.form.valid) {
      this.status.set('loading');

      const { email } = this.form.getRawValue();

      this.authService.recovery(email)
        .subscribe({
          next: ( resp ) => {
            this.status.set('success');
            this.emailSent.set(true);
            console.log(resp);
          },
          error: (error) => {
            this.status.set('failed');
            console.log(error);
          }
        })

    } else {
      this.form.markAllAsTouched();
    }
  }
}
