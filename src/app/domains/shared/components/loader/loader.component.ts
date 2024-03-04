import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {
  @Input() size: number = 24;
  @Input() color: string = 'white';

}
