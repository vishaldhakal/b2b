import React from "react";
import { TollFreeNumber } from "./TollFreeNumber";
import { TabNavigation } from "./TabNavigation";
import { ExpertList } from "./ExpertList";
import { SessionList } from "./SessionList";
import { ResourceSection } from "./ResourceSection";

const BusinessClinicPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto p-4">
        <TollFreeNumber />
        <TabNavigation />
        <ExpertList />
        <SessionList />
        <ResourceSection />
      </main>
    </div>
  );
};

export default BusinessClinicPage;
