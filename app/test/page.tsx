"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../@/components/ui/card";
import { Badge } from "../../@/components/ui/badge";
// import { ScrollArea } from "../../@/components/ui/scroll-area";

// Mock data generation (replace with actual API calls in production)
const generateMockData = (type, count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: `${type}-${i + 1}`,
    title: `${type.charAt(0).toUpperCase() + type.slice(1)} ${i + 1}`,
    description: `This is a ${type} description for item ${i + 1}.`,
    category: Math.random() > 0.5 ? "Service" : "Product",
    event: ["BiratBazzar", "Birat Expo", "Non-event"][
      Math.floor(Math.random() * 3)
    ],
  }));
};

const WishCard = ({ item }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    className="mb-4"
  >
    <Card className="bg-blue-50 border-blue-200">
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-blue-800">{item.title}</h3>
        <p className="text-sm text-blue-600 mt-1">{item.description}</p>
        <div className="flex justify-between mt-2">
          <Badge variant="outline" className="bg-blue-100 text-blue-800">
            {item.category}
          </Badge>
          <Badge variant="outline" className="bg-blue-100 text-blue-800">
            {item.event}
          </Badge>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const OfferCard = ({ item }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    className="mb-4"
  >
    <Card className="bg-green-50 border-green-200">
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-green-800">{item.title}</h3>
        <p className="text-sm text-green-600 mt-1">{item.description}</p>
        <div className="flex justify-between mt-2">
          <Badge variant="outline" className="bg-green-100 text-green-800">
            {item.category}
          </Badge>
          <Badge variant="outline" className="bg-green-100 text-green-800">
            {item.event}
          </Badge>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const MatchCard = ({ item }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    className="mb-4"
  >
    <Card className="bg-purple-50 border-purple-200">
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-purple-800">{item.title}</h3>
        <p className="text-sm text-purple-600 mt-1">{item.description}</p>
        <div className="flex justify-between mt-2">
          <Badge variant="outline" className="bg-purple-100 text-purple-800">
            {item.category}
          </Badge>
          <Badge variant="outline" className="bg-purple-100 text-purple-800">
            {item.event}
          </Badge>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const InfiniteScrollColumn = ({ title, items, ItemComponent, bgColor }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollY((prev) => (prev + 1) % (items.length * 100)); // Adjust 100 based on card height
    }, 50); // Adjust for faster/slower scroll

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className={`flex flex-col h-full ${bgColor} p-4 rounded-lg`}>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {/* <ScrollArea className="flex-grow overflow-hidden"> */}
      <motion.div
        animate={{ y: -scrollY }}
        transition={{ type: "tween", ease: "linear" }}
      >
        {items.concat(items).map((item, index) => (
          <ItemComponent key={`${item.id}-${index}`} item={item} />
        ))}
      </motion.div>
      {/* </ScrollArea> */}
    </div>
  );
};

const Dashboard = () => {
  const [wishes] = useState(generateMockData("wish", 20));
  const [offers] = useState(generateMockData("offer", 20));
  const [matches] = useState(generateMockData("match", 20));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">B2B Networking Dashboard</h1>
      <div className="grid grid-cols-3 gap-4 h-[calc(100vh-200px)]">
        <InfiniteScrollColumn
          title="Wishes"
          items={wishes}
          ItemComponent={WishCard}
          bgColor="bg-blue-100"
        />
        <InfiniteScrollColumn
          title="Perfect Matches"
          items={matches}
          ItemComponent={MatchCard}
          bgColor="bg-purple-100"
        />
        <InfiniteScrollColumn
          title="Offers"
          items={offers}
          ItemComponent={OfferCard}
          bgColor="bg-green-100"
        />
      </div>
    </div>
  );
};

export default Dashboard;
