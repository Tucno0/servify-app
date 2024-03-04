import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, signal, inject } from '@angular/core';
import { RequestStatus } from '@type/requestStatus.type';
import { PaymentService } from '@services/payment.service';
import { Router, RouterLink } from '@angular/router';
import { PaypalErrorResponse } from '@interfaces/paypal-error-response.interface';
import { PaypalOrderConfirmResponse } from '@interfaces/paypal-order-confirm-response.interface';

@Component({
  selector: 'app-confirm-order',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './confirmOrder.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ConfirmOrderComponent {
  @Input() token?: string;

  // Services
  private readonly paymentService = inject(PaymentService);
  private readonly router = inject(Router);

  // Signals
  public status = signal<RequestStatus>('init');


  ngOnInit() {
    if (this.token) {
      this.paymentService.captureOrder(this.token)
        .subscribe({
          next: (resp) => {
            this.status.set('success');

            if ((resp as PaypalErrorResponse).name) {
              this.status.set('failed');

              console.log((resp as PaypalErrorResponse));

              return;
            }

            const response = resp as PaypalOrderConfirmResponse;
            // console.log(response);
          },
          error: (err) => {
            this.status.set('failed');
            console.log(err);
          }
        });
    } else {
      this.router.navigate(['/']);
    }
  }
}
