import {ID} from '@datorama/akita';
import {UserModel} from './user.model';

export type Session = {
  user: UserModel,
  token: string
};

export function createSession(user, token): Session {
  return {
    user,
    token
  } as Session;
}
