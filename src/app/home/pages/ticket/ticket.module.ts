import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '@app/shared/shared.module';
import {TicketComponent} from '@app/home/pages/ticket/ticket.component';

import { TicketRoutingModule } from './ticket-routing.module';
import {FormsModule} from '@angular/forms';
import {SatisfaccionComponent} from '@app/home/pages/ticket/satisfaccion/satisfaccion.component';

@NgModule({
  declarations: [ TicketComponent, SatisfaccionComponent ],
  imports: [
    CommonModule,
    FormsModule,
    TicketRoutingModule,
    SharedModule,
  ],
  exports: [ TicketComponent, SatisfaccionComponent ],
})
export class TicketModule { }
