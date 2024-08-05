import React from "react";
import {
  MapPin,
  Clock,
  Eye,
  ThumbsUp,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
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
        matchPercentage: 95,
        matchedAttributes: {
          category: true,
          location: true,
          skills: ["React", "Node.js", "MongoDB"],
        },
      },
      {
        id: 2,
        title: "E-commerce Specialist for Hire",
        category: "IT Services",
        location: "Pokhara",
        postedAt: "3 days ago",
        views: 62,
        interested: 4,
        matchPercentage: 80,
        matchedAttributes: {
          category: true,
          location: false,
          skills: ["Shopify", "WooCommerce"],
        },
      },
      {
        id: 3,
        title: "Full Stack Developer Offering Services",
        category: "IT Services",
        location: "Biratnagar",
        postedAt: "1 week ago",
        views: 89,
        interested: 6,
        matchPercentage: 75,
        matchedAttributes: {
          category: true,
          location: false,
          skills: ["JavaScript", "Python", "SQL"],
        },
      },
    ],
  },
  {
    id: 2,
    title: "Graphic Designer for Logo Design",
    category: "Design & Creative",
    location: "Pokhara",
    postedAt: "1 week ago",
    views: 45,
    interested: 3,
    matches: [
      {
        id: 1,
        title: "Logo Design Expert Available",
        category: "Design & Creative",
        location: "Pokhara",
        postedAt: "3 days ago",
        views: 32,
        interested: 2,
        matchPercentage: 90,
        matchedAttributes: {
          category: true,
          location: true,
          skills: ["Adobe Illustrator", "Photoshop"],
        },
      },
      {
        id: 2,
        title: "Freelance Graphic Designer for Hire",
        category: "Design & Creative",
        location: "Kathmandu",
        postedAt: "2 weeks ago",
        views: 56,
        interested: 4,
        matchPercentage: 85,
        matchedAttributes: {
          category: true,
          location: false,
          skills: ["Figma", "InDesign"],
        },
      },
    ],
  },
  {
    id: 3,
    title: "Content Writer for Blog Posts",
    category: "Writing & Translation",
    location: "Biratnagar",
    postedAt: "3 weeks ago",
    views: 32,
    interested: 2,
    matches: [
      {
        id: 1,
        title: "Professional Content Writer Available",
        category: "Writing & Translation",
        location: "Biratnagar",
        postedAt: "2 weeks ago",
        views: 23,
        interested: 1,
        matchPercentage: 85,
        matchedAttributes: {
          category: true,
          location: true,
          skills: ["SEO", "Copywriting"],
        },
      },
    ],
  },
];

const MatchItem = ({ match }) => (
  <Card key={match.id} className="mb-4 ">
    <CardHeader>
      <div className="flex justify-between items-start">
        <div>
          <CardTitle className="flex items-center">
            {match.title}
            <Badge
              variant="outline"
              className="ml-2 bg-green-100 text-green-800"
            >
              {match.matchPercentage}% Match
            </Badge>
          </CardTitle>
          <p
            className={`text-sm ${
              match.matchedAttributes.category
                ? "text-green-600 font-semibold"
                : "text-gray-600"
            }`}
          >
            {match.matchedAttributes.category && (
              <CheckCircle className="w-4 h-4 inline mr-1" />
            )}
            {match.category}
          </p>
        </div>
        <Badge variant="secondary">Offer</Badge>
      </div>
    </CardHeader>
    <CardContent>
      <div className="flex items-center text-sm mb-4">
        <span
          className={`flex items-center ${
            match.matchedAttributes.location
              ? "text-green-600 font-semibold"
              : "text-gray-500"
          }`}
        >
          {match.matchedAttributes.location && (
            <CheckCircle className="w-4 h-4 inline mr-1" />
          )}
          <MapPin className="w-4 h-4 mr-1" /> {match.location}
        </span>
        <span className="flex items-center text-gray-500 ml-4">
          <Clock className="w-4 h-4 mr-1" /> Posted {match.postedAt}
        </span>
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
      {match.matchedAttributes.skills && (
        <div className="mt-2">
          <p className="text-sm font-semibold text-green-600">
            Matched Skills:
          </p>
          <div className="flex flex-wrap gap-1 mt-1">
            {match.matchedAttributes.skills.map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-green-50 text-green-700 border-green-200"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      )}
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
    <Card className="pt-8 max-h-[660px] overflow-scroll">
      <CardContent>
        {yourWishes.map((wish) => (
          <WishItem key={wish.id} wish={wish} />
        ))}
      </CardContent>
    </Card>
  </div>
);
