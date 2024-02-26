import { Category } from "./category.model";

export interface Service {
  id:          string;
  name:        string;
  description: string;
  content:     string;
  priceByHour: string;
  category:    Category;
}

