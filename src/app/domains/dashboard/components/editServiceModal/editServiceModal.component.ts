import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Service } from '@models/service.model';

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
export class EditServiceModalComponent {

  // services
  private formBuilder = inject(FormBuilder);
  private dialogRef = inject(DialogRef<Service>);
  // Data del todo seleccionado que se envía desde el componente padre
  private readonly data: Service = inject(DIALOG_DATA);

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
  });


  // Methods
  close() {
    this.dialogRef.close();
  }

  updateService() {
    if (this.form.invalid) {
      return;
    }

    // this.dialogRef.close(this.form.value);
  }
}
