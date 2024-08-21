import React from "react";
import EventCard from "../landing/event-card";
import { EventData } from "../landing/event-section";

const B2BHero: React.FC = () => {
  const event: EventData = {
    date: "FRI, SEP 27, 2024",
    time: "6:30 PM",
    timezone: "NZST",
    title: "Nepali Business Networking Meet Up",
    location: "Biratnagar, Nepal",
    imageUrl: "/Logo.svg",
    description:
      "Dear Meetup Group Members, We are thrilled to see that a significant number of you, including waiting list, have expressed interest in...",
    attendees: Array(7)
      .fill(null)
      .map((_, i) => ({
        name: `Attendee ${i + 1}`,
        avatarUrl: `/api/placeholder/40/40?text=${i + 1}`,
      })),
  };

  return (
    <div className="relative min-h-fit flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/Rectangle 3.png"
          alt="Mountain background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative z-10 w-full ml-auto">
        <EventCard event={event} />
      </div>
    </div>
  );
};

export default B2BHero;
