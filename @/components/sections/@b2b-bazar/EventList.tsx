import React from "react";
import { Calendar, MapPin, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  attendees: number;
  type: string;
}

const mockEvents: Event[] = [
  {
    id: 1,
    title: "Nepal Tech Summit 2024",
    date: "Aug 15, 2024",
    location: "Kathmandu",
    attendees: 500,
    type: "Technology",
  },
  {
    id: 2,
    title: "Agricultural Innovation Expo",
    date: "Sep 5, 2024",
    location: "Pokhara",
    attendees: 300,
    type: "Agriculture",
  },
  {
    id: 3,
    title: "Himalayan Business Network Meet",
    date: "Oct 10, 2024",
    location: "Biratnagar",
    attendees: 200,
    type: "Networking",
  },
  {
    id: 4,
    title: "Sustainable Tourism Conference",
    date: "Nov 20, 2024",
    location: "Chitwan",
    attendees: 250,
    type: "Tourism",
  },
];

export const EventList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockEvents.map((event) => (
        <Card key={event.id}>
          <CardHeader>
            <CardTitle>{event.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-gray-600 mb-2">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center text-gray-600 mb-4">
              <Users className="w-4 h-4 mr-2" />
              <span>{event.attendees} Attendees</span>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <Badge variant="secondary">{event.type}</Badge>
            <Button>Register</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
