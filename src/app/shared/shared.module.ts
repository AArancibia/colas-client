import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { CardticketDirective } from './directives/cardticket.directive';
import { CardDirective } from './directives/card.directive';
import {NotificationComponent} from './components/notification/notification.component';
import {TramitesPipe} from '@app/shared/pipes/tramites.pipe';
import {NgZorroModule} from '@app/shared/ng-zorro.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NopagefoundComponent,
    CardticketDirective,
    CardDirective,
    NotificationComponent,
    TramitesPipe,
  ],
  imports: [
    CommonModule,
    NgZorroModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NopagefoundComponent,
    NotificationComponent,
    CardticketDirective,
    CardDirective,
    TramitesPipe,
    NgZorroModule
  ]
})
export class SharedModule { }
