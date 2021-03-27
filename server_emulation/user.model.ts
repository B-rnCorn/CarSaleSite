import {ID} from '@datorama/akita';

export type UserModel = {
  id: ID;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  isManager: boolean;
};

export function createUserModel({id, firstName, lastName, phone, email, isManager}: Partial<UserModel>): UserModel{
  return {
    id,
    firstName,
    lastName,
    phone,
    email,
    isManager,
  }as UserModel;
}
