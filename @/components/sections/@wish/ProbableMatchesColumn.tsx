import React from "react";
import { motion } from "framer-motion";
import { WishOfferItem } from "../../../../types/wish";

interface ProbableMatchesColumnProps {
  selectedItem: WishOfferItem | null;
  probableMatches: WishOfferItem[];
  isOffer: boolean;
}

const ProbableMatchesColumn: React.FC<ProbableMatchesColumnProps> = ({
  selectedItem,
  probableMatches,
  isOffer,
}) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-xl font-semibold mb-4">
      Probable {isOffer ? "Wish" : "Offer"} Matches
    </h2>
    {selectedItem && (
      <div className="space-y-4">
        {probableMatches.map((match) => (
          <motion.div
            key={match.id}
            className="p-4 bg-gray-100 rounded-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-semibold">{match.title}</h3>
            <p className="text-sm text-gray-600">
              {match.category} - {match.type}
            </p>
            <div className="mt-2 text-sm">
              <span
                className={`inline-block px-2 py-1 rounded ${
                  match.category === selectedItem.category
                    ? "bg-green-200 text-green-800"
                    : "bg-red-200 text-red-800"
                }`}
              >
                Category:{" "}
                {match.category === selectedItem.category
                  ? "Match"
                  : "Mismatch"}
              </span>
              <span
                className={`inline-block px-2 py-1 rounded ml-2 ${
                  match.type === selectedItem.type
                    ? "bg-green-200 text-green-800"
                    : "bg-red-200 text-red-800"
                }`}
              >
                Type: {match.type === selectedItem.type ? "Match" : "Mismatch"}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    )}
  </div>
);

export default ProbableMatchesColumn;
