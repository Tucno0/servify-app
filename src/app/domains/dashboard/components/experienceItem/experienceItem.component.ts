import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-item',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './experienceItem.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceItemComponent {
  @Input({ required: true }) index!: number;
}
