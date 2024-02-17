import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderComponent } from '@components/loader/loader.component';
import { AuthService } from '@services/auth.service';
import { RequestStatus } from '@type/requestStatus.type';
import { CustomValidators } from '@utils/validators';

@Component({
  selector: 'app-change-password-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoaderComponent,
  ],
  templateUrl: './changePasswordForm.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangePasswordFormComponent {
  // Signals
  status = signal<RequestStatus>('init');
  token = signal('');

  // Services
  private readonly authService = inject(AuthService);
  private readonly formBuilder = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  // Form
  form = this.formBuilder.nonNullable.group(
    {
      newPassword: ['', [Validators.minLength(6), Validators.required]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validators: [
        CustomValidators.MatchValidator('newPassword', 'confirmPassword'),
      ],
    }
  );

  constructor() {
    this.route.queryParamMap.subscribe((params) => {
      const token = params.get('token');

      if (token) {
        this.token.set(token);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  // Methods
  recovery() {
    if (this.form.valid) {
      this.status.set('loading');
      const { newPassword } = this.form.getRawValue();

      console.log({ token: this.token(), newPassword });

      this.authService.changePassword(this.token(), newPassword)
        .subscribe({
          next: (resp) => {
            this.status.set('success');
            console.log(resp);

            setTimeout(() => {
              this.router.navigate(['/auth/login']);
            }, 5000);

            // this.router.navigate(['/auth/login']);
          },
          error: (error) => {
            this.status.set('failed');
            console.log(error);
          },
        });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
