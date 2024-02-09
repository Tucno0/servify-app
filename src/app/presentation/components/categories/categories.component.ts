import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { categories } from '../../data';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent {
  @Input({ required: true}) public categories: any[] = [];
}
