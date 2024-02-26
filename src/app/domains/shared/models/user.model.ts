type Role = 'client' | 'provider';

export interface User {
  id:             string;
  name:           string;
  lastName:       string;
  email:          string;
  emailValidated: boolean;
  isActive:       boolean;
  role:           Role;
  createdAt:      string;
  updatedAt:      string;
image?:           string;
}
