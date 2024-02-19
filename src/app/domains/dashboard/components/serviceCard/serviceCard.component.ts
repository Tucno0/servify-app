import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Service } from '@dashboard/interfaces/service.interface';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './serviceCard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceCardComponent {
  @Input({ required: true }) public service!: Service;
}
