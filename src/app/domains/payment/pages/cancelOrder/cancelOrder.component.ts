import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cancel-order',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './cancelOrder.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CancelOrderComponent { }
