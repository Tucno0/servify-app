import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { GoTopComponent } from '../../components/goTop/goTop.component';

@Component({
  selector: 'app-presentation-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,

    HeaderComponent,
    GoTopComponent,
    FooterComponent,
  ],
  templateUrl: './presentationLayout.component.html',
  styleUrl: './presentationLayout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PresentationLayoutComponent {
  constructor() {

  }
}
