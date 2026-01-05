import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';
import {AuthRO} from '@app/authentication/auth.dto';
import {map} from 'rxjs/operators';
import {ACCES_TOKEN, USUARIO, VENTANILLA} from '@app/shared/constants/auth.constants';
import {VentanillaService} from '@app/core/services/ventanilla/ventanilla.service';
import {AuthenticationService} from '@app/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private api: string = environment.url_server;
  constructor(
    private httpClient: HttpClient,
    private ventanillaService: VentanillaService,
    private authenticationService: AuthenticationService,
  ) { }

  private request(
    method: string,
    endpoint: string,
    body?: any
  ): Observable< any > {
    const url = this.api + endpoint;
    return this.httpClient.request( method, `${ url }`, {
      body,
    });
  }

  userInformation(username: string) {
    return this.request('POST', `usuario/information/${username}`).pipe(
      map((auth: AuthRO) => {
        this.guardarStorage(auth);
        return true;
      })
    );
  }

  guardarStorage({ ventanilla, token, ...usuario }: AuthRO) {
    localStorage.setItem(USUARIO, JSON.stringify(usuario));
    localStorage.setItem(VENTANILLA, JSON.stringify(ventanilla));
    localStorage.setItem(ACCES_TOKEN, token);
    this.authenticationService.auth = { ventanilla, token, ...usuario };
    this.ventanillaService.ventanillaS.next(ventanilla);
  }

  filtrarUsuarios( nombreUsuario: string ) {
    return this.request( 'GET', `usuario/${ nombreUsuario }` );
  }

}
