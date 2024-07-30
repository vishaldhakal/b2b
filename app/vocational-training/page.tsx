import React from "react";
import { TabNavigation } from "./TabNavigation";
import { FeaturedCourse } from "./FeaturedCourse";
import { CourseList } from "./CourseList";
import { UserProgress } from "./UserProgress";
import { QuickActions } from "./QuickActions";

const VocationalTrainingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto p-4">
        <TabNavigation />
        <FeaturedCourse />
        <CourseList />
        <UserProgress />
        <QuickActions />
      </main>
    </div>
  );
};

export default VocationalTrainingPage;
