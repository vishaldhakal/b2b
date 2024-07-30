import React from 'react';
import { MapPin, Clock, Eye, ThumbsUp, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "../../@/components/ui/card";
import { Button } from "../../@/components/ui/button";
import { Badge } from "../../@/components/ui/badge";

const yourWishes = [
  { id: 1, title: "Web Developer for E-commerce Site", category: "IT Services", location: "Kathmandu", postedAt: "2 days ago", views: 78, interested: 5, matches: 3 },
  { id: 2, title: "Supplier of Organic Tea Leaves", category: "Agriculture", location: "Ilam", postedAt: "1 week ago", views: 120, interested: 8, matches: 2 },
];

export const YourWishes: React.FC = () => (
  <>
    <h2 className="text-xl font-semibold mb-4">Your Wishes</h2>
    {yourWishes.map(wish => (
      <Card key={wish.id} className="mb-4">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>{wish.title}</CardTitle>
              <p className="text-sm text-gray-600">{wish.category}</p>
            </div>
            <Badge variant="secondary">Wish</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <MapPin className="w-4 h-4 mr-1" /> {wish.location}
            <Clock className="w-4 h-4 ml-4 mr-1" /> Posted {wish.postedAt}
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <span className="flex items-center text-sm text-gray-500">
                <Eye className="w-4 h-4 mr-1" /> {wish.views} views
              </span>
              <span className="flex items-center text-sm text-gray-500">
                <ThumbsUp className="w-4 h-4 mr-1" /> {wish.interested} interested
              </span>
              <span className="flex items-center text-sm text-green-600 font-semibold">
                <AlertCircle className="w-4 h-4 mr-1" /> {wish.matches} matches
              </span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button>View Matches</Button>
        </CardFooter>
      </Card>
    ))}
  </>
);
