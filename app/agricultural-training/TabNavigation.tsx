import React from 'react';
import { Tabs, TabsList, TabsTrigger } from "../../@/components/ui/tabs";

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, setActiveTab }) => (
  <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
    <TabsList>
      <TabsTrigger value="courses">Training Courses</TabsTrigger>
      <TabsTrigger value="experts">Expert Sessions</TabsTrigger>
    </TabsList>
  </Tabs>
);
