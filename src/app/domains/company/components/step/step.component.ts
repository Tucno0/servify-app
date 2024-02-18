import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-step',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './step.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepComponent {
  @Input({ required: true }) num: number = 1;
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) description: string = '';
}
