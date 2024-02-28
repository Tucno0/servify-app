import { initFlowbite } from 'flowbite';
import { catchError, debounceTime, distinctUntilChanged } from 'rxjs';

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { CategoryComponent } from '@components/category/category.component';
import { EmptyComponent } from '@components/empty/empty.component';
import { ButtonComponent } from '@components/button/button.component';
import { ButtonDuoToneColors } from '@components/button/button.properties';
import { CategoriesService, ServicesService } from '@services/index';

import { ServiceCardComponent } from '../../components/serviceCard/serviceCard.component';
import { Category, Service } from '@models/index';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,

    CategoryComponent,
    ServiceCardComponent,
    ButtonComponent,
    EmptyComponent,
  ],
  templateUrl: './services.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ServicesComponent implements OnInit {

  public gradientColors = signal<ButtonDuoToneColors[]>([
    'purpleToBlue',
    'cyanToBlue',
    'greenToBlue',
    'purpleToPink',
    'pinkToOrange',
    'tealToLime',
    'redToYellow',
  ]);

  @Input() categoryName?: string;

  // Services
  private readonly categoriesService = inject(CategoriesService);
  private readonly servicesService = inject(ServicesService);

  // Signals
  public categories = signal<Category[]>([]);
  public categoryActive = signal<string>('Tareas destacadas');

  public services = signal<Service[]>([]);
  public originalServices = signal<Service[]>([]);

  // Form
  public input = new FormControl('', {nonNullable: true});


  // Component methods
  ngOnInit(): void {
    initFlowbite();

    // Services
    this.getAllCategories();
    this.getAllServices();

    // Search
    this.input.valueChanges
    .pipe(
      debounceTime(500),
      distinctUntilChanged(),
      // switchMap((value) => {
      //   // return this.productService.searchProduct(value);
      // })
    )
    .subscribe((value) => {
      this.find(value);
    });
  }

  ngOnChanges(): void {
    this.categoryActive.set(this.categoryName ?? 'Tareas destacadas');
    // console.log('categoryActive => ', this.categoryActive());
  }

  // Methods
  public gradient = (position: number) => {
    if (position <= 5) {
      return position + 1;
    } else if (position <= 11) {
      return position - 6;
    } else {
      return position - 12;
    }
  }

  public filterByCategory(category: string) {
    this.categoryActive.set(category);
    this.services.set(
      this.originalServices().filter((service) => service.category.name === category)
    );
  }

  public find(query: string): void {
    this.services.set(
      this.originalServices().filter((service) => {
        const word = `${service.name}-${service.category}-${service.description}`;
        return word.toLowerCase().includes(query);
      })
    );
  }

  public getAllCategories() {
    this.categoriesService.getCategories()
    .pipe(
      catchError((error) => {
        console.error(error);
        return [];
      })
    )
    .subscribe((categories) => {
      this.categories.set(categories);
    });
  }

  public getAllServices() {
    this.servicesService.getServices()
    .pipe(
      catchError((error) => {
        console.error(error);
        return [];
      })
    )
    .subscribe((services) => {
      this.services.set(services);
      this.originalServices.set(services);

      // Filter by category
      this.filterByCategory(this.categoryActive());
    });
  }

}
