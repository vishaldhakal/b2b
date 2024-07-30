import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../@/components/ui/tabs";
import { CourseList } from "./CourseList";
import { UserProgress } from "./UserProgress";

export const TabNavigation: React.FC = () => {
  return (
    <Tabs defaultValue="courses" className="w-full mb-6">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="courses">Available Courses</TabsTrigger>
        <TabsTrigger value="progress">My Progress</TabsTrigger>
      </TabsList>
      <TabsContent value="courses">
        <CourseList />
      </TabsContent>
      <TabsContent value="progress">
        <UserProgress />
      </TabsContent>
    </Tabs>
  );
};
