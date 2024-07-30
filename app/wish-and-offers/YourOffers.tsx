import React from 'react';
import { MapPin, Clock, Eye, ThumbsUp, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "../../@/components/ui/card";
import { Button } from "../../@/components/ui/button";
import { Badge } from "../../@/components/ui/badge";

const yourOffers = [
  { id: 1, title: "Handmade Pashmina Shawls Wholesale", category: "Textiles", location: "Kathmandu", postedAt: "3 days ago", views: 95, interested: 7, matches: 4 },
  { id: 2, title: "Nepali Spice Export Services", category: "Food & Beverage", location: "Birgunj", postedAt: "5 days ago", views: 110, interested: 6, matches: 1 },
];

export const YourOffers: React.FC = () => (
  <>
    <h2 className="text-xl font-semibold mb-4">Your Offers</h2>
    {yourOffers.map(offer => (
      <Card key={offer.id} className="mb-4">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>{offer.title}</CardTitle>
              <p className="text-sm text-gray-600">{offer.category}</p>
            </div>
            <Badge variant="secondary">Offer</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <MapPin className="w-4 h-4 mr-1" /> {offer.location}
            <Clock className="w-4 h-4 ml-4 mr-1" /> Posted {offer.postedAt}
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <span className="flex items-center text-sm text-gray-500">
                <Eye className="w-4 h-4 mr-1" /> {offer.views} views
              </span>
              <span className="flex items-center text-sm text-gray-500">
                <ThumbsUp className="w-4 h-4 mr-1" /> {offer.interested} interested
              </span>
              <span className="flex items-center text-sm text-green-600 font-semibold">
                <AlertCircle className="w-4 h-4 mr-1" /> {offer.matches} matches
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
