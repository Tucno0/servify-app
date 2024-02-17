import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@auth/components/header/header.component';
import { RegisterFormComponent } from '@auth/components/registerForm/registerForm.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    RegisterFormComponent,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export default class RegisterComponent {

}
