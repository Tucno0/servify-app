import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-review-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './reviewCard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewCardComponent { }
