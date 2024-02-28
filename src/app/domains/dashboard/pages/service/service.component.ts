import { CommonModule, PlatformLocation } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, signal, inject, computed } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

import { Dialog, DialogModule } from '@angular/cdk/dialog';

import { ButtonComponent } from '@components/button/button.component';
import { LoginModalComponent } from '@components/loginModal/loginModal.component';
import { ProviderCardComponent } from '@dashboard/components/providerCard/providerCard.component';
import { ServicesService, AuthService, ProvidersService } from '@services/index';
import { Service, Provider } from '@models/index';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [
    CommonModule,
    DialogModule,

    RouterLink,
    ButtonComponent,
    ProviderCardComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './service.component.html',
})
export default class ServiceComponent {
  // Param
  @Input() id?: string;

  private readonly authService = inject(AuthService);
  private readonly servicesService = inject(ServicesService);
  private readonly providersService = inject(ProvidersService);
  private readonly PlatformLocation = inject(PlatformLocation);
  private readonly dialog = inject(Dialog);
  private readonly router = inject(Router);

  public service = signal<Service | null>(null);
  public user = computed(() => this.authService.currentUser());
  public providers = signal<Provider[]>([]);

  constructor() {
    // Desactivar la restauración del desplazamiento
    this.PlatformLocation.onPopState(() => {
      window.scrollTo(0, 0);
    });
  }

  ngOnInit() {
    window.scrollTo(0, 0);

    if (this.id) {
      this.servicesService.getService(this.id)
        .pipe(
          switchMap(service => {
            this.service.set(service);
            return this.providersService.getProvidersByServiceId(service.id);
          })
        )
        .subscribe(providers => {
          this.providers.set(providers);
        });
    }
  }

  openModal() {
    if(this.user()) {
      // this.router.navigate(['/dashboard', 'service', 'create', this.id]);
      return;
    }

    this.dialog.open(LoginModalComponent, {
      width: 'auto',
      height: 'auto',
    });

  }

}
