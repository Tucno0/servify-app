import { Category } from "./category.interface";

export interface Service {
  id: string;
  name: string;
  description: string;
  category: Category;
  price: number;
  image: string;
}
