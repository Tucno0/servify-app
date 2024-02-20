import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-empty',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './empty.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyComponent { }
