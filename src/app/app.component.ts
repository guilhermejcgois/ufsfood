import { Component } from '@angular/core';
import {
  MdButtonModule,
  MdToolbarModule
} from '@angular/material';

import { FacebookService, InitParams } from 'ngx-facebook';

import { environment } from '../environments/environment';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    public auth: AuthService,
    private facebookService: FacebookService
  ) {
    auth.handleAuthentication();
    facebookService.init(environment.facebook);
  }
}
