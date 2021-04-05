import {ID} from '@datorama/akita';

export type UserModel = {
  id: ID;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  password: string;
  active: boolean;
};

export function createUserModel({id, first_name, last_name, phone, email, password, active}: Partial<UserModel>): UserModel{
  return {
    id,
    first_name,
    last_name,
    phone,
    email,
    password,
    active,
  }as UserModel;
}
