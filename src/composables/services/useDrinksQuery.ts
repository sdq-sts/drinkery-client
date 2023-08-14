import { useInfiniteQuery } from "@tanstack/vue-query";
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
  search: string;
  alcoholic: boolean;
  season: string;
  offset: number;
}

export default (filters: DrinksFilters) => {
  const httpInstance = useHttpInstance();
  const itemsPerPage = 12;

  const drinksFetcher = async ({ pageParam = 0 }) => {
    const { data } = await httpInstance.get('/drinks', {
      params: {
        limit: itemsPerPage,
        offset: pageParam,
        ...(filters.search && { search: filters.search }),
        ...(filters.alcoholic && { alcoholic: filters.alcoholic }),
        ...(filters.season && { season: filters.season }),
      }
    });

    return {
      data: data,
      pageParam: pageParam + itemsPerPage,
    }
  };

  const query = useInfiniteQuery({
    queryKey: ["drinks", ],
    queryFn: drinksFetcher,
    getNextPageParam: (lastPage) => {
      if (lastPage.data.length < itemsPerPage) return undefined;

      return lastPage.pageParam;
    },
  });

  return query;
};
