import React from "react";
import { PlusCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../@/components/ui/card";
import { Button } from "../../@/components/ui/button";

interface Connection {
  stage: string;
  name: string;
  role: string;
}

const mockConnections: Connection[] = [
  { stage: "sourcing", name: "Nepal Raw Materials Co.", role: "Supplier" },
  { stage: "distribution", name: "Himalayan Logistics", role: "Distributor" },
  { stage: "retail", name: "Kathmandu Retail Network", role: "Retailer" },
];

export const Connections: React.FC = () => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Your Connections</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockConnections.map((connection, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{connection.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{connection.role}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Stage: {connection.stage}
                </p>
              </CardContent>
            </Card>
          ))}
          <Button
            variant="outline"
            className="h-full flex flex-col items-center justify-center"
          >
            <PlusCircle className="w-6 h-6 mb-2" />
            Add New Connection
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
