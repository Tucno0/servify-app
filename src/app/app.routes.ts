import { Routes } from '@angular/router';
import { PresentationLayoutComponent } from './presentation/layouts/presentationLayout/presentationLayout.component';
import { AuthComponent } from './auth/auth.component';

const titleApp = document.getElementsByTagName('title')[0].innerText;

const headerMenu = {
  home: 'Inicio',
  aboutUs: 'Nosotros',
  services: 'Servicios',
}

export const routes: Routes = [
  {
    path: '',
    component: PresentationLayoutComponent,
    children: [
      {
        path: 'home',
        title: `${titleApp} | ${headerMenu.home}`,
        loadComponent: () =>
          import(
            './presentation/pages/home/home.component'
          ),
        data: {
          title: headerMenu.home,
          description: 'Landin page de la aplicación'
        },
      },
      {
        path: 'about-us',
        title: `${titleApp} | ${headerMenu.aboutUs}`,
        loadComponent: () =>
          import(
            './presentation/pages/aboutUs/aboutUs.component'
          ),
        data: {
          title: headerMenu.aboutUs,
          description: 'Acerca de nosotros',
        },
      },
      {
        path: 'services',
        title: `${titleApp} | ${headerMenu.services}`,
        loadComponent: () =>
          import(
            './presentation/pages/services/services.component'
          ),
        data: {
          title: headerMenu.services,
          description:  'Servicios que ofrecemos',
        },
      },
      {
        path: 'provider/:id',
        title: `${titleApp} | Proveedor`,
        loadComponent: () =>
          import(
            './presentation/pages/provider/provider.component'
          ),
        data: {
          title: 'Proveedor',
          description: 'Página de proveedor',
        },
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      }
      // {
      //   path: '**',
      //   redirectTo: '',
      //   pathMatch: 'full',
      // },
    ],
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./auth/pages/login/login.component'),
        data: {
          title: 'Iniciar sesión',
          description: 'Iniciar sesión en la aplicación',
        },
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./auth/pages/register/register.component'),
        data: {
          title: 'Registrarse',
          description: 'Registrarse en la aplicación',
        },
      },
      {
        path: 'personal-information',
        loadComponent: () =>
          import('./auth/pages/personalInformation/personalInformation.component'),
        data: {
          title: 'Información personal',
          description: 'Información personal del usuario',
        },
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: ''
  }
];
