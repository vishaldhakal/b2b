import React from "react";
import { MapPin, Clock, Eye, ThumbsUp, AlertCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../../@/components/ui/card";
import { Button } from "../../@/components/ui/button";
import { Badge } from "../../@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../@/components/ui/dialog";

const yourOffers = [
  {
    id: 1,
    title: "Handmade Pashmina Shawls Wholesale",
    category: "Textiles",
    location: "Kathmandu",
    postedAt: "3 days ago",
    views: 95,
    interested: 7,
    matches: [
      {
        id: 1,
        title: "Seeking Pashmina Shawls Supplier",
        category: "Textiles",
        location: "Pokhara",
        postedAt: "1 day ago",
        views: 50,
        interested: 3,
      },
      {
        id: 2,
        title: "Wholesale Buyer for Handmade Shawls",
        category: "Textiles",
        location: "Birgunj",
        postedAt: "4 days ago",
        views: 75,
        interested: 5,
      },
      {
        id: 3,
        title: "Looking for Nepali Pashmina Wholesaler",
        category: "Textiles",
        location: "Biratnagar",
        postedAt: "1 week ago",
        views: 120,
        interested: 8,
      },
      {
        id: 4,
        title: "Pashmina Importer Seeking Supplier",
        category: "Textiles",
        location: "Kathmandu",
        postedAt: "2 days ago",
        views: 85,
        interested: 6,
      },
    ],
  },
  {
    id: 2,
    title: "Nepali Spice Export Services",
    category: "Food & Beverage",
    location: "Birgunj",
    postedAt: "5 days ago",
    views: 110,
    interested: 6,
    matches: [
      {
        id: 1,
        title: "Seeking Nepali Spice Supplier",
        category: "Food & Beverage",
        location: "Kathmandu",
        postedAt: "3 days ago",
        views: 65,
        interested: 4,
      },
    ],
  },
  {
    id: 3,
    title: "Nepali Handicrafts Exporter",
    category: "Handicrafts",
    location: "Kathmandu",
    postedAt: "1 week ago",
    views: 80,
    interested: 5,
    matches: [
      {
        id: 1,
        title: "Seeking Handicrafts Supplier",
        category: "Handicrafts",
        location: "Pokhara",
        postedAt: "4 days ago",
        views: 55,
        interested: 3,
      },
      {
        id: 2,
        title: "Handicrafts Buyer for Wholesale",
        category: "Handicrafts",
        location: "Biratnagar",
        postedAt: "1 week ago",
        views: 90,
        interested: 6,
      },
    ],
  },
  {
    id: 4,
    title: "Nepali Coffee Beans Exporter",
    category: "Agriculture",
    location: "Pokhara",
    postedAt: "2 weeks ago",
    views: 100,
    interested: 8,
    matches: [
      {
        id: 1,
        title: "Seeking Nepali Coffee Beans Supplier",
        category: "Agriculture",
        location: "Kathmandu",
        postedAt: "1 week ago",
        views: 70,
        interested: 5,
      },
      {
        id: 2,
        title: "Coffee Roaster for Wholesale",
        category: "Agriculture",
        location: "Birgunj",
        postedAt: "2 weeks ago",
        views: 95,
        interested: 7,
      },
    ],
  },
  {
    id: 5,
    title: "Nepali Woolen Garments Exporter",
    category: "Textiles",
    location: "Biratnagar",
    postedAt: "3 weeks ago",
    views: 120,
    interested: 10,
    matches: [
      {
        id: 1,
        title: "Seeking Woolen Garments Supplier",
        category: "Textiles",
        location: "Kathmandu",
        postedAt: "2 weeks ago",
        views: 80,
        interested: 6,
      },
      {
        id: 2,
        title: "Garments Buyer for Wholesale",
        category: "Textiles",
        location: "Pokhara",
        postedAt: "3 weeks ago",
        views: 110,
        interested: 9,
      },
    ],
  },
];

const MatchItem = ({ match }) => (
  <Card key={match.id} className="mb-4">
    <CardHeader>
      <div className="flex justify-between items-start">
        <div>
          <CardTitle>{match.title}</CardTitle>
          <p className="text-sm text-gray-600">{match.category}</p>
        </div>
        <Badge variant="secondary">Wish</Badge>
      </div>
    </CardHeader>
    <CardContent>
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <MapPin className="w-4 h-4 mr-1" /> {match.location}
        <Clock className="w-4 h-4 ml-4 mr-1" /> Posted {match.postedAt}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="flex items-center text-sm text-gray-500">
            <Eye className="w-4 h-4 mr-1" /> {match.views} views
          </span>
          <span className="flex items-center text-sm text-gray-500">
            <ThumbsUp className="w-4 h-4 mr-1" /> {match.interested} interested
          </span>
        </div>
      </div>
    </CardContent>
    <CardFooter>
      <Button>Contact Wisher</Button>
    </CardFooter>
  </Card>
);

const MatchesDialog = ({ offer }) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">View Matches</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[600px]">
      <DialogHeader>
        <DialogTitle>Matches for: {offer.title}</DialogTitle>
      </DialogHeader>
      <div className="mt-4 max-h-[60vh] overflow-y-auto">
        {offer.matches.map((match) => (
          <MatchItem key={match.id} match={match} />
        ))}
      </div>
    </DialogContent>
  </Dialog>
);

const OfferItem = ({ offer }) => (
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
            <AlertCircle className="w-4 h-4 mr-1" /> {offer.matches.length}{" "}
            matches
          </span>
        </div>
      </div>
    </CardContent>
    <CardFooter>
      <MatchesDialog offer={offer} />
    </CardFooter>
  </Card>
);

export const YourOffers: React.FC = () => (
  <div className="relative">
    <div className="absolute top-0 left-1/2 border border-gray-300 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 rounded-full px-6 py-2  z-10">
      <h2 className="font-semibold">Your Offers</h2>
    </div>
    <Card className="pt-8 max-h-[660px] overflow-scroll">
      <CardContent>
        {yourOffers.map((offer) => (
          <OfferItem key={offer.id} offer={offer} />
        ))}
      </CardContent>
    </Card>
  </div>
);
