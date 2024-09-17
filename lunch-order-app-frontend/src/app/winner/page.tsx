"use client";

import { useEffect, useState } from "react";

export default function Winner() {
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const fetchWinner = async () => {
      const res = await fetch("http://localhost:3000/api/winner");
      const data = await res.json();
      setWinner(data);
    };

    fetchWinner();
  }, []);

  return (
    <div className="container mx-auto py-10 text-center">
      <h1 className="text-4xl font-bold mb-10">Today's Winner</h1>
      {winner ? (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">{winner.foodPack.name}</h2>
          <p className="text-lg">{winner.restaurant.name}</p>
        </div>
      ) : (
        <p>No votes yet!</p>
      )}
    </div>
  );
}
