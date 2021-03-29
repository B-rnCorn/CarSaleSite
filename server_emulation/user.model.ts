import {ID} from '@datorama/akita';

export type UserModel = {
  id: ID;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  isManager: boolean;
};

export function createUserModel({id, firstName, lastName, phone, email, password, isManager}: Partial<UserModel>): UserModel{
  return {
    id,
    firstName,
    lastName,
    phone,
    email,
    password,
    isManager,
  }as UserModel;
}
