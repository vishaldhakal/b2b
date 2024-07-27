import React from "react";
import { Activity } from "lucide-react";

const SupplyChainSection = () => (
  <section className="bg-white p-8 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold mb-4 flex items-center">
      <Activity className="mr-2 h-6 w-6 text-blue-600" />
      Supply Chain Visualization
    </h2>
    <p className="text-gray-600 mb-6">
      Understand and optimize your supply chain network.
    </p>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="text-center text-gray-500">
        Supply Chain Visualization Tool
      </p>
    </div>
  </section>
);

export default SupplyChainSection;
