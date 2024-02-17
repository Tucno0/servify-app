import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CategoriesComponent } from '../../../shared/components/categories/categories.component';
import { categories } from '../../../company/data/categories.data';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,

    CategoriesComponent,
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ServicesComponent implements OnInit {

  public categories = categories;
  public isFilterOpen = false;

  ngOnInit(): void {
    initFlowbite();
  }
}
