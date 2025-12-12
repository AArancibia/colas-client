import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
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

registerLocaleData(es);

/**
 * The bootstrapper Module
 */
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
    SharedModule
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule {}
