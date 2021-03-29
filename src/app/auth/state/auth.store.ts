import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import {UserModel} from '../../models/user.model';

export interface AuthState {
  user: UserModel;
  token: string;
}

export function createInitialSessionState(): AuthState {
  return {
    user: null,
    token: null,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'session' })
export class AuthStore extends Store<AuthState> {

  constructor() {
    super(createInitialSessionState());
  }

  login(session: unknown) {
    this.update(session);
  }

  logout() {
    this.update(createInitialSessionState());
  }
}
