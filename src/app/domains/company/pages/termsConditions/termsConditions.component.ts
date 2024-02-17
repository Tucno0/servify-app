import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-terms-conditions',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './termsConditions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TermsConditionsComponent { }
