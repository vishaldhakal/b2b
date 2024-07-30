import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../@/components/ui/card";
import { SupplyChainStage } from "./types";

interface ActiveStageDetailsProps {
  activeStage: string;
  supplyChainStages: SupplyChainStage[];
}

export const ActiveStageDetails: React.FC<ActiveStageDetailsProps> = ({
  activeStage,
  supplyChainStages,
}) => {
  const stageName =
    supplyChainStages.find((stage) => stage.id === activeStage)?.name || "";

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>{stageName} Stage</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Inventory</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Current stock: 1,500 units</p>
              <p>Reorder point: 1,000 units</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Lead Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Average: 7 days</p>
              <p>Last order: 5 days</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Costs</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Production: $10,000</p>
              <p>Storage: $2,000</p>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
};
