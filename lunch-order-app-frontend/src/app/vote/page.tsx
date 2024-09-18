import Vote from "@/components/vote";
import { Restaurant } from "../types/restaurant";
import { fetcher } from "../lib/fetcher";

export default async function VotePage() {
  const restaurants: Restaurant[] = await fetcher<Restaurant[]>(
    "http://127.0.0.1:8000/api/restaurants"
  );

  return <Vote restaurants={restaurants} />;
}
