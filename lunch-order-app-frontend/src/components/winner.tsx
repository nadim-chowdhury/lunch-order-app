import { fetcher } from "@/app/lib/fetcher";

interface FoodPack {
  id: number;
  name: string;
}

interface Restaurant {
  id: number;
  name: string;
}

interface Winner {
  foodPack: FoodPack;
  restaurant: Restaurant;
}

export default async function Winner() {
  const winner: Winner | null = await fetcher<Winner>(
    "http://127.0.0.1:8000/api/votes/winner"
  );

  return (
    <div className="container mx-auto py-10 text-center">
      <h1 className="text-4xl font-bold mb-10">Today&apos;s Winner</h1>
      {winner ? (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">{winner?.foodPack?.name}</h2>
          <p className="text-lg">{winner?.restaurant?.name}</p>
        </div>
      ) : (
        <p>No votes yet!</p>
      )}
    </div>
  );
}
