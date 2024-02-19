import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-info',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './categoryInfo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryInfoComponent {
  @Input({ required: true }) img: string = '';
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) description: string = '';
  @Input({ required: true }) description2: string = '';
}
