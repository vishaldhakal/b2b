"use client";

import React from "react";
import {
  HeroSection,
  DistrictSection,
  FeaturesSection,
  SupplyChainSection,
} from "../@/components/sections/@landing";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 space-y-16">
      <HeroSection />
      <FeaturesSection />
      <DistrictSection />
      <SupplyChainSection />
    </main>
  );
}
