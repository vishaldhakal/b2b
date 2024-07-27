"use client";
import { useState } from "react";

const stages = [
  { name: "Input Seller", count: 10, id: 1 },
  { name: "Farm", count: 15, id: 2 },
  { name: "Processor", count: 12, id: 3 },
  { name: "Distributor", count: 8, id: 4 },
  { name: "Retailer", count: 20, id: 5 },
  { name: "Consumer", count: 50, id: 6 },
];

const SupplyChainManagement = () => {
  // Set user stage (e.g., Processor)
  const [userStage, setUserStage] = useState(3);

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <div className="flex justify-around items-center">
          {stages.map((stage) => (
            <div
              key={stage.id}
              className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-lg w-32 ${
                userStage === stage.id ? "bg-blue-200" : "bg-gray-100"
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{stage.name}</h3>
              <p className="text-gray-600 mb-2">{stage.count} businesses</p>
              {userStage === stage.id && (
                <div className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
                  You are here
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default SupplyChainManagement;
