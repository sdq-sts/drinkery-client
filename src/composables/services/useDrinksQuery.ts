import { useQuery } from "@tanstack/vue-query";
import useHttpInstance from "../useHttpInstance";

export type Drink = {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  images: string[];
  price: number;
  recommended_season: "spring" | "summer" | "fall" | "winter";
  optimal_time_to_enjoy: "day" | 'brunch' | 'evening'| "night";
  is_alcoholic: boolean;
  prompt: string;
  createdAt: string;
}

export type DrinksFilters = {
  search: string,
  alcoholic: boolean,
  season: string,
  offset: number
}

export default (filters: DrinksFilters) => {
  const httpInstance = useHttpInstance();
  console.log(filters)

  const drinks = httpInstance.get<Drink[]>('/drinks');
  const query = useQuery({
    queryKey: ["drinks", ],
    queryFn: () => drinks,
    select: (response) => response.data,
  });

  return query
};
