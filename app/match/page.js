"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, AlertCircle } from "lucide-react";

const wishes = [
  {
    id: 1,
    title: "Industrial 3D Printer",
    category: "Electronics",
    type: "Product",
  },
  {
    id: 2,
    title: "Supply Chain Optimization",
    category: "Consulting",
    type: "Service",
  },
  {
    id: 3,
    title: "Organic Cotton Fabric",
    category: "Textiles",
    type: "Product",
  },
  {
    id: 4,
    title: "Solar Panel Installation",
    category: "Renewable Energy",
    type: "Service",
  },
  {
    id: 5,
    title: "CNC Milling Machine",
    category: "Machinery",
    type: "Product",
  },
];

const offers = [
  {
    id: 1,
    title: "High-End 3D Printing Services",
    category: "Electronics",
    type: "Service",
  },
  {
    id: 2,
    title: "Industrial 3D Printers for Sale",
    category: "Electronics",
    type: "Product",
  },
  {
    id: 3,
    title: "Logistics Consulting",
    category: "Consulting",
    type: "Service",
  },
  {
    id: 4,
    title: "Sustainable Textiles",
    category: "Textiles",
    type: "Product",
  },
  {
    id: 5,
    title: "Solar Energy Solutions",
    category: "Renewable Energy",
    type: "Service",
  },
  {
    id: 6,
    title: "Manufacturing Equipment",
    category: "Machinery",
    type: "Product",
  },
];

const MatchingPage = () => {
  const [selectedWish, setSelectedWish] = useState(null);
  const [exactMatches, setExactMatches] = useState([]);
  const [probableMatches, setProbableMatches] = useState([]);

  useEffect(() => {
    if (selectedWish) {
      // Simulate matching logic (replace with actual matching algorithm)
      setExactMatches(
        offers.filter(
          (offer) =>
            offer.category === selectedWish.category &&
            offer.type === selectedWish.type
        )
      );
      setProbableMatches(
        offers
          .filter(
            (offer) =>
              offer.category === selectedWish.category ||
              offer.type === selectedWish.type
          )
          .slice(0, 3)
      ); // Limit to 3 probable matches for this example
    }
  }, [selectedWish]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Wishes Column */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Select a Wish</h2>
          <div className="space-y-4">
            {wishes.map((wish) => (
              <motion.div
                key={wish.id}
                className={`p-4 rounded-lg cursor-pointer ${
                  selectedWish?.id === wish.id
                    ? "bg-blue-100 border-2 border-blue-500"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
                onClick={() => setSelectedWish(wish)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="font-semibold">{wish.title}</h3>
                <p className="text-sm text-gray-600">
                  {wish.category} - {wish.type}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Matching Area */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Matches</h2>
          {selectedWish ? (
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-blue-100 rounded-lg"
              >
                <h3 className="font-semibold">{selectedWish.title}</h3>
                <p className="text-sm text-gray-600">
                  {selectedWish.category} - {selectedWish.type}
                </p>
              </motion.div>
              <div className="flex justify-center items-center">
                <ArrowRight className="w-8 h-8 text-blue-500" />
              </div>
              {exactMatches.length > 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 rounded-lg"
                >
                  <h3 className="font-semibold flex items-center">
                    <Check className="w-5 h-5 mr-2 text-green-500" />
                    Exact Match Found!
                  </h3>
                  <p className="text-sm text-gray-600">
                    {exactMatches[0].title}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-yellow-100 rounded-lg"
                >
                  <h3 className="font-semibold flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2 text-yellow-500" />
                    No Exact Matches
                  </h3>
                  <p className="text-sm text-gray-600">
                    Check probable matches
                  </p>
                </motion.div>
              )}
            </div>
          ) : (
            <p className="text-start text-gray-500">
              Select a wish to see matches
            </p>
          )}
        </div>

        {/* Offers Column */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Probable Matches</h2>
          {selectedWish && (
            <div className="space-y-4">
              {probableMatches.map((offer) => (
                <motion.div
                  key={offer.id}
                  className="p-4 bg-gray-100 rounded-lg"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-semibold">{offer.title}</h3>
                  <p className="text-sm text-gray-600">
                    {offer.category} - {offer.type}
                  </p>
                  <div className="mt-2 text-sm">
                    <span
                      className={`inline-block px-2 py-1 rounded ${
                        offer.category === selectedWish.category
                          ? "bg-green-200 text-green-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      Category:{" "}
                      {offer.category === selectedWish.category
                        ? "Match"
                        : "Mismatch"}
                    </span>
                    <span
                      className={`inline-block px-2 py-1 rounded ml-2 ${
                        offer.type === selectedWish.type
                          ? "bg-green-200 text-green-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      Type:{" "}
                      {offer.type === selectedWish.type ? "Match" : "Mismatch"}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MatchingPage;
