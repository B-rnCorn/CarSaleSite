import { Component, OnInit } from '@angular/core';
import {NbLoginComponent} from '@nebular/auth';
import {createUserModel, UserModel} from '../../models/user.model';
import {AuthService} from '../state/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  email: string;
  password: string;
  user: UserModel;
  constructor(private authService: AuthService) {
  }

  login(email: string, password: string): void{
    this.email = email;
    this.password = password;
    this.user = createUserModel(
      {id: 100,
        email: this.email,
        password: this.password,
        first_name: 'Sergey',
        last_name: null,
        active: false,
        phone: null
      });
    this.authService.login(this.user);
  }
}
