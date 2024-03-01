import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, Signal, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ExperienceItemComponent } from '@dashboard/components/experienceItem/experienceItem.component';
import { ReviewCardComponent } from '@dashboard/components/reviewCard/reviewCard.component';
import { Provider } from '@models/index';
import { ProvidersService } from '@services/index';

@Component({
  selector: 'app-provider',
  standalone: true,
  imports: [
    CommonModule,
    ReviewCardComponent,
    ExperienceItemComponent,
  ],
  templateUrl: './provider.component.html',
  styleUrl: './provider.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProviderComponent {
  @Input() id?: string;

  private readonly providersService = inject(ProvidersService);

  public provider = signal<Provider | null>(null);
  public rating = computed(() => {
    if (this.provider()) {
      return Math.round(this.provider()!.rating);
    }
    return 0;
  });

  public completeName = computed(() => {
    if (this.provider()) {
      return `${this.provider()?.user.name} ${this.provider()?.user.lastName}`;
    }
    return '';
  })

  ngOnInit() {
    window.scrollTo(0, 0);

    if (this.id) {
      this.providersService.getProvider(this.id).subscribe({
        next: provider => {
          return this.provider.set(provider)
        },
        error: err => console.error(err),
      })
    }
  }

}
