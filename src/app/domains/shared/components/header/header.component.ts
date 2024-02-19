import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';

import { routes } from 'app/app.routes';
import { AuthService } from '../../services/auth.service';
import { AccountOverlayComponent } from '@components/accountOverlay/accountOverlay.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    OverlayModule,
    RouterModule,
    AccountOverlayComponent
  ],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  // services
  private readonly authService = inject(AuthService);

  // properties
  public routes: Route[] = routes[0].children!.filter((route) => route.data);
  public menuActive: boolean = false;
  public overlayAvatarActive: boolean = false;

  // signals
  public user = computed(() => this.authService.currentUser());

  // Methods
  handleCloseOverlay(event: boolean) {
    this.overlayAvatarActive = event;
  }
}
