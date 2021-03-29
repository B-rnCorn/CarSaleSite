import { Injectable } from '@angular/core';
import { AuthStore } from './auth.store';
import { tap } from 'rxjs/operators';
import {NbAuthJWTToken, NbAuthResult, NbAuthService, NbAuthToken, NbPasswordAuthStrategy} from '@nebular/auth';
import {AuthToken} from '../auth-token';
import {HttpClient} from '@angular/common/http';
import {Session} from '../../models/session';
import {Observable} from 'rxjs';
import {UserModel} from '../../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService{
  constructor(private authStore: AuthStore, private http: HttpClient) {
  }
  registerUser(data: UserModel): void {
    this.http.post('http://localhost:3001/session', data, {});
    console.log('throw request');
  }

  login(creds): any {
    return this.http.get<Session>('http://localhost:3001/session').pipe(tap((session) => this.authStore.login(session)));
  }

  logoutUser(): void {
    this.authStore.logout();
  }
}

