import React from "react";
import { Card, CardContent, CardHeader } from "../../../components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";
import { MapPin } from "lucide-react";
import EventCard from "./event-card";

// Types for our data
export interface Attendee {
  name: string;
  avatarUrl?: string;
}

export interface EventData {
  date: string;
  time: string;
  timezone: string;
  title: string;
  location: string;
  imageUrl: string;
  description: string;
  attendees: Attendee[];
}

// Main component
const EventsAndCompanySection: React.FC = () => {
  // Sample event data
  const events: EventData[] = [
    {
      date: "FRI, SEP 27, 2024",
      time: "6:30 PM",
      timezone: "NZST",
      title: "Nepali Business Networking Meet Up",
      location: "Biratnagar, Nepal",
      imageUrl: "/Logo.svg",
      description:
        "We are thrilled to see that a significant number of you, including waiting list, have expressed interest in...",
      attendees: [
        { name: "John Doe" },
        { name: "Jane Smith" },
        { name: "Bob Johnson" },
        { name: "Alice Brown" },
        { name: "Charlie Wilson" },
        { name: "Diana Fox" },
        { name: "Ethan Hunt" },
      ],
    },
    {
      date: "FRI, NOV 29, 2024",
      time: "6:30 PM",
      timezone: "NZDT",
      title: "Indian Business Networking Meet Up",
      location: "Takapuna Boating Club Inc, Beach",
      imageUrl: "/Logo.svg",
      description:
        "Join us for a special Indian Business Networking event that promises to be an evening filled with...",
      attendees: [{ name: "Alex Turner" }, { name: "Emma Watson" }],
    },
  ];

  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-8">
      <div className="text-xl">
        <h2 className="text-3xl font-bold  text-gray-800">Upcoming Events</h2>
        <p className=" text-gray-600">
          Join us at our next event and meet other business owners.
        </p>
      </div>
      <div className="py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
            {events.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsAndCompanySection;
