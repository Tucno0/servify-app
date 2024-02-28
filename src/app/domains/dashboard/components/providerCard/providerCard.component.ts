import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Provider } from '@models/provider.model';

@Component({
  selector: 'app-provider-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './providerCard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProviderCardComponent {
  @Input({ required: true }) provider!: Provider;
}
