import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CardReviewComponent } from '@company/components/cardReview/cardReview.component';
import { reviews, categories, questions } from '@company/data';
import { CardReview } from '@company/interfaces/card-review.interface';
import { CategoriesComponent } from '@components/categories/categories.component';
import { CountUpComponent } from '@components/countUp/countUp.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,

    CardReviewComponent,
    CountUpComponent,
    CategoriesComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {
  public reviews: CardReview[] = reviews;

  public categories = categories;
  public questions = questions;

  public isOpen: string = '';
}
