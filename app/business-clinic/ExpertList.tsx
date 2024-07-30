import React from "react";
import { User, Star, Calendar, MessageSquare } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../@/components/ui/card";
import { Button } from "../../@/components/ui/button";
import { Avatar, AvatarFallback } from "../../@/components/ui/avatar";

interface Expert {
  id: number;
  name: string;
  expertise: string;
  rating: number;
  sessions: number;
}

const mockExperts: Expert[] = [
  {
    id: 1,
    name: "Aarav Sharma",
    expertise: "Startup Strategy",
    rating: 4.9,
    sessions: 150,
  },
  {
    id: 2,
    name: "Priya Patel",
    expertise: "Financial Planning",
    rating: 4.8,
    sessions: 120,
  },
  {
    id: 3,
    name: "Rajesh Gurung",
    expertise: "Marketing & Branding",
    rating: 4.7,
    sessions: 180,
  },
  {
    id: 4,
    name: "Sita Thapa",
    expertise: "Operations Management",
    rating: 4.9,
    sessions: 140,
  },
];

export const ExpertList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {mockExperts.map((expert) => (
        <Card key={expert.id}>
          <CardHeader className="flex flex-row items-center space-x-4 pb-2">
            <Avatar className="w-12 h-12">
              <AvatarFallback>
                {expert.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>{expert.name}</CardTitle>
              <p className="text-sm text-gray-600">{expert.expertise}</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-500 mr-1" />
                <span>{expert.rating}</span>
              </div>
              <span className="text-sm text-gray-500">
                {expert.sessions} sessions conducted
              </span>
            </div>
            <div className="flex space-x-2">
              <Button className="flex-1" variant="default">
                <Calendar className="w-4 h-4 mr-2" /> Book Session
              </Button>
              <Button className="flex-1" variant="outline">
                <MessageSquare className="w-4 h-4 mr-2" /> Message
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
