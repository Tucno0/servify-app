import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from '@components/footer/footer.component';
import { GoTopComponent } from '@components/goTop/goTop.component';
import { HeaderComponent } from '@components/header/header.component';

@Component({
  selector: 'app-company-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    GoTopComponent,
    FooterComponent,
  ],
  templateUrl: './companyLayout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CompanyLayoutComponent { }
