import { OverlayModule } from '@angular/cdk/overlay';
import { DialogModule, Dialog } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { Provider, Service } from '@models/index';
import { AuthService, ServicesService, ProvidersService } from '@services/index';
import { switchMap } from 'rxjs';
import { EditServiceModalComponent } from '@dashboard/components/editServiceModal/editServiceModal.component';

@Component({
  selector: 'app-provider-mode',
  standalone: true,
  imports: [
    CommonModule,
    OverlayModule,
    DialogModule,
    EditServiceModalComponent,
  ],
  templateUrl: './providerMode.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProviderModeComponent implements OnInit{

  // services
  private authService = inject(AuthService);
  private servicesService = inject(ServicesService);
  private providersService = inject(ProvidersService);
  private dialog = inject(Dialog);

  // properties
  isOpenOverlayFilter = false;

  // signals
  public user = computed(() => this.authService.currentUser());
  public provider = signal<Provider | null>(null);
  public services = signal<Service[]>([]);

  ngOnInit(): void {
    this.getServices();
  }

  // Methods

  getServices() {
    return this.providersService.getProviderByUserId(this.user()!.id)
      .pipe(
        switchMap(provider => {
          this.provider.set(provider);
          return this.servicesService.getServicesByProviderId(this.provider()!.id)
        })
      )
      .subscribe({
        next: services => this.services.set(services),
        error: error => console.error(error)
      })
  }

  openEditServiceDialog(service: Service | null) {
    this.dialog.open(EditServiceModalComponent, {
      width: '600px',
      data: service,
    });
  }

}
