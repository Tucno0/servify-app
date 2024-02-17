import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, HostListener, OnInit, ViewChild, computed, inject } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { routes } from 'app/app.routes';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly authService = inject(AuthService);

  public user = computed(() => this.authService.currentUser());

  public routes: Route[] = routes[0].children!.filter(route => route.data);
  public menuActive: boolean = false;

  @ViewChild('dropdownMenu') dropdownMenu!: ElementRef;
  @ViewChild('avatar') avatar!: ElementRef;
  public showAvatarDropdown: boolean = false;

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if(this.dropdownMenu && !this.dropdownMenu.nativeElement.contains(event.target) && !this.avatar.nativeElement.contains(event.target)) {
      this.showAvatarDropdown = false;
    }
  }

  // Methods
  logout() {
    this.authService.logout();
  }
}
