import { Model } from 'mongoose';

export type IUser = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  avatar: string;
  domain: string;
  available?: boolean;
};

export type ITeam = {
  team_name: string;
  users: IUser[];
};

// User Model
export type TeamModel = Model<ITeam, Record<string, unknown>>;

export type ITeamFilters = {
  searchTerm?: string;
  team_name?: string;
};
