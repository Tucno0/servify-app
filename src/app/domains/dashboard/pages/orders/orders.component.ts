import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { OrderCardComponent } from '@dashboard/components/orderCard/orderCard.component';
import { Order } from '@models/order.model';
import { OrdersService } from '@services/index';

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

  // Signals
  public orders = signal<Order[]>([]);

  ngOnInit(): void {
    this.ordersService.getOrders().subscribe({
      next: orders => this.orders.set(orders),
      error: error => console.error(error),
    });
  }
}
