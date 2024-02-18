import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { categories } from '@company/data';
import { Category } from '@company/interfaces/category.interface';
import { CategoryComponent } from '@components/category/category.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    CommonModule,
    CategoryComponent,
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent {
  public categories: Category[] = categories;

  categoryActive = signal<string>('Ensamblaje');
}
