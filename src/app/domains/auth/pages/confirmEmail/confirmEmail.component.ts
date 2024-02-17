import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from '@auth/components/header/header.component';
import { AuthService } from '@services/auth.service';
import { RequestStatus } from '@type/requestStatus.type';

@Component({
  selector: 'app-confirm-email',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
  ],
  templateUrl: './confirmEmail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ConfirmEmailComponent {
  // Services
  private readonly authService = inject(AuthService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  // Signals
  status = signal<RequestStatus>('init');
  token = signal('');

  constructor() {
    this.route.queryParamMap.subscribe((params) => {
      const token = params.get('token');

      if (token) {
        this.token.set(token);
        this.validateEmail();

        setTimeout(() => {
          window.close();
        }, 4000);

      } else {
        this.router.navigate(['/auth/login']);
      }
    });
  }

  // Methods
  validateEmail() {
    this.status.set('loading');

    this.authService.validateEmail(this.token())
      .subscribe({
        next: () => {
          this.status.set('success');
        },
        error: (err) => {
          this.status.set('failed');
          console.log(err);
        }
      })
  }

}
