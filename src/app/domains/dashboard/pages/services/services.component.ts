import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, computed, signal } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { CategoryComponent } from '@components/category/category.component';
import { ServiceCardComponent } from '../../components/serviceCard/serviceCard.component';
import { services } from '@dashboard/data/services.data';
import { Service } from '@dashboard/interfaces/service.interface';
import { ButtonComponent } from '@components/button/button.component';
import { Category } from '@dashboard/interfaces/category.interface';
import { categories } from '@dashboard/data/categories.data';
import { ButtonDuoToneColors } from '@components/button/button.properties';
import { RouterLink } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { EmptyComponent } from '@components/empty/empty.component';

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

  public categories = signal<Category[]>(categories);
  public originalServices = signal<Service[]>(services);
  public services = signal<Service[]>(services);
  public categoryActive = signal<string>('Tareas destacadas');

  public input = new FormControl('', {nonNullable: true});


  ngOnInit(): void {
    initFlowbite();
    this.filterByCategory(this.categoryActive());

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
    // console.log(this.categoryActive());
  }

  public gradient = (position: number) => {
    if (position <= 5) {
      return position + 1;
    } else if (position <= 11) {
      return position - 6;
    } else {
      return position - 12;
    }
  }

  filterByCategory(category: string) {
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

}
