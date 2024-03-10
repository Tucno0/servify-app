import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, Signal, computed, signal } from '@angular/core';
import { MiniMapComponent } from '@components/miniMap/miniMap.component';
import { Order } from '@models/index';

@Component({
  selector: 'app-order-card',
  standalone: true,
  imports: [
    CommonModule,
    MiniMapComponent,
  ],
  templateUrl: './orderCard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderCardComponent {
  @Input({ required: true }) public order!: Order;

  // Signals
  public location: Signal<[number, number]> = computed(() => {
    const [ longitude, latitude ] = this.order.location.split(',').map(Number);
    return [longitude, latitude];
  })
}
