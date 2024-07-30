import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../@/components/ui/card";
import { Button } from "../../@/components/ui/button";

interface Investment {
  id: number;
  name: string;
  industry: string;
  invested: number;
  currentValue: number;
  returnPercentage: number;
}

const mockInvestments: Investment[] = [
  {
    id: 1,
    name: "Kathmandu Craft Brewery",
    industry: "Food & Beverage",
    invested: 50000,
    currentValue: 65000,
    returnPercentage: 30,
  },
  {
    id: 2,
    name: "Nepal Solar Power Co.",
    industry: "Renewable Energy",
    invested: 75000,
    currentValue: 82500,
    returnPercentage: 10,
  },
];

export const YourInvestments: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Your Investment Portfolio</h2>
      {mockInvestments.map((investment) => (
        <Card key={investment.id}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>{investment.name}</CardTitle>
                <p className="text-sm text-gray-600">{investment.industry}</p>
              </div>
              <span
                className={`px-2 py-1 rounded-full text-sm ${
                  investment.returnPercentage >= 0
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {investment.returnPercentage >= 0 ? "+" : ""}
                {investment.returnPercentage}% return
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">Invested Amount</p>
                <p className="font-semibold">
                  Rs. {investment.invested.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Current Value</p>
                <p className="font-semibold">
                  Rs. {investment.currentValue.toLocaleString()}
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="default">
              View Investment Details
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
