import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {APP_BASE_HREF, registerLocaleData} from '@angular/common';
/* Routing Module */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import es from '@angular/common/locales/es';
import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';
import { ColasStoreModule } from '@app/store/colas-store.module';
import { AuthenticationModule } from './authentication/authentication.module';
import {es_ES, NZ_I18N} from 'ng-zorro-antd/i18n';
import {SharedModule} from '@app/shared/shared.module';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';

registerLocaleData(es);

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080',
        realm: 'portfoliodev',
        clientId: 'bodegaappclient',
      },
      initOptions: {
        pkceMethod: 'S256',
        redirectUri: 'http://localhost:9000/login',
      },
      loadUserProfileAtStartUp: false,
    });
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    ColasStoreModule,
    AuthenticationModule,
    SharedModule,
    KeycloakAngularModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: es_ES },
    { provide: APP_BASE_HREF, useValue: '/colas-project' },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
