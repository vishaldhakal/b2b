"use client";
import React, { useState } from "react";
import { WeatherWidget } from "./WeatherWidget";
import { TabNavigation } from "./TabNavigation";
import { CourseList } from "./CourseList";
import { ExpertSessions } from "./ExpertSessions";
import { FarmersToolkit } from "./FarmersToolkit";
import { CommunityForum } from "./CommunityForum";

const AgriculturalTrainingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("courses");

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto p-4">
        <WeatherWidget />
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "courses" && <CourseList />}
        {activeTab === "experts" && <ExpertSessions />}
        <FarmersToolkit />
        <CommunityForum />
      </main>
    </div>
  );
};

export default AgriculturalTrainingPage;
