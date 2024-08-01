"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import SupplyChainVisualization from "../../@/components/sections/@supply/supply-chain-management";

const useSupplyChain = (initialStage = 3) => {
  const [userStage, setUserStage] = useState(initialStage);
  return { userStage, setUserStage };
};

const SupplyChainManagementPage = () => {
  const { userStage, setUserStage } = useSupplyChain();

  return (
    <main className="container mx-auto px-4 py-8">
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">
          Supply Chain Cycle
        </h2>
        <SupplyChainVisualization
          userStage={userStage}
          setUserStage={setUserStage}
        />
      </motion.div>
      <motion.div
        className="text-center mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-lg text-gray-700 mb-4">
          Click on a stage to explore more details about that part of the supply
          chain.
        </p>
        <button
          className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 flex items-center mx-auto"
          onClick={() => setUserStage((prev) => (prev % 5) + 1)}
        >
          Next Stage <ChevronRight className="ml-2" />
        </button>
      </motion.div>
    </main>
  );
};

export default SupplyChainManagementPage;
