"use client";

import { useState } from "react";

interface FoodPack {
  name: string;
}

interface RestaurantData {
  name: string;
  foodPacks: FoodPack[];
}

export default function CreateRestaurants() {
  const [restaurantName, setRestaurantName] = useState<string>("");
  const [foodPacks, setFoodPacks] = useState<FoodPack[]>([{ name: "" }]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const handleFoodPackChange = (index: number, value: string) => {
  //   const updatedFoodPacks = [...foodPacks];
  //   updatedFoodPacks[index].name = value;
  //   setFoodPacks(updatedFoodPacks);
  // };

  // const handleAddFoodPack = () => {
  //   setFoodPacks([...foodPacks, { name: "" }]);
  // };

  // const handleRemoveFoodPack = (index: number) => {
  //   const updatedFoodPacks = [...foodPacks];
  //   updatedFoodPacks.splice(index, 1);
  //   setFoodPacks(updatedFoodPacks);
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const restaurantData: RestaurantData = {
      name: restaurantName,
      foodPacks,
    };

    try {
      const res = await fetch("http://localhost:8000/api/restaurants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(restaurantData),
      });

      if (res.ok) {
        alert("Restaurant created successfully!");
        setRestaurantName("");
        setFoodPacks([{ name: "" }]);
      } else {
        alert("Failed to create restaurant.");
      }
    } catch (error) {
      console.error("Error creating restaurant:", error);
      alert("Error creating restaurant.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Create Restaurant
      </h1>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
        {/* Restaurant Name */}
        <div className="mb-6">
          <label htmlFor="restaurantName" className="block mb-2 font-bold">
            Restaurant Name:
          </label>
          <input
            type="text"
            id="restaurantName"
            value={restaurantName}
            onChange={(e) => setRestaurantName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Food Packs */}
        {/* <div>
          <h2 className="text-2xl font-bold mb-4">Food Packs</h2>
          {foodPacks.map((foodPack, index) => (
            <div key={index} className="flex items-center mb-4">
              <input
                type="text"
                value={foodPack.name}
                onChange={(e) => handleFoodPackChange(index, e.target.value)}
                placeholder={`Food Pack ${index + 1}`}
                className="w-full p-3 border border-gray-300 rounded-lg mr-2"
                required
              />
              {foodPacks.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveFoodPack(index)}
                  className="px-3 py-2 bg-red-600 text-white rounded-lg"
                >
                  Remove
                </button>
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={handleAddFoodPack}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Add Food Pack
          </button>
        </div> */}

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Create Restaurant"}
          </button>
        </div>
      </form>
    </div>
  );
}
