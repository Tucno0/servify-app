export interface User {
  id:             number;
  name:           string;
  lastName:       string;
  email:          string;
  emailValidated: boolean;
  isActive:       boolean;
  createdAt:      string;
  updatedAt:      string;
  image?:          string;
}
