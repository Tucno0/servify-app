import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withViewTransitions,
} from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      //* rutas de la aplicación
      routes,

      //* para enlazar los parámetros de la URL con los inputs de los componentes
      withComponentInputBinding(),


      //* para animar las transiciones entre vistas
      withViewTransitions({
        skipInitialTransition: true, // para que no se ejecute la animación en la primera carga
        onViewTransitionCreated(transitionInfo) { // para añadir una clase a la vista que se está cargando
          // console.log('onViewTransitionCreated', transitionInfo);
        },
      })
    ),

    //* para importar los providers de otros módulos
    importProvidersFrom(
      // HttpClientModule, // para poder hacer peticiones HTTP
    ),

    //* para poder hacer peticiones HTTP
    provideHttpClient()
  ],
};
