// "use client";

import { fetcher } from "@/app/lib/fetcher";
import { Winner } from "../interfaces/interface";

export default async function WinnerList() {
  const winner: Winner | null = await fetcher<Winner>(
    "http://127.0.0.1:8000/api/votes/winner"
  );

  return (
    <div className="container mx-auto py-10 text-center">
      <h1 className="text-4xl font-bold mb-10">Today&apos;s Winner</h1>
      {winner ? (
        <div className="bg-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Food Name: {winner?.name}</h2>
          <p className="text-lg">Restaurant Name: {winner?.restaurant?.name}</p>
        </div>
      ) : (
        <p>No votes yet!</p>
      )}
    </div>
  );
}
