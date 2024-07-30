import React from "react";
import { Activity, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";

const SupplyChainSection = () => (
  <Card className="overflow-hidden">
    <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
      <CardTitle className="text-2xl font-bold flex items-center">
        <Activity className="mr-2 h-6 w-6" />
        Supply Chain Visualization
      </CardTitle>
      <p className="text-blue-100 mt-2">
        Understand and optimize your supply chain network.
      </p>
    </CardHeader>
    <CardContent className="p-6">
      <div className="bg-gray-100 p-8 rounded-lg flex flex-col items-center justify-center min-h-[200px]">
        <p className="text-center text-gray-500 mb-4">
          Interactive Supply Chain Visualization Tool
        </p>
        <Button variant="outline">
          Launch Visualization
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </CardContent>
    <CardFooter className="bg-gray-50 border-t">
      <p className="text-sm text-gray-600">
        Powered by advanced analytics and real-time data processing
      </p>
    </CardFooter>
  </Card>
);

export default SupplyChainSection;
