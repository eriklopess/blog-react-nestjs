import { Role } from 'src/controllers/user.controller';

export interface IUser {
  id: string;
  username: string;
  password: string;
  email: string;
  role: Role;
}
