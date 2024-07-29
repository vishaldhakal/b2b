import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Clock } from "lucide-react";
import { WishOfferItem } from "../../../../types/wish";

interface MatchingAreaProps {
  selectedItem: WishOfferItem | null;
  exactMatches: WishOfferItem[];
  isOffer: boolean;
}

const MatchingArea: React.FC<MatchingAreaProps> = ({
  selectedItem,
  exactMatches,
  isOffer,
}) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-xl font-semibold mb-4">Matches</h2>
    {selectedItem ? (
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-lg ${
            isOffer ? "bg-green-100" : "bg-blue-100"
          }`}
        >
          <h3 className="font-semibold">{selectedItem.title}</h3>
          <p className="text-sm text-gray-600">
            {selectedItem.category} - {selectedItem.type}
          </p>
        </motion.div>
        <div className="flex justify-center items-center">
          <ArrowRight
            className={`w-8 h-8 ${
              isOffer ? "text-green-500" : "text-blue-500"
            }`}
          />
        </div>
        {exactMatches.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg ${
              isOffer ? "bg-blue-100" : "bg-green-100"
            }`}
          >
            <h3 className="font-semibold flex items-center">
              <Zap
                className={`w-5 h-5 mr-2 ${
                  isOffer ? "text-blue-500" : "text-green-500"
                }`}
              />
              Exact {isOffer ? "Wish" : "Offer"} Match Found!
            </h3>
            <p className="text-sm text-gray-600">{exactMatches[0].title}</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-yellow-100 rounded-lg"
          >
            <h3 className="font-semibold flex items-center">
              <Clock className="w-5 h-5 mr-2 text-yellow-500" />
              No Exact Matches Yet
            </h3>
            <p className="text-sm text-gray-600">
              Check probable matches below
            </p>
          </motion.div>
        )}
      </div>
    ) : (
      <p className="text-center text-gray-500">
        Select an {isOffer ? "offer" : "wish"} to see matches
      </p>
    )}
  </div>
);

export default MatchingArea;
