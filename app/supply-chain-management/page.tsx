"use client";
import React, { useState } from "react";
import { SupplyChainVisualization } from "./SupplyChainVisualization";
import { ActiveStageDetails } from "./ActiveStageDetails";
import { Connections } from "./Connections";
import { QuickActions } from "./QuickActions";
import { SupplyChainStage } from "./types";
import { Truck, Package, ShoppingCart, Users, Factory } from "lucide-react";

const supplyChainStages: SupplyChainStage[] = [
  {
    id: "sourcing",
    name: "Sourcing",
    icon: <Package className="w-8 h-8" />,
    color: "bg-yellow-500",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: <Factory className="w-8 h-8" />,
    color: "bg-blue-900",
  },
  {
    id: "distribution",
    name: "Distribution",
    icon: <Truck className="w-8 h-8" />,
    color: "bg-green-500",
  },
  {
    id: "retail",
    name: "Retail",
    icon: <ShoppingCart className="w-8 h-8" />,
    color: "bg-red-500",
  },
  {
    id: "customer",
    name: "Customer",
    icon: <Users className="w-8 h-8" />,
    color: "bg-purple-500",
  },
];

const SupplyChainManagementPage: React.FC = () => {
  const [activeStage, setActiveStage] = useState("manufacturing");

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto p-4">
        <SupplyChainVisualization
          activeStage={activeStage}
          setActiveStage={setActiveStage}
          supplyChainStages={supplyChainStages}
        />
        <ActiveStageDetails
          activeStage={activeStage}
          supplyChainStages={supplyChainStages}
        />
        <Connections />
        <QuickActions />
      </main>
    </div>
  );
};

export default SupplyChainManagementPage;
