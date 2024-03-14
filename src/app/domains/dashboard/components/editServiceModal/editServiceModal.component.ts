import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Service } from '@models/service.model';
import { CategoriesService } from '@services/index';
import { Category } from '@models/category.model';

@Component({
  selector: 'app-edit-service-modal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './editServiceModal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditServiceModalComponent implements OnInit {

  // services
  private formBuilder = inject(FormBuilder);
  private dialogRef = inject(DialogRef<Service>);
  // Data del todo seleccionado que se envía desde el componente padre
  private readonly data: Service = inject(DIALOG_DATA);
  private readonly CategoriesService = inject(CategoriesService);

  // signals
  public categories = signal<Category[]>([]);

  // properties
  public service = computed(() => this.data);

  public form = this.formBuilder.group({
    name: [
      this.service() ? this.service().name : '',
      Validators.required
    ],
    description: [
      this.service() ? this.service().description : '',
      Validators.required
    ],
    content: [
      this.service() ? this.service().content : '',
    ],
    priceByHour: [
      this.service() ? this.service().priceByHour : '',
      Validators.required
    ],
    categoryId: [
      this.service() ? this.service().category.id : '',
    ],
  });

  // Lifecycle
  ngOnInit() {
    this.getCategories();
  }

  // Methods
  close() {
    this.dialogRef.close();
  }

  getCategories() {
    return this.CategoriesService.getCategories()
      .subscribe({
        next: (categories) => {
          this.categories.set(categories);
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

  updateService() {
    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);
    // this.dialogRef.close(this.form.value);
  }
}
