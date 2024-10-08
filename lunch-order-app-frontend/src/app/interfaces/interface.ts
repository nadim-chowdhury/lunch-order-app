export interface FoodPack {
  id: number;
  name: string;
}

export interface Restaurant {
  id: number;
  name: string;
  foodPacks: FoodPack[];
}

export interface Winner {
  name: string;
  restaurant: Restaurant;
}
