"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const res = await fetch("http://localhost:3000/api/restaurants");
      const data = await res.json();
      setRestaurants(data);
    };

    fetchRestaurants();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Restaurants and Food Packs
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
                <li key={pack.id} className="text-lg mb-2">
                  {pack.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
