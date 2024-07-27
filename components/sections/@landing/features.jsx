import React from "react";
import { Package, Handshake, Calendar, ArrowRight } from "lucide-react";

const FeatureCard = ({ title, description, icon: Icon, linkText }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <Icon className="h-12 w-12 text-blue-600 mb-4" />
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <a href="#" className="text-blue-600 hover:underline flex items-center">
      {linkText} <ArrowRight className="ml-1 h-4 w-4" />
    </a>
  </div>
);

const FeaturesSection = () => (
  <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <FeatureCard
      title="Wish"
      description="Post your product or service requirements and find potential suppliers."
      icon={Package}
      linkText="Create a Wish"
    />
    <FeatureCard
      title="Offer"
      description="Showcase your products or services to potential buyers in the network."
      icon={Handshake}
      linkText="Create an Offer"
    />
    <FeatureCard
      title="Meetings"
      description="Schedule and manage B2B meetings with potential partners."
      icon={Calendar}
      linkText="Book a Meeting"
    />
  </section>
);

export default FeaturesSection;
