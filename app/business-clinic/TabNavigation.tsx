import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../@/components/ui/tabs";
import { ExpertList } from "./ExpertList";
import { SessionList } from "./SessionList";

export const TabNavigation: React.FC = () => {
  return (
    <Tabs defaultValue="experts" className="w-full mb-6">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="experts">Our Experts</TabsTrigger>
        <TabsTrigger value="sessions">My Sessions</TabsTrigger>
      </TabsList>
      <TabsContent value="experts">
        <ExpertList />
      </TabsContent>
      <TabsContent value="sessions">
        <SessionList />
      </TabsContent>
    </Tabs>
  );
};
