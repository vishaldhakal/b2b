import React from "react";
import { BarChart2, Truck, Settings } from "lucide-react";
import { Button } from "../../@/components/ui/button";

export const QuickActions: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Button variant="secondary" className="bg-green-500 hover:bg-green-600">
        <BarChart2 className="w-6 h-6 mr-2" />
        View Analytics
      </Button>
      <Button variant="secondary" className="bg-yellow-500 hover:bg-yellow-600">
        <Truck className="w-6 h-6 mr-2" />
        Track Shipments
      </Button>
      <Button variant="secondary" className="bg-purple-500 hover:bg-purple-600">
        <Settings className="w-6 h-6 mr-2" />
        Manage Settings
      </Button>
    </div>
  );
};
