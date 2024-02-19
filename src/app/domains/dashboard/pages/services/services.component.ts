import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { categories } from '../../../company/data/categories.data';
import { initFlowbite } from 'flowbite';
import { CategoryComponent } from '@components/category/category.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,

    CategoryComponent
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ServicesComponent implements OnInit {

  public categories = categories;
  public categoryActive = signal<string>('Ensamblaje');

  public isFilterOpen = false;

  ngOnInit(): void {
    initFlowbite();
  }
}
