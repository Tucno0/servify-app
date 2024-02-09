import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './personalInformation.component.html',
  styleUrl: './personalInformation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PersonalInformationComponent { }
