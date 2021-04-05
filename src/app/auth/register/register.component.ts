import { Component, OnInit } from '@angular/core';
import {NbRegisterComponent} from '@nebular/auth';
import {createUserModel, UserModel} from '../../models/user.model';
import {AuthService} from '../state/auth.service';
import {NgModel} from '@angular/forms';
import {Router} from '@angular/router';
import {routes} from '../auth-routing.module';
import {HttpClient} from '@angular/common/http';
import {wrapRootComponentInLayout} from '@nebular/theme/schematics/ng-add/wrap-in-layout';
import {getRouterModuleDeclaration} from '@schematics/angular/utility/ast-utils';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent{
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  user: UserModel;
  constructor(private authService: AuthService, private router: Router) {
  }

  registerUser(email: string,
               password: string,
               firstName: string,
               lastName: string,
               phoneNumber: string): void{
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.user = createUserModel(
      {id: 100,
        email: this.email,
        password: this.password,
        first_name: this.firstName,
        last_name: this.lastName,
        active: false,
        phone: this.phoneNumber
      });
    this.authService.registerUser(this.user);
    this.redirect();
  }
  redirect(): void{
    this.router.navigate(['./pages/store']);
  }
}
