"use client";

import React from "react";
import {
  HeroSection,
  DistrictSection,
  FeaturesSection,
} from "../@/components/sections/@landing";
import EventsAndCompanySection from "../@/components/sections/landing/event-section";
import SuccessStoriesSection from "../@/components/sections/landing/testimonials-section";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <EventsAndCompanySection />
      <FeaturesSection />
      <SuccessStoriesSection />
      <DistrictSection />
    </main>
  );
}
