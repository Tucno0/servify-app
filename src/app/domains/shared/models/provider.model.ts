// Generated by https://quicktype.io

import { User } from "./user.model";

export interface Provider {
  id:          string;
  user:        User;
  phone:       string;
  description: string;
  rating:      number;
  content?:    string;
}