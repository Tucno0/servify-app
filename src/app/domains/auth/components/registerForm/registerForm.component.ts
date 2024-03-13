import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderComponent } from '@components/loader/loader.component';
import { AuthService } from '@services/auth.service';
import { RequestStatus } from '@type/index';
import { CustomValidators } from '@utils/validators';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoaderComponent,
  ],
  templateUrl: './registerForm.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormComponent {
  @Input() provider: boolean | undefined = false;

  // Services
  private readonly authService = inject(AuthService);
  private readonly formBuilder = inject(FormBuilder);
  private readonly router = inject(Router);

  // Form
  formUser = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
  })

  form = this.formBuilder.nonNullable.group(
    {
      email: ['', [Validators.email, Validators.required]],
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [ Validators.required ]],
      agreeTerms: [false, [Validators.requiredTrue]],
      notifications: [false],
    },
    {
      validators: [ CustomValidators.MatchValidator('password', 'confirmPassword')]
    }
  );

  // Signals
  statusUser = signal<RequestStatus>('init');
  status = signal<RequestStatus>('init');
  showRegister = signal(false);


  // Methods
  register() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status.set('loading');
    const { email, name, lastName, password } = this.form.getRawValue();

    const role: string = this.provider ? 'provider' : 'client';

    this.authService.register(email, name, lastName, password, role)
      .subscribe({
        next: () => {
          this.status.set('success');
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          this.status.set('failed');
          console.log(err);
        }
      });
  }

  validateUser() {
    if (this.formUser.invalid) {
      this.formUser.markAllAsTouched();
      return;
    }

    this.statusUser.set('loading');
    const { email } = this.formUser.getRawValue();
    console.log({ email });

    this.authService.isEmailAvalible(email)
      .subscribe({
        next: (resp) => {
          this.statusUser.set('success');

          if (resp.isAvailable) {
            this.showRegister.set(true);
            this.form.controls.email.setValue(email);

          } else {
            this.router.navigate(['/auth/login'], { queryParams: { email } });
          }
        },
        error: (error) => {
          this.statusUser.set('failed');
          console.log({ error });
        }
      });
  }
}
