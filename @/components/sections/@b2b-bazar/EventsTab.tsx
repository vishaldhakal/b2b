"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";

export const EventTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className="w-full mb-6"
    >
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
        <TabsTrigger value="past">Past Events</TabsTrigger>
        <TabsTrigger value="my">My Events</TabsTrigger>
      </TabsList>
      <TabsContent value="upcoming">Upcoming Events Content</TabsContent>
      <TabsContent value="past">Past Events Content</TabsContent>
      <TabsContent value="my">My Events Content</TabsContent>
    </Tabs>
  );
};
