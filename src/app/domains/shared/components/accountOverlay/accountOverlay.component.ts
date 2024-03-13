import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@models/user.model';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-account-overlay',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './accountOverlay.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountOverlayComponent {
  @Input({ required: true }) public user = computed<User | null>(() => null);
  @Output() public closeOverlay = new EventEmitter<boolean>();

  // services
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  public completeName = computed(() => {
    const user = this.user();
    return user ? `${user.name} ${user.lastName}` : '';
  });

  public getImageError = signal(false);

  // Methods
  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }

  close() {
    this.closeOverlay.emit(false);
  }

  handleLoad() {
    // console.log('La imagen se cargó correctamente.');
  }

  handleError() {
    // console.log('Ocurrió un error al cargar la imagen.');
    this.getImageError.set(true);
  }
}
