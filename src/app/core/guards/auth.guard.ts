import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {KeycloakAuthGuard, KeycloakService} from 'keycloak-angular';
import {UsuarioService} from '@app/core/services/usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard extends KeycloakAuthGuard{
  constructor(
    protected override readonly router: Router,
    protected readonly keycloak: KeycloakService,
    private usuarioService: UsuarioService,
  ) {
    super(router, keycloak);
  }

  async isAccessAllowed(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    if (!this.authenticated && !this.keycloak.getKeycloakInstance().authenticated) {
      this.router.navigate(['/authentication/signin']);
    } else {
      try {
        await this.keycloak.loadUserProfile(true);
        await this.usuarioService.userInformation(this.keycloak.getUsername()).toPromise();
      } catch (e) {
        console.error(e);
      }
    }

    return this.authenticated;
  }
}
