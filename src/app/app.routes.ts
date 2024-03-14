import { Routes } from '@angular/router';
import { isAuthenticatedGuard } from '@guards/isAuthenticated.guard';
import { redirectGuard } from '@guards/redirect.guard';

const titleApp = document.getElementsByTagName('title')[0].innerText;

const headerMenu = {
  home: 'Inicio',
  aboutUs: 'Nosotros',
  services: 'Servicios',
}

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./domains/company/layouts/companyLayout/companyLayout.component'),
    children: [
      {
        path: '',
        canActivate: [ redirectGuard ],
        loadComponent: () => import('./domains/company/pages/home/home.component'),
        title: `${titleApp} | ${headerMenu.home}`,
        data: {
          title: headerMenu.home,
          description: 'Landin page de la aplicación'
        },
      },
      {
        path: 'services',
        loadComponent: () => import('./domains/dashboard/pages/services/services.component'),
        title: `${titleApp} | ${headerMenu.services}`,
        data: {
          title: headerMenu.services,
          description:  'Servicios que ofrecemos',
        },
      },
      {
        path: 'provider/:id',
        loadComponent: () => import('./domains/dashboard/pages/provider/provider.component'),
        title: `${titleApp} | Especialista`,
      },
      {
        path: 'service/:id',
        loadComponent: () => import('./domains/dashboard/pages/service/service.component'),
        title: `${titleApp} | Servicio`,
      },
      {
        path: 'about-us',
        loadComponent: () => import('./domains/company/pages/aboutUs/aboutUs.component'),
        title: `${titleApp} | ${headerMenu.aboutUs}`,
        data: {
          title: headerMenu.aboutUs,
          description: 'Acerca de nosotros',
        },
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'services',
      },
      // {
      //   path: '',
      //   redirectTo: 'home',
      //   pathMatch: 'full',
      // }
      // {
      //   path: '**',
      //   redirectTo: '',
      //   pathMatch: 'full',
      // },
    ],
  },
  {
    path: 'auth',
    // canActivate: [ redirectGuard ],
    loadComponent: () => import('./domains/auth/layout/layout.component'),
    children: [
      {
        path: 'login',
        canActivate: [ redirectGuard ],
        loadComponent: () => import('./domains/auth/pages/login/login.component'),
        title: `${titleApp} | Iniciar sesión`,
      },
      {
        path: 'register',
        canActivate: [ redirectGuard ],
        loadComponent: () => import('./domains/auth/pages/register/register.component'),
        title: `${titleApp} | Registrarse`,
      },
      {
        path: 'confirm-email',
        loadComponent: () => import('./domains/auth/pages/confirmEmail/confirmEmail.component'),
        title: `${titleApp} | Confirmar correo`,
      },
      {
        path: 'personal-information',
        canActivate: [ redirectGuard ],
        loadComponent: () => import('./domains/auth/pages/personalInformation/personalInformation.component'),
        title: `${titleApp} | Información personal`,
      },
      {
        path: 'forgot-password',
        canActivate: [ redirectGuard ],
        loadComponent: () => import('./domains/auth/pages/forgotPassword/forgotPassword.component'),
        title: `${titleApp} | Recuperar contraseña`,
      },
      {
        path: 'change-password',
        canActivate: [ redirectGuard ],
        loadComponent: () => import('./domains/auth/pages/changePassword/changePassword.component'),
        title: `${titleApp} | Cambiar contraseña`,
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      // {
      //   path: '**',
      //   redirectTo: 'login',
      //   pathMatch: 'full',
      // },
    ],
  },
  {
    path: 'dashboard',
    canActivate: [ isAuthenticatedGuard ],
    loadComponent: () => import('./domains/dashboard/layouts/dashboardLayout/dashboardLayout.component'),
    children: [
      {
        path: 'provider-mode',
        loadComponent: () => import('./domains/dashboard/pages/providerMode/providerMode.component'),
        title: `${titleApp} | Modo proveedor`,
      },
      {
        path: 'book',
        canActivate: [ isAuthenticatedGuard ],
        loadComponent: () => import('./domains/payment/pages/book/book.component'),
        title: `${titleApp} | Reservar Servicio`,
      },
      {
        path: 'confirm-order',
        loadComponent: () => import('./domains/payment/pages/confirmOrder/confirmOrder.component'),
        title: `${titleApp} | Confirmar Orden`,
      },
      {
        path: 'orders',
        loadComponent: () => import('./domains/dashboard/pages/orders/orders.component'),
        title: `${titleApp} | Mis órdenes`,
      },
      {
        path: '',
        redirectTo: 'provider-mode',
        pathMatch: 'full',
      },
    ]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  }
];
