import { Component, OnInit, computed, effect, inject } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { AuthService } from './domains/shared/services/auth.service';
import { AuthStatus } from '@enums/auth-status.enum';
import { PlatformLocation } from '@angular/common';
import { environment } from '@environments/environment';

// Mapbox
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

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
  private readonly platformLocation = inject(PlatformLocation);

  constructor() {
    // Desactivar la restauración del desplazamiento
    this.platformLocation.onPopState(() => {
      window.scrollTo(0, 0);
    });
  }

  ngOnInit(): void {
    this.authService.checkAuthStatus().subscribe();
    initFlowbite();

    mapboxgl!.accessToken = environment.mapboxKey;
  }

}
