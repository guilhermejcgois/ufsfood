import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { AuthService } from '../core/index';
import { User } from '../shared/index';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  private email = '';
  private password = '';

  constructor(
    public router: Router
    , public http: Http
    , public auth: AuthService
  ) {}

  onSubmit(formData) {
    console.log(formData, this.email, this.password);
    if (formData.valid) {
      this.auth.login();
      // this.auth.login(formData.value.email, formData.value.password)
      //          .then((success) => { this.router.navigate(['/list']); })
      //          .catch((error) => { this.router.navigate(['/login']); });
    }
  }

}
