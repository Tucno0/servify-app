import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { OrderCardComponent } from '@dashboard/components/orderCard/orderCard.component';
import { Order, Client } from '@models/index';
import { OrdersService } from '@services/index';
import { AuthService, ClientsService } from '@services/index';
import { pipe, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    CommonModule,
    OrderCardComponent,
  ],
  templateUrl: './orders.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrdersComponent implements OnInit {
  // Services
  private readonly ordersService = inject(OrdersService);
  private readonly authService = inject(AuthService);
  private readonly clientsService = inject(ClientsService);

  // Signals
  public user = computed(() => this.authService.currentUser());
  public orders = signal<Order[]>([]);

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.clientsService.getClientByUserId(this.user()!.id)
      .pipe(
        switchMap( (client: Client) => this.ordersService.getOrdersByClientId(client.id)),
      )
      .subscribe({
        next: (orders: Order[]) => this.orders.set(orders),
        error: (err) => console.error(err),
      });

  }
}
