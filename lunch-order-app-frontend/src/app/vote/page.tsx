"use client";

import { useEffect, useState } from "react";

export default function Vote() {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedPack, setSelectedPack] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const res = await fetch("http://localhost:3000/api/restaurants");
      const data = await res.json();
      setRestaurants(data);
    };

    fetchRestaurants();
  }, []);

  const handleVote = async () => {
    if (!selectedPack) return;

    const res = await fetch("http://localhost:3000/api/vote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ foodPackId: selectedPack }),
    });

    const data = await res.json();
    if (data.success) {
      alert("Vote cast successfully!");
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Vote for Your Favorite Food Pack
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="bg-white shadow-md rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold mb-4">{restaurant.name}</h2>
            <ul>
              {restaurant.foodPacks.map((pack) => (
                <li key={pack.id} className="mb-2">
                  <button
                    onClick={() => setSelectedPack(pack.id)}
                    className={`px-4 py-2 rounded-lg ${
                      selectedPack === pack.id
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {pack.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={handleVote}
          className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg"
        >
          Submit Vote
        </button>
      </div>
    </div>
  );
}
