import React from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg p-8 md:p-12">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Connect, Collaborate, and Grow Your Business
    </h2>
    <p className="text-lg md:text-xl mb-6">
      Join our B2B networking platform to find the perfect business matches and
      opportunities.
    </p>
    <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center">
      Get Started
      <ArrowRight className="ml-2 h-5 w-5" />
    </button>
  </section>
);

export default HeroSection;
