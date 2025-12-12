import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import {FormsModule} from '@angular/forms';
import {HomeRoutingModule} from './home-routing.module';
import {SharedModule} from '../shared/shared.module';
import {SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
import {environment} from '@env/environment';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';

const config: SocketIoConfig = { url: environment.wsUrl , options: {} };

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    SharedModule,
    NzLayoutModule,
    NzMenuModule,
    SocketIoModule.forRoot( config ),
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
