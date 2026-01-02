import {NgModule} from '@angular/core';
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
import {NzNotificationModule} from 'ng-zorro-antd/notification';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import { IconDefinition } from '@ant-design/icons-angular';

import { BellOutline, MinusCircleOutline,CaretRightFill, SettingOutline,UserOutline, SyncOutline } from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [
  BellOutline,
  MinusCircleOutline,
  CaretRightFill,
  SettingOutline,
  UserOutline,
  SyncOutline
];

@NgModule({
  declarations: [],
  imports: [
    NzFormModule,
    NzCardModule,
    NzListModule,
    NzTableModule,
    NzIconModule.forRoot(icons),
    NzBreadCrumbModule,
    NzInputModule,
    NzPopoverModule,
    NzSelectModule,
    NzAvatarModule,
    NzNotificationModule,
    NzButtonModule,
    NzLayoutModule,
    NzMenuModule,
  ],
  exports: [
    NzFormModule,
    NzCardModule,
    NzListModule,
    NzTableModule,
    NzIconModule,
    NzBreadCrumbModule,
    NzInputModule,
    NzPopoverModule,
    NzSelectModule,
    NzAvatarModule,
    NzNotificationModule,
    NzButtonModule,
    NzLayoutModule,
    NzMenuModule,
  ],
  providers: [],
})
export class NgZorroModule { }
