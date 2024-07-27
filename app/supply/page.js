"use client";
import { useState } from "react";

const stages = [
  { name: "Input Supply", id: 1 },
  { name: "Producer", id: 2 },
  { name: "Processor", id: 3 },
  { name: "Mandi/Wholesalers", id: 4 },
  { name: "Warehouse", id: 5 },
  { name: "Retail Distribution", id: 6 },
  { name: "Institutional Distribution", id: 7 },
  { name: "Consumers", id: 8 },
];

const SupplyChainManagement = () => {
  // Set user stage (e.g., Producer)
  const [userStage, setUserStage] = useState(2);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Supply Chain Management</h1>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">
          Your Stage in the Supply Chain
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {stages.map((stage) => (
            <div
              key={stage.id}
              className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-lg ${
                userStage === stage.id ? "bg-blue-200" : "bg-gray-100"
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{stage.name}</h3>
              {userStage === stage.id && (
                <div className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
                  Current Stage
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
