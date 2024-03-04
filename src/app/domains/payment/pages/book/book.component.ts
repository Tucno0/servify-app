import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, computed, inject, signal } from '@angular/core';
import { LoaderComponent } from '@components/loader/loader.component';
import { CreateOrderRequest } from '@interfaces/index';
import { Service, Client } from '@models/index';
import { AuthService, ServicesService, PaymentService, ClientsService } from '@services/index';
import { RequestStatus } from '@type/requestStatus.type';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoaderComponent,
  ],
  templateUrl: './book.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BookComponent {
  @Input() serviceId?: string;

  // Services
  private readonly authService = inject(AuthService);
  private readonly servicesService = inject(ServicesService);
  private readonly paymentService = inject(PaymentService);
  private readonly clientsService = inject(ClientsService);
  private readonly formBuilder = inject(FormBuilder);

  // Signals
  public service = signal<Service | null>(null);
  public user = computed(() => this.authService.currentUser());
  public client = signal<Client | null>(null);
  public status = signal<RequestStatus>('init');

  // Form
  form = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required]],
    last_name: ['', [Validators.required]],
    address: ['', [Validators.required]],
    city: ['Huamanga', [Validators.required]],
    zip_code: ['', [Validators.required, Validators.pattern(/^[0-9]{5}$/)]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
  });

  ngOnInit() {
    if (this.serviceId) {
      this.getServiceById(this.serviceId);
    }

    this.getClientByUserId(this.user()!.id);

    this.form.patchValue({
      name: this.user()?.name,
      last_name: this.user()?.lastName,
    });
  }

  // Methods
  bookService() {
    this.status.set('loading');

    const order: CreateOrderRequest = {
      client_id: this.client()!.id,
      service_id: this.service()!.id,
      name: this.form.get('name')!.value,
      last_name: this.form.get('last_name')!.value,
      address: this.form.get('address')!.value,
      city: this.form.get('city')!.value,
      zip_code: this.form.get('zip_code')!.value,
      phone: this.form.get('phone')!.value,
      start_date: new Date().toISOString(),
      end_date: new Date().toISOString(),
      status: 'process',
      price: +this.service()!.priceByHour,
    }

    // console.log({ order });

    this.paymentService.createOrder(order)
      .subscribe({
        next: (resp) => {

          if (resp.links[1]) {
            window.location.href = resp.links[1].href;
            // this.status.set('success');
          }else {
            console.log('Error al crear la orden');
          }
        },
        error: () => console.log
      });
  }

  getServiceById(serviceId: string) {
    this.servicesService.getService(serviceId)
    .subscribe({
      next: respService => {
        this.service.set(respService);
      },
      error: () => console.log
    });
  }

  getClientByUserId(userId: string) {
    this.clientsService.getClientByUserId(userId)
    .subscribe({
      next: respClient => {
        this.client.set(respClient);
        // console.log({ respClient });

        this.form.patchValue({
          address: respClient.address,
          zip_code: respClient.zipCode,
          phone: respClient.phone,
        });
      },
      error: () => console.log
    });
  }
}
