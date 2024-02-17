import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  public year: number = new Date().getFullYear();

  public fontAwesomeIcons: string[] = [
    'fa-brands fa-x-twitter',
    'fa-brands fa-facebook',
    'fa-brands fa-instagram',
    'fa-brands fa-github',
    'fa-brands fa-youtube',
    'fa-brands fa-tiktok',
  ]

  public routes = [
    {
      nameSection: 'compañia',
      links: [
        { name: 'Nosotros', url: '/about-us' },
        { name: 'Servicios', url: '/services' },
        { name: 'Servicios', url: '/services' },
        { name: 'Servicios', url: '/services' },
      ]
    },
    {
      nameSection: 'soporte',
      links: [
        { name: 'Atención al cliente', url: '/customer-service' },
        { name: 'FAQ', url: '/faq' },
        { name: 'Términos de uso', url: '/terms-of-use' },
        { name: 'Política de privacidad', url: '/privacy-policy' },
      ]
    },
  ]
}
