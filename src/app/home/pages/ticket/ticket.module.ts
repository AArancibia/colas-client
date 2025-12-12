import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '@app/shared/shared.module';
import {TicketComponent} from '@app/home/pages/ticket/ticket.component';

import { TicketRoutingModule } from './ticket-routing.module';
import {FormsModule} from '@angular/forms';
import {SatisfaccionComponent} from '@app/home/pages/ticket/satisfaccion/satisfaccion.component';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzListModule} from 'ng-zorro-antd/list';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzPopoverModule} from 'ng-zorro-antd/popover';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzAvatarModule} from 'ng-zorro-antd/avatar';

@NgModule({
  declarations: [ TicketComponent, SatisfaccionComponent ],
  imports: [
    CommonModule,
    FormsModule,
    TicketRoutingModule,
    SharedModule,
    NzFormModule,
    NzCardModule,
    NzListModule,
    NzTableModule,
    NzIconModule,
    NzBreadCrumbModule,
    NzInputModule,
    NzPopoverModule,
    NzSelectModule,
    NzAvatarModule
  ],
  exports: [ TicketComponent, SatisfaccionComponent ],
})
export class TicketModule { }
