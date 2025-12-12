import {inject, Injectable} from '@angular/core';
import {NzNotificationService} from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {
  notification = inject(NzNotificationService);
  constructor() {

  }

  messageOffline() {
    this.notification.error(
      'Servidor Desconectado',
      'No hay conexion con el servidor',
      {
        nzDuration: 0,
        nzPlacement: 'topLeft'
      }
    );
    const servidor: any = document.querySelector('.ant-notification.ant-notification-topRight');
    servidor.setAttribute('id', 'servidorMensaje');
    const statusMensaje = document.getElementById('servidorMensaje');
    statusMensaje.style.right = '50%';
    statusMensaje.style.transform = 'translate( 50%, 50% )';
    statusMensaje.removeAttribute('id');
  }

  messageOnline() {
    this.notification.remove();
    this.notification.success( 'Servidor Conectado', 'Todo OK' );
  }
}
