import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-provider',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './provider.component.html',
  styleUrl: './provider.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProviderComponent { }
