import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './aboutUs.component.html',
  styleUrl: './aboutUs.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutUsComponent { }
