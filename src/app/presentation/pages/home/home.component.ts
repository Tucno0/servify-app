import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardReviewComponent } from '../../components/cardReview/cardReview.component';
import { CardReview } from '../../interfaces/card-review.interface';
import { categories, reviews } from '../../data';
import { CountUpComponent } from '../../components/countUp/countUp.component';
import { questions } from '../../data/questions.data';
import { CategoriesComponent } from '../../components/categories/categories.component';

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
