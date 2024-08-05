import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../@/components/ui/card";
import { AlertCircle } from "lucide-react";

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

const WishItem = ({ wish, onClick }) => (
  <Card
    className="mb-4 cursor-pointer hover:shadow-md transition-shadow"
    onClick={() => onClick(wish)}
  >
    <CardHeader>
      <div className="flex justify-between items-center">
        <div>
          <CardTitle className="">{wish.title}</CardTitle>
          <p className="text-sm text-gray-600">{wish.category}</p>
        </div>
      </div>
      <div className="flex items-center">
        <span className="flex items-center text-sm text-green-600 font-semibold">
          <AlertCircle className="w-4 h-4 mr-1" /> {wish.matches.length} matches
        </span>
      </div>
    </CardHeader>
  </Card>
);

export const WishColumn = ({ setSelectedItem, className }) => (
  <div className={`relative ${className}`}>
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-200 rounded-full px-6 py-2 z-10">
      <h2 className="font-semibold text-blue-800">Your Wishes</h2>
    </div>
    <div className="pt-8 max-h-[calc(100vh-200px)] overflow-y-auto">
      <CardContent>
        {yourWishes.map((wish) => (
          <WishItem key={wish.id} wish={wish} onClick={setSelectedItem} />
        ))}
      </CardContent>
    </div>
  </div>
);
