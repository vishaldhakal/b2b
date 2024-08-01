"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { EventList } from "../../sections/@b2b-bazar/EventList";

export const EventTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className="w-full mb-6"
    >
      <TabsList className="grid w-full h-full grid-cols-3 mb-10">
        <TabsTrigger value="upcoming" className="py-4">
          Upcoming Events
        </TabsTrigger>
        <TabsTrigger value="past" className=" py-4">
          Past Events
        </TabsTrigger>
        <TabsTrigger value="my" className=" py-4">
          My Events
        </TabsTrigger>
      </TabsList>
      <TabsContent value="upcoming">
        <EventList />
      </TabsContent>
      <TabsContent value="past">
        <EventList />
      </TabsContent>
      <TabsContent value="my">
        <EventList />
      </TabsContent>
    </Tabs>
  );
};
