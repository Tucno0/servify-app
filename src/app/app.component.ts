import { Component, OnInit, computed, effect, inject } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { AuthService } from './domains/shared/services/auth.service';
import { AuthStatus } from '@enums/auth-status.enum';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  ngOnInit(): void {
    this.authService.checkAuthStatus().subscribe();
    initFlowbite();
  }

}
