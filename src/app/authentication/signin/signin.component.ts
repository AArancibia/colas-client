import {Component, inject, OnInit} from '@angular/core';
import {KeycloakService} from 'keycloak-angular';
import {environment} from '@env/environment';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  keycloak = inject(KeycloakService);

  constructor() {}

  ngOnInit() {}

  async login() {
    await this.keycloak.login({redirectUri: `${environment.keycloak.redirectUri}/ticket`});
  }
}
