import React from "react";
import { MapPin, Clock, MessageSquare } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../../@/components/ui/card";
import { Button } from "../../@/components/ui/button";
import { Badge } from "../../@/components/ui/badge";

const matchedListings = [
  {
    id: 1,
    title: "Looking for Handmade Textile Supplier",
    category: "Textiles",
    location: "Pokhara",
    postedBy: "Mountain Boutique",
    postedAt: "1 day ago",
    matchStrength: 95,
  },
  {
    id: 2,
    title: "Web Development Services for Local Businesses",
    category: "IT Services",
    location: "Kathmandu",
    postedBy: "Nepal Tech Solutions",
    postedAt: "3 days ago",
    matchStrength: 88,
  },
  {
    id: 3,
    title: "Bulk Purchase of Nepali Tea",
    category: "Agriculture",
    location: "Kathmandu",
    postedBy: "Global Tea Traders",
    postedAt: "1 week ago",
    matchStrength: 75,
  },
];

export const Matches: React.FC = () => (
  <>
    <h2 className="text-xl font-semibold mb-4">Your Matches</h2>
    {matchedListings.map((match) => (
      <Card key={match.id} className="mb-4">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>{match.title}</CardTitle>
              <p className="text-sm text-gray-600">{match.category}</p>
            </div>
            <Badge
              variant={
                match.matchStrength >= 90
                  ? "default"
                  : match.matchStrength >= 70
                  ? "secondary"
                  : "destructive"
              }
            >
              {match.matchStrength}% Match
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <MapPin className="w-4 h-4 mr-1" /> {match.location}
            <Clock className="w-4 h-4 ml-4 mr-1" /> Posted {match.postedAt}
          </div>
          <p className="text-gray-700 mb-4">
            Posted by: <span className="font-semibold">{match.postedBy}</span>
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">View Details</Button>
          <Button>
            <MessageSquare className="w-4 h-4 mr-2" /> Contact
          </Button>
        </CardFooter>
      </Card>
    ))}
  </>
);
