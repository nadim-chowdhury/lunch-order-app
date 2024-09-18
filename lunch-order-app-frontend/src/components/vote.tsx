"use client";

import { Restaurant } from "@/app/types/restaurant";
import { useState } from "react";

interface VoteProps {
  restaurants: Restaurant[];
}

export default function Vote({ restaurants }: VoteProps) {
  const [selectedPack, setSelectedPack] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleVote = async () => {
    if (!selectedPack || isSubmitting) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("http://localhost:8000/api/votes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          employee: "John Doe",
          foodPackId: selectedPack,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit vote");
      }

      const data = await res.json();
      console.log("data:", data);

      if (data.id) {
        alert("Vote cast successfully!");
      } else {
        alert("Failed to submit vote.");
      }
    } catch (error) {
      console.error("Error submitting vote:", error);
      alert("Error submitting vote.");
    } finally {
      setSelectedPack(null);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {restaurants?.map((restaurant) => (
          <div key={restaurant.id} className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">{restaurant?.name}</h2>
            <ul className="flex flex-wrap items-center gap-4">
              {restaurant?.foodPacks?.map((pack) => (
                <li key={pack.id}>
                  <button
                    onClick={() => setSelectedPack(pack.id)}
                    className={`px-4 py-2 rounded-lg ${
                      selectedPack === pack.id
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {pack?.name}
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
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Vote"}
        </button>
      </div>
    </div>
  );
}
