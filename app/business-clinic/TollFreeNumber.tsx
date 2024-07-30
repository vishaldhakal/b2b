import React from "react";
import { Phone } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../@/components/ui/card";

export const TollFreeNumber: React.FC = () => {
  return (
    <Card className="mb-6 text-center">
      <CardHeader>
        <CardTitle>Need Immediate Assistance?</CardTitle>
        <CardDescription>Our experts are just a call away</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center">
          <Phone className="w-8 h-8 text-teal-600 mr-2" />
          <span className="text-3xl font-bold text-teal-600">
            1-800-BIZHELP
          </span>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Toll-free number available 24/7
        </p>
      </CardContent>
    </Card>
  );
};
