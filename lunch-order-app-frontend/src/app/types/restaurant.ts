export interface FoodPack {
  id: number;
  name: string;
  restaurantId: number;
}

export interface Restaurant {
  id: number;
  name: string;
  foodPacks: FoodPack[];
}
