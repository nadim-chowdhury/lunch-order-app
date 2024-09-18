import Vote from "@/components/vote";
import { Restaurant } from "../types/restaurant";
import { fetcher } from "../lib/fetcher";

export default async function VotePage() {
  let restaurants: Restaurant[] = [];

  try {
    restaurants = await fetcher<Restaurant[]>(
      "http://localhost:8000/api/restaurants"
    );
  } catch (error) {
    console.error("Failed to fetch restaurants:", error);
  }

  return <Vote restaurants={restaurants} />;
}
