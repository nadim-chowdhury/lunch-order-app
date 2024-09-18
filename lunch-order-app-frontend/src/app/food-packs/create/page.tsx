"use client";

import { useState, useEffect } from "react";

interface FoodPackData {
  name: string;
  restaurantId: number | "";
}

interface Restaurant {
  id: number;
  name: string;
}

export default function CreateFoodPacks() {
  const [foodPack, setFoodPack] = useState<FoodPackData>({
    name: "",
    restaurantId: "",
  });
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/restaurants");
        const data = await res.json();
        setRestaurants(data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchRestaurants();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFoodPack({
      ...foodPack,
      [name]: name === "restaurantId" ? parseInt(value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/food-packs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(foodPack),
      });

      if (res.ok) {
        alert("Food pack created successfully!");
        setFoodPack({ name: "", restaurantId: "" });
      } else {
        alert("Failed to create food pack.");
      }
    } catch (error) {
      console.error("Error creating food pack:", error);
      alert("Error creating food pack.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-10 text-center">Create Food Pack</h1>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
        {/* Food Pack Name */}
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 font-bold">
            Food Pack Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={foodPack.name}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Select Restaurant */}
        <div className="mb-6">
          <label htmlFor="restaurantId" className="block mb-2 font-bold">
            Select Restaurant:
          </label>
          <select
            id="restaurantId"
            name="restaurantId"
            value={foodPack.restaurantId}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          >
            <option value="">-- Select a restaurant --</option>
            {restaurants.map((restaurant) => (
              <option key={restaurant.id} value={restaurant.id}>
                {restaurant.name}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Create Food Pack"}
          </button>
        </div>
      </form>
    </div>
  );
}
