import { Schema, model } from 'mongoose';
import { ITeam, TeamModel } from './team.interface';

// Team Schema
const UserSchema = new Schema({
  id: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: true },
  avatar: { type: String, required: true },
  domain: { type: String, required: true },
  available: { type: Boolean, required: true },
});

const TeamSchema = new Schema<ITeam, TeamModel>(
  {
    team_name: { type: String, required: true },
    users: [UserSchema],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Team = model<ITeam, TeamModel>('Team', TeamSchema);
