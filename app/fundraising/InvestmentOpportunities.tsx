import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../@/components/ui/card";
import { Button } from "../../@/components/ui/button";
import { Progress } from "../../@/components/ui/progress";
import { MapPin, Users, ArrowRight } from "lucide-react";

interface InvestmentOpportunity {
  id: number;
  name: string;
  industry: string;
  location: string;
  fundingGoal: number;
  raised: number;
  investors: number;
  daysLeft: number;
}

const mockOpportunities: InvestmentOpportunity[] = [
  {
    id: 1,
    name: "EcoTrek Nepal",
    industry: "Eco-Tourism",
    location: "Pokhara",
    fundingGoal: 500000,
    raised: 350000,
    investors: 45,
    daysLeft: 20,
  },
  {
    id: 2,
    name: "Himalayan Organic Farms",
    industry: "Agriculture",
    location: "Ilam",
    fundingGoal: 250000,
    raised: 100000,
    investors: 28,
    daysLeft: 35,
  },
  {
    id: 3,
    name: "NepTech Solutions",
    industry: "Information Technology",
    location: "Kathmandu",
    fundingGoal: 1000000,
    raised: 750000,
    investors: 60,
    daysLeft: 15,
  },
];

export const InvestmentOpportunities: React.FC = () => {
  return (
    <div className="space-y-6">
      {mockOpportunities.map((opportunity) => (
        <Card key={opportunity.id}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>{opportunity.name}</CardTitle>
                <p className="text-sm text-gray-600">{opportunity.industry}</p>
              </div>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {opportunity.daysLeft} days left
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <MapPin className="w-4 h-4 mr-1" /> {opportunity.location}
              <Users className="w-4 h-4 ml-4 mr-1" /> {opportunity.investors}{" "}
              investors
            </div>
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Funding Progress</span>
                <span>
                  {Math.round(
                    (opportunity.raised / opportunity.fundingGoal) * 100
                  )}
                  %
                </span>
              </div>
              <Progress
                value={(opportunity.raised / opportunity.fundingGoal) * 100}
              />
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>Rs. {opportunity.raised.toLocaleString()} raised</span>
              <span className="font-semibold">
                Rs. {opportunity.fundingGoal.toLocaleString()} goal
              </span>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">
              View Details <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="default">Invest Now</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
