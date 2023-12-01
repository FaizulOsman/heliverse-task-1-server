import { Model } from 'mongoose';

export type IUser = {
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  avatar: string;
  domain: string;
  available?: boolean;
};

// User Model
export type UserModel = Model<IUser, Record<string, unknown>>;

export type IUserFilters = {
  searchTerm?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  domain?: string;
  gender?: string;
  available?: boolean;
};
