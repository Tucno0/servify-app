import { OverlayModule } from '@angular/cdk/overlay';
import { DialogModule, Dialog } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { Provider, Service, Order } from '@models/index';
import { AuthService, ServicesService, ProvidersService, OrdersService } from '@services/index';
import { switchMap, tap } from 'rxjs';
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
  private ordersService = inject(OrdersService);
  private dialog = inject(Dialog);

  // properties
  isOpenOverlayFilter = false;

  // signals
  public user = computed(() => this.authService.currentUser());
  public provider = signal<Provider | null>(null);
  public services = signal<Service[]>([]);
  public orders = signal<Order[]>([]);

  ngOnInit(): void {
    this.getServices();
  }

  // Methods
  openEditServiceDialog(service: Service | null) {
    this.dialog.open(EditServiceModalComponent, {
      width: '600px',
      data: service,
    });
  }

  getServices() {
    return this.providersService.getProviderByUserId(this.user()!.id)
      .pipe(
        tap(provider => {
          if (!provider) return;
          this.provider.set(provider);

          this.getOrders(provider.id);
        }),
        switchMap(provider => {
          return this.servicesService.getServicesByProviderId(this.provider()!.id)
        })
      )
      .subscribe({
        next: services => this.services.set(services),
        error: error => console.error(error)
      })
  }

  getOrders(id: string) {
    return this.ordersService.getOrdersByProviderId(this.provider()!.id)
      .subscribe({
        next: orders => this.orders.set(orders),
        error: error => console.error(error)
      })
  }

  completeOrder(index: number) {
    // buscar el la lista con el index y cambiar el estado a completado
    this.orders.update(orders => {
      orders[index].status = 'complete';
      return orders;
    });
  }

}
