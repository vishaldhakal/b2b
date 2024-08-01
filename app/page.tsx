"use client";

import React from "react";
import {
  HeroSection,
  DistrictSection,
  FeaturesSection,
} from "../@/components/sections/@landing";

export default function Home() {
  return (
    <main className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-8 space-y-16">
      <HeroSection />
      <FeaturesSection />
      <DistrictSection />
    </main>
  );
}
