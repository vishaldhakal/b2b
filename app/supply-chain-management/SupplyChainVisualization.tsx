import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../@/components/ui/card";
import { SupplyChainStage } from "./types";

interface SupplyChainVisualizationProps {
  activeStage: string;
  setActiveStage: (stage: string) => void;
  supplyChainStages: SupplyChainStage[];
}

export const SupplyChainVisualization: React.FC<
  SupplyChainVisualizationProps
> = ({ activeStage, setActiveStage, supplyChainStages }) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Your Supply Chain</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap justify-between items-center">
          {supplyChainStages.map((stage, index) => (
            <div key={stage.id} className="flex flex-col items-center mb-4">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center ${
                  stage.color
                } ${
                  stage.id === activeStage ? "ring-4 ring-blue-300" : ""
                } cursor-pointer`}
                onClick={() => setActiveStage(stage.id)}
              >
                {stage.icon}
              </div>
              <span className="mt-2 text-sm font-medium">{stage.name}</span>
              {index < supplyChainStages.length - 1 && (
                <div className="w-full h-1 bg-gray-300 my-2"></div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
