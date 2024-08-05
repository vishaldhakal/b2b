import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../@/components/ui/card";
import { AlertCircle } from "lucide-react";

const yourOffers = [
  {
    id: 1,
    title: "Handmade Pashmina Shawls Wholesale",
    category: "Textiles",
    location: "Kathmandu",
    type: "Offer",
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
        matchPercentage: 90,
        matchedAttributes: {
          category: true,
          location: false,
          skills: ["Handmade", "Wholesale"],
        },
      },
      {
        id: 2,
        title: "Wholesale Buyer for Handmade Shawls",
        category: "Textiles",
        location: "Birgunj",
        postedAt: "4 days ago",
        views: 75,
        interested: 5,
        matchPercentage: 85,
        matchedAttributes: {
          category: true,
          location: false,
          skills: ["Wholesale", "Pashmina"],
        },
      },
      {
        id: 3,
        title: "Looking for Nepali Pashmina Wholesaler",
        category: "Textiles",
        location: "Biratnagar",
        postedAt: "1 week ago",
        views: 120,
        interested: 8,
        matchPercentage: 95,
        matchedAttributes: {
          category: true,
          location: false,
          skills: ["Nepali", "Pashmina", "Wholesale"],
        },
      },
      {
        id: 4,
        title: "Pashmina Importer Seeking Supplier",
        category: "Textiles",
        location: "Kathmandu",
        postedAt: "2 days ago",
        views: 85,
        interested: 6,
        matchPercentage: 88,
        matchedAttributes: {
          category: true,
          location: true,
          skills: ["Pashmina", "Import"],
        },
      },
    ],
  },
  {
    id: 2,
    title: "Nepali Spice Export Services",
    category: "Food & Beverage",
    location: "Birgunj",
    type: "Offer",
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
        matchPercentage: 92,
        matchedAttributes: {
          category: true,
          location: false,
          skills: ["Nepali Spices", "Export"],
        },
      },
    ],
  },
  {
    id: 3,
    title: "Nepali Handicrafts Exporter",
    category: "Handicrafts",
    location: "Kathmandu",
    type: "Offer",
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
        matchPercentage: 88,
        matchedAttributes: {
          category: true,
          location: false,
          skills: ["Nepali Handicrafts", "Export"],
        },
      },
      {
        id: 2,
        title: "Handicrafts Buyer for Wholesale",
        category: "Handicrafts",
        location: "Biratnagar",
        postedAt: "1 week ago",
        views: 90,
        interested: 6,
        matchPercentage: 85,
        matchedAttributes: {
          category: true,
          location: false,
          skills: ["Wholesale", "Handicrafts"],
        },
      },
    ],
  },
  {
    id: 4,
    title: "Nepali Coffee Beans Exporter",
    category: "Agriculture",
    location: "Pokhara",
    type: "Offer",
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
        matchPercentage: 93,
        matchedAttributes: {
          category: true,
          location: false,
          skills: ["Nepali Coffee", "Export"],
        },
      },
      {
        id: 2,
        title: "Coffee Roaster for Wholesale",
        category: "Agriculture",
        location: "Birgunj",
        postedAt: "2 weeks ago",
        views: 95,
        interested: 7,
        matchPercentage: 87,
        matchedAttributes: {
          category: true,
          location: false,
          skills: ["Coffee Roasting", "Wholesale"],
        },
      },
    ],
  },
  {
    id: 5,
    title: "Nepali Woolen Garments Exporter",
    category: "Textiles",
    type: "Offer",
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
        matchPercentage: 91,
        matchedAttributes: {
          category: true,
          location: false,
          skills: ["Woolen Garments", "Export"],
        },
      },
      {
        id: 2,
        title: "Garments Buyer for Wholesale",
        category: "Textiles",
        location: "Pokhara",
        postedAt: "3 weeks ago",
        views: 110,
        interested: 9,
        matchPercentage: 89,
        matchedAttributes: {
          category: true,
          location: false,
          skills: ["Wholesale", "Garments"],
        },
      },
    ],
  },
];
const OfferItem = ({ offer, onClick }) => (
  <Card
    className="mb-4 cursor-pointer hover:shadow-md transition-shadow"
    onClick={() => onClick(offer)}
  >
    <CardHeader>
      <div className="flex justify-between items-center">
        <div>
          <CardTitle className="">{offer.title}</CardTitle>
          <p className="text-m text-gray-600">{offer.category}</p>
        </div>
      </div>
      <div className="flex items-center">
        <span className="flex items-center text-sm text-green-600 font-semibold">
          <AlertCircle className="w-4 h-4 mr-1" /> {offer.matches.length}{" "}
          matches
        </span>
      </div>
    </CardHeader>
  </Card>
);

export const OfferColumn = ({ setSelectedItem, className }) => (
  <div className={`relative ${className}`}>
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-200 rounded-full px-6 py-2 z-10">
      <h2 className="font-semibold text-yellow-800">Your Offers</h2>
    </div>
    <div className="pt-8 max-h-[calc(100vh-200px)] overflow-y-auto">
      <CardContent>
        {yourOffers.map((offer) => (
          <OfferItem key={offer.id} offer={offer} onClick={setSelectedItem} />
        ))}
      </CardContent>
    </div>
  </div>
);
