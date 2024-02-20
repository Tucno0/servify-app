import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, computed, signal } from '@angular/core';
import { Service } from '@dashboard/interfaces/service.interface';
import { services } from '../../data/services.data';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ButtonComponent,
  ],
  templateUrl: './service.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ServiceComponent {
  @Input() id?: string;

  services = signal<Service[]>(services);
  service = computed(() => this.services().find((service) => service.id === this.id));


}
