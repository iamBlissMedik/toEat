import type { Dish } from "@/types/dish";
export interface Restaurant {
  name?: string;
  address?: string;
  status?: string;
  dishes?: Dish[];
}
