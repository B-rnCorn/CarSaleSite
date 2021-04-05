import { Injectable } from '@angular/core';
import { AuthStore } from './auth.store';
import {catchError, tap} from 'rxjs/operators';
import {NbAuthJWTToken, NbAuthResult, NbAuthService, NbAuthToken, NbPasswordAuthStrategy} from '@nebular/auth';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {createSession, Session} from '../../models/session';
import {Observable, throwError} from 'rxjs';
import {UserModel} from '../../models/user.model';
import {routes} from '../../app-routing.module';
import {Router} from '@angular/router';
import {d} from '@datorama/akita-ngdevtools';


@Injectable({
  providedIn: 'root'
})
export class AuthService{
  constructor(private authStore: AuthStore, private http: HttpClient) {
  }
  registerUser(data: UserModel): any {
    this.http.post('http://localhost:3001/reg', data, {}).pipe(catchError(this.handleError));
    console.log(data);
    console.log('throw register request');
  }

  login(data: UserModel): any {
    this.http.post('http://localhost:3001/login', data, {}).pipe(catchError(this.handleError)).subscribe((resp: any) => {
      // this.navigate(['profile']);
      this.authStore.login(createSession(resp.signed_user, resp.token));
      localStorage.setItem('auth_token', resp.token);
      console.log(resp.token);
      console.log(resp.user);
    });
    console.log('throw login request');
    // return this.http.get<Session>('http://localhost:3001/session').pipe(tap((session) => this.authStore.login(session)));
  }

  logoutUser(): void {
    this.authStore.logout();
  }

  private handleError(error: HttpErrorResponse): Observable<never>{
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error} `);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}

