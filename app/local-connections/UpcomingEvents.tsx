import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../../@/components/ui/card";
import { Button } from "../../@/components/ui/button";

interface Event {
  name: string;
  date: string;
  location: string;
}

const mockEvents: Event[] = [
  { name: "Kathmandu Business Expo", date: "Aug 15-17, 2024", location: "Bhrikutimandap" },
  { name: "Nepal IT Conference", date: "Sep 5-6, 2024", location: "Hotel Yak & Yeti" },
];

export const UpcomingEvents: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Events</CardTitle>
      </CardHeader>
      <CardContent>
        {mockEvents.map((event, index) => (
          <div key={index} className="mb-3">
            <p className="font-semibold">{event.name}</p>
            <p className="text-gray-600 text-sm">{event.date} • {event.location}</p>
          </div>
        ))}
        <Button variant="link" className="text-blue-600 hover:underline text-sm p-0">
          See all events
        </Button>
      </CardContent>
    </Card>
  );
};
