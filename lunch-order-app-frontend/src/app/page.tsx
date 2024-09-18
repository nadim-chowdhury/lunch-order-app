import Vote from "@/components/vote";
import { fetcher } from "./lib/fetcher";
import { Restaurant } from "./types/restaurant";

export default async function Home() {
  const restaurants = await fetcher<Restaurant[]>(
    "http://localhost:8000/api/restaurants"
  );

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Restaurants and Food Packs
      </h1>

      <Vote restaurants={restaurants} />
    </div>
  );
}
