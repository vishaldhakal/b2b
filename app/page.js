"use client";

import React from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/sections/@landing/hero";
import FeaturesSection from "@/components/sections/@landing/features";
import DistrictSection from "@/components/sections/@landing/district";
import SupplyChainSection from "@/components/sections/@landing/supplychain";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Home() {
  return (
    <motion.main
      className="container mx-auto px-4 py-8 space-y-16"
      initial="initial"
      animate="animate"
      variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
    >
      <motion.div variants={fadeInUp}>
        <HeroSection />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <FeaturesSection />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <DistrictSection />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <SupplyChainSection />
      </motion.div>
    </motion.main>
  );
}
