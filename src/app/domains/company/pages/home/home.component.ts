import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CardReviewComponent } from '@company/components/cardReview/cardReview.component';
import { CategoryInfoComponent } from '@company/components/categoryInfo/categoryInfo.component';
import { StepComponent } from '@company/components/step/step.component';
import { reviews, categories, questions } from '@company/data';
import { categoryInfoData } from '@company/data/category-info.data';
import { CardReview } from '@company/interfaces/card-review.interface';
import { Category } from '@company/interfaces/category.interface';
import { CategoriesComponent } from '@components/categories/categories.component';
import { CategoryComponent } from '@components/category/category.component';
import { CountUpComponent } from '@components/countUp/countUp.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,

    CategoryComponent,
    CategoryInfoComponent,
    CardReviewComponent,
    CountUpComponent,
    CategoriesComponent,
    StepComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {
  // Categories
  public categories: Category[] = categories;
  public categoryActive = signal<string>('Ensamblaje');
  public categoryInfoData = categoryInfoData;

  // Reviews
  public reviews: CardReview[] = reviews;

  // Questions
  public questions = questions;
  public isOpen: string = '';


}
