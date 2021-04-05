import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import {UserModel} from '../../models/user.model';
import {Session} from '../../models/session';

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

  login(session: Session) {
    this.update(session);
  }

  logout() {
    this.update(createInitialSessionState());
  }
}
