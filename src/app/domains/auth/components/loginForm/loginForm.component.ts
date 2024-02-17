import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { LoaderComponent } from '@components/loader/loader.component';
import { AuthService } from '@services/index';
import { RequestStatus } from '@type/requestStatus.type';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,

    LoaderComponent,
  ],
  templateUrl: './loginForm.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {

  // Services
  private readonly authService = inject(AuthService);
  private readonly formBuilder = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  // form
  public form = this.formBuilder.group({
    email: ['mivayi5952@oprevolt.com', [ Validators.email, Validators.required]],
    password: ['123456', [ Validators.required, Validators.minLength(6)]],
  });

  // Signals
  status = signal<RequestStatus>('init');

  constructor() {
    // Obtenemos el email de la query params
    this.route.queryParamMap
      .subscribe((params) => {
        const email = params.get('email');

        // Si hay un email en la query params, lo seteamos en el campo email del formulario
        if (email) {
          this.form.get('email')?.setValue(email);
        }
      });
  }

  // Methods
  login() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status.set('loading');

    const email = this.form.get('email')?.value || '';
    const password = this.form.get('password')?.value || '';

    this.authService.login(email, password)
      .subscribe({
        next: () => {
          this.status.set('success');
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          this.status.set('failed');
          console.log(this.status());
          console.log(error);
        },
      });

    // console.log(this.status());

  }
}
