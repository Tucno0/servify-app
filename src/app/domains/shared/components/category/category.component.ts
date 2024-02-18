import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Category } from '@company/interfaces/category.interface';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './category.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent {
  @Input({ required: true}) public category!: Category;
}
