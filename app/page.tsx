"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  HeroSection,
  DistrictSection,
  FeaturesSection,
  SupplyChainSection,
} from "../components/sections/@landing";

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerChildren: Variants = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

const Section: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div variants={fadeInUp}>{children}</motion.div>
);

export default function Home() {
  return (
    <motion.main
      className="container mx-auto px-4 py-8 space-y-16"
      initial="initial"
      animate="animate"
      variants={staggerChildren}
    >
      <Section>
        <HeroSection />
      </Section>

      <Section>
        <FeaturesSection />
      </Section>

      <Section>
        <DistrictSection />
      </Section>

      <Section>
        <SupplyChainSection />
      </Section>
    </motion.main>
  );
}
