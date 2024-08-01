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

const yourWishes = [
  {
    id: 1,
    title: "Web Developer for E-commerce Site",
    category: "IT Services",
    location: "Kathmandu",
    postedAt: "2 days ago",
    views: 78,
    interested: 5,
    matches: [
      {
        id: 1,
        title: "Experienced Web Developer Available",
        category: "IT Services",
        location: "Kathmandu",
        postedAt: "1 day ago",
        views: 45,
        interested: 3,
      },
      {
        id: 2,
        title: "E-commerce Specialist for Hire",
        category: "IT Services",
        location: "Pokhara",
        postedAt: "3 days ago",
        views: 62,
        interested: 4,
      },
      {
        id: 3,
        title: "Full Stack Developer Offering Services",
        category: "IT Services",
        location: "Biratnagar",
        postedAt: "1 week ago",
        views: 89,
        interested: 6,
      },
    ],
  },
  {
    id: 2,
    title: "Supplier of Organic Tea Leaves",
    category: "Agriculture",
    location: "Ilam",
    postedAt: "1 week ago",
    views: 120,
    interested: 8,
    matches: [
      {
        id: 1,
        title: "Organic Tea Wholesaler",
        category: "Agriculture",
        location: "Ilam",
        postedAt: "5 days ago",
        views: 75,
        interested: 5,
      },
      {
        id: 2,
        title: "Tea Plantation Owner Offering Premium Leaves",
        category: "Agriculture",
        location: "Dhankuta",
        postedAt: "2 weeks ago",
        views: 110,
        interested: 7,
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
        <Badge variant="secondary">Offer</Badge>
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
      <Button>Contact Offerer</Button>
    </CardFooter>
  </Card>
);

const MatchesDialog = ({ wish }) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">View Matches</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[600px]">
      <DialogHeader>
        <DialogTitle>Matches for: {wish.title}</DialogTitle>
      </DialogHeader>
      <div className="mt-4 max-h-[60vh] overflow-y-auto">
        {wish.matches.map((match) => (
          <MatchItem key={match.id} match={match} />
        ))}
      </div>
    </DialogContent>
  </Dialog>
);

const WishItem = ({ wish }) => (
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
            <AlertCircle className="w-4 h-4 mr-1" /> {wish.matches.length}{" "}
            matches
          </span>
        </div>
      </div>
    </CardContent>
    <CardFooter>
      <MatchesDialog wish={wish} />
    </CardFooter>
  </Card>
);

export const YourWishes: React.FC = () => (
  <div className="relative">
    <div className="absolute top-0 left-1/2 border border-gray-300 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 rounded-full px-6 py-2  z-10">
      <h2 className="font-semibold">Your Wishes</h2>
    </div>
    <Card className="pt-8">
      <CardContent>
        {yourWishes.map((wish) => (
          <WishItem key={wish.id} wish={wish} />
        ))}
      </CardContent>
    </Card>
  </div>
);
