import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@auth/components/header/header.component';
import { LoginFormComponent } from '@auth/components/loginForm/loginForm.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterModule,

    HeaderComponent,
    LoginFormComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {

}
