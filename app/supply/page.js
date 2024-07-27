"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const stages = [
  { name: "Pre Manufacturing", count: 10, id: 1 },
  { name: "Farm", count: 15, id: 2 },
  { name: "Processor", count: 12, id: 3 },
  { name: "Distributor", count: 8, id: 4 },
  { name: "Retailer", count: 20, id: 5 },
];

const SupplyChainManagement = () => {
  const [userStage, setUserStage] = useState(3);

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          Supply Chain Cycle
        </h2>
        <div className="relative w-full aspect-square max-w-3xl mx-auto">
          {stages.map((stage, index) => (
            <React.Fragment key={stage.id}>
              <div
                className={`absolute w-40 h-40 rounded-full flex flex-col items-center justify-center text-center p-4 transition-all duration-300 ${
                  userStage === stage.id
                    ? "bg-blue-200 scale-110 z-10"
                    : "bg-gray-100"
                }`}
                style={{
                  top: `${
                    50 - 40 * Math.cos((index * 2 * Math.PI) / stages.length)
                  }%`,
                  left: `${
                    50 + 40 * Math.sin((index * 2 * Math.PI) / stages.length)
                  }%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <h3 className="text-lg font-semibold mb-1">{stage.name}</h3>
                <p className="text-sm text-gray-600">
                  {stage.count} businesses
                </p>
                {userStage === stage.id && (
                  <div className="mt-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    You are here
                  </div>
                )}
              </div>
              <ArrowRight
                className="absolute w-6 h-6 text-blue-600"
                style={{
                  top: `${
                    50 -
                    48 *
                      Math.cos((index * 2 * Math.PI + Math.PI) / stages.length)
                  }%`,
                  left: `${
                    50 +
                    48 *
                      Math.sin((index * 2 * Math.PI + Math.PI) / stages.length)
                  }%`,
                  transform: `translate(-50%, -50%) rotate(${
                    (index * 360) / stages.length
                  }deg)`,
                }}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </main>
  );
};

export default SupplyChainManagement;
