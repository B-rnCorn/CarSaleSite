import { Injectable } from '@angular/core';
import { Query, toBoolean } from '@datorama/akita';
import { AuthStore, AuthState } from './auth.store';
import {UserModel} from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SessionQuery extends Query<AuthState> {
  isLoggedIn$ = this.select((state) => toBoolean(state.token));
  name$ = this.select((state) => state.user);

  constructor(protected store: AuthStore) {
    super(store);
  }

  isLoggedIn(): boolean {
    return toBoolean(this.getValue().token);
  }
  getLoggedUser(): UserModel{
    return this.getValue().user;
  }
  getLoggedUserToken(): string {
    return this.getValue().token;
  }
}
