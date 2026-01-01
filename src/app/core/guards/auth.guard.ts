import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  canActivate() {
    if (!this.authenticationService.estaLogueado()) {
      this.router.navigate(['/authentication']);
      return false;
    }
    return true;
  }
}
