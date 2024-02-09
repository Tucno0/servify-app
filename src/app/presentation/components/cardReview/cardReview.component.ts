import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CardReview } from '../../interfaces/card-review.interface';

@Component({
  selector: 'app-card-review',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './cardReview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardReviewComponent {
  @Input({ required: true, }) public review!: CardReview;
}
